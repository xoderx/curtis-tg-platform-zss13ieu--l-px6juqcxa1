# Cloudflare Workers React Template

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/xoderx/curtis-technology-group-enterprise-digital-infrastructure)

A production-ready full-stack application template built with Cloudflare Workers, featuring a React frontend with shadcn/ui components, Tailwind CSS, and a robust backend powered by Durable Objects for stateful data management. This template demonstrates a real-time chat application with users, chat boards, and messaging capabilities.

## Features

- **Full-Stack TypeScript**: End-to-end type safety with shared types between frontend and backend.
- **Cloudflare Durable Objects**: Per-user and per-chat state management with indexes for efficient listing.
- **Modern React Stack**: Vite, React Router, Tanstack Query, shadcn/ui, Tailwind CSS, and Lucide icons.
- **Backend API**: Hono-based routing with CORS, logging, and error handling.
- **Real-Time Chat Demo**: Users, chat boards, message sending/listing, CRUD operations.
- **Theme Support**: Light/dark mode with persistence.
- **Deployment Ready**: One-command deploy to Cloudflare Workers with SPA asset handling.
- **Development Tools**: Hot reload, linting, type generation, and error reporting.
- **Responsive UI**: Mobile-friendly design with sidebar layout option.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, Tanstack Query, React Router, Sonner (toasts), Framer Motion, Lucide React.
- **Backend**: Cloudflare Workers, Hono, Durable Objects, SQLite (via DO storage).
- **Utilities**: Bun (package manager), clsx, Tailwind Merge, Zod (validation), Immer.
- **Dev Tools**: ESLint, Wrangler, Cloudflare Vite plugin.

## Quick Start

1. **Prerequisites**:
   - [Bun](https://bun.sh/) installed.
   - [Cloudflare Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-update/) (auto-installed via `bun install`).

2. **Clone & Install**:
   ```bash
   git clone <your-repo-url>
   cd <project-name>
   bun install
   ```

3. **Generate Worker Types** (first time only):
   ```bash
   bun run cf-typegen
   ```

4. **Development**:
   ```bash
   bun run dev
   ```
   Opens at `http://localhost:3000` (or `$PORT`).

## Local Development

- **Frontend**: Vite dev server with HMR.
- **Backend**: Workers simulated locally via Wrangler.
- **Seed Data**: API endpoints auto-seed mock users/chats on first request.
- **API Docs**: Explore endpoints at `/api/health`, `/api/users`, `/api/chats`, etc.
- **Linting**:
  ```bash
  bun run lint
  ```
- **Build**:
  ```bash
  bun run build
  ```
- **Preview**:
  ```bash
  bun run preview
  ```

### API Usage Examples

All endpoints return `{ success: boolean, data?: T, error?: string }`.

- **List Users**: `GET /api/users?limit=10&cursor=abc`
- **Create User**: `POST /api/users` `{ "name": "Alice" }`
- **List Chats**: `GET /api/chats`
- **Create Chat**: `POST /api/chats` `{ "title": "General" }`
- **List Messages**: `GET /api/chats/:chatId/messages`
- **Send Message**: `POST /api/chats/:chatId/messages` `{ "userId": "u1", "text": "Hello" }`
- **Delete**: `DELETE /api/users/:id`, `POST /api/users/deleteMany` `{ "ids": ["id1"] }`

Frontend uses `api-client.ts` for typed requests.

## Customization

- **UI**: Edit `src/pages/HomePage.tsx`. Add routes in `src/main.tsx`. Use shadcn/ui components.
- **Backend**: Extend `worker/entities.ts` for new entities. Add routes in `worker/user-routes.ts`.
- **Sidebar**: Customize `src/components/app-sidebar.tsx` or remove `AppLayout`.
- **Theme**: Toggle via `ThemeToggle`. CSS vars in `src/index.css`.
- **Remove Demo**: Replace `HomePage` content; delete `HAS_TEMPLATE_DEMO` if present.

## Deployment

1. **Login to Cloudflare**:
   ```bash
   wrangler login
   ```

2. **Configure** (edit `wrangler.jsonc`):
   - Set `name` to your Worker name.
   - Add secrets: `wrangler secret put <NAME>`.

3. **Deploy**:
   ```bash
   bun run deploy
   ```
   Deploys Worker + static assets. SPA routing handled automatically.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/xoderx/curtis-technology-group-enterprise-digital-infrastructure)

Access your app at `https://your-worker.your-subdomain.workers.dev`.

## Troubleshooting

- **Types Missing**: Run `bun run cf-typegen`.
- **CORS Issues**: Allowed origins `*` for dev; restrict in prod.
- **Durable Objects**: Uses SQLite migrations; new deploys start fresh.
- **Bun Issues**: Ensure Bun >=1.0: `bun --version`.

## License

MIT. See [LICENSE](LICENSE) for details.

---

⭐ &nbsp; Star on GitHub &middot; 🐛 &nbsp; [Issues](https://github.com/your-org/your-repo/issues) &middot; 💬 &nbsp; [Discussions](https://github.com/your-org/your-repo/discussions)