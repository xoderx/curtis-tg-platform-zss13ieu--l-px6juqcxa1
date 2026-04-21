import { defineConfig, loadEnv } from "vite";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import pino from "pino";
import { cloudflare } from "@cloudflare/vite-plugin";

const logger = pino();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const stripAnsi = (str: string) =>
  str.replace(
    /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
    ""
  );

const LOG_MESSAGE_BOUNDARY = /\n(?=\[[A-Z][^\]]*\])/g;

const emitLog = (level: "info" | "warn" | "error", rawMessage: string) => {
  const cleaned = stripAnsi(rawMessage).replace(/\r\n/g, "\n");
  const parts = cleaned
    .split(LOG_MESSAGE_BOUNDARY)
    .map((part) => part.trimEnd())
    .filter((part) => part.trim().length > 0);

  if (parts.length === 0) {
    logger[level](cleaned.trimEnd());
    return;
  }

  for (const part of parts) {
    logger[level](part);
  }
};

const customLogger = {
  warnOnce: (msg: string) => emitLog("warn", msg),
  info: (msg: string) => emitLog("info", msg),
  warn: (msg: string) => emitLog("warn", msg),
  error: (msg: string) => emitLog("error", msg),
  hasErrorLogged: () => false,
  clearScreen: () => {},
  hasWarned: false,
};

function safeRemove(filePath: string) {
  try {
    fs.rmSync(filePath, { force: true });
  } catch (error) {
    logger.warn({ filePath, error }, "Failed to remove cache file");
  }
}

function watchDependenciesPlugin() {
  return {
    name: "watch-dependencies",
    configureServer(server: any) {
      const filesToWatch = [
        path.resolve(process.cwd(), "package.json"),
        path.resolve(process.cwd(), "bun.lock"),
      ];

      server.watcher.add(filesToWatch);

      server.watcher.on("change", (filePath: string) => {
        if (!filesToWatch.includes(filePath)) return;

        logger.info(
          `Dependency file changed: ${path.basename(filePath)}. Clearing caches...`
        );

        safeRemove(path.resolve(process.cwd(), ".eslintcache"));
        safeRemove(path.resolve(process.cwd(), "tsconfig.tsbuildinfo"));

        logger.info("Caches cleared successfully.");
      });
    },
  };
}

function reloadTriggerPlugin() {
  return {
    name: "reload-trigger",
    configureServer(server: any) {
      const triggerFile = path.resolve(process.cwd(), ".reload-trigger");
      server.watcher.add(triggerFile);

      server.watcher.on("change", (filePath: string) => {
        if (filePath === triggerFile || filePath.endsWith(".reload-trigger")) {
          logger.info("Reload triggered via .reload-trigger");
          server.ws.send({ type: "full-reload" });
        }
      });
    },
  };
}

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [
      react(),
      cloudflare(),
      watchDependenciesPlugin(),
      reloadTriggerPlugin(),
    ],
    build: {
      minify: true,
      sourcemap: false,
      rollupOptions: {
        output: {
          sourcemapExcludeSources: false,
        },
      },
    },
    customLogger: env.VITE_LOGGER_TYPE === "json" ? customLogger : undefined,
    css: {
      devSourcemap: true,
    },
    server: {
      allowedHosts: true,
      watch: {
        awaitWriteFinish: {
          stabilityThreshold: 150,
          pollInterval: 50,
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@shared": path.resolve(__dirname, "./shared"),
      },
    },
    optimizeDeps: {
      include: ["react", "react-dom", "react-router-dom"],
      exclude: ["agents"],
      force: true,
    },
    define: {
      global: "globalThis",
    },
    cacheDir: "node_modules/.vite",
  });
};
