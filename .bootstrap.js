#!/usr/bin/env bun
/**
 * Auto-generated bootstrap script
 * Runs once after git clone to setup project correctly
 */

const fs = require("fs");

const BOOTSTRAP_MARKER = ".bootstrap-complete";
const PROVIDED_WORKER_NAME = process.argv[2];

if (fs.existsSync(BOOTSTRAP_MARKER)) {
  console.log("✓ Bootstrap already completed");
  process.exit(0);
}

console.log("🚀 Running first-time project setup...\n");

try {
  const packageJson = readJson("package.json");
  const wranglerConfig = fs.existsSync("wrangler.jsonc")
    ? readJsonc("wrangler.jsonc")
    : null;

  const projectName =
    PROVIDED_WORKER_NAME ||
    (wranglerConfig && typeof wranglerConfig.name === "string" ? wranglerConfig.name : "") ||
    (packageJson && typeof packageJson.name === "string" ? packageJson.name : "") ||
    null;

  if (!projectName) {
    throw new Error(
      "Could not determine project name from CLI arg, wrangler.jsonc, or package.json"
    );
  }

  updatePackageJson(projectName, packageJson);
  updateWranglerJsonc(projectName, wranglerConfig);
  runSetupCommands();

  fs.writeFileSync(BOOTSTRAP_MARKER, new Date().toISOString() + "\n");

  console.log("\n✅ Bootstrap complete! Project ready.");
} catch (error) {
  console.error("❌ Bootstrap failed:", error.message);
  console.log("You may need to manually update package.json and wrangler.jsonc");
  process.exit(1);
}

function readJson(path) {
  return JSON.parse(fs.readFileSync(path, "utf8"));
}

function stripJsoncComments(content) {
  return content
    .replace(/^\uFEFF/, "")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/^\s*\/\/.*$/gm, "");
}

function readJsonc(path) {
  const raw = fs.readFileSync(path, "utf8");
  return JSON.parse(stripJsoncComments(raw));
}

function writeJson(path, data) {
  fs.writeFileSync(path, JSON.stringify(data, null, 2) + "\n");
}

function updatePackageJson(projectName, pkg) {
  pkg.name = projectName;

  if (pkg.scripts && pkg.scripts.prepare) {
    delete pkg.scripts.prepare;
  }

  writeJson("package.json", pkg);
  console.log("✓ Updated package.json with project name: " + projectName);
}

function updateWranglerJsonc(projectName, wranglerConfig) {
  if (!wranglerConfig) {
    console.log("⊘ wrangler.jsonc not found, skipping");
    return;
  }

  wranglerConfig.name = projectName;
  writeJson("wrangler.jsonc", wranglerConfig);
  console.log("✓ Updated wrangler.jsonc with project name: " + projectName);
}

function runSetupCommands() {
  const commands = [];

  if (commands.length === 0) {
    console.log("⊘ No setup commands to run");
    return;
  }

  console.log("\n📦 Running setup commands...\n");

  let successCount = 0;
  let failCount = 0;

  for (const cmd of commands) {
    console.log(`▸ ${cmd}`);
    try {
      require("child_process").execSync(cmd, {
        stdio: "inherit",
        cwd: process.cwd(),
      });
      successCount++;
    } catch (error) {
      failCount++;
      console.warn(`⚠️  Command failed: ${cmd}`);
      console.warn(`   Error: ${error.message}`);
    }
  }

  console.log(`\n✓ Commands completed: ${successCount} successful, ${failCount} failed\n`);
}
