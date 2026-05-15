# 🚗 Obrive

> Vehicle-focused ecommerce platform — register your vehicle, check its health, recharge FASTag, and buy compatible auto parts.

---

## 📦 Tech Stack

| Layer | Technology |
|-------|-----------|
| Monorepo | Turborepo + pnpm workspaces |
| Backend | NestJS · TypeScript (strict) · GraphQL (Apollo) |
| Database | PostgreSQL 16 · Prisma ORM |
| Cache | Redis 7 |
| Frontend | Next.js 14 (App Router) · Tailwind CSS · shadcn/ui |
| State | Zustand · TanStack Query · React Hook Form |
| Payments | Razorpay |
| Vehicle Data | Vahan / Surepass API |
| Infra | AWS ECS · S3 · Vercel · Docker |

---

## 🗂 Monorepo Structure

```
obrive/
├── apps/
│   ├── api/        ← NestJS backend (REST + GraphQL)
│   ├── web/        ← Next.js customer frontend
│   └── admin/      ← Next.js admin panel
├── packages/
│   ├── types/      ← Shared Zod schemas + TypeScript interfaces
│   └── utils/      ← Shared utility functions
├── docker-compose.yml
├── turbo.json
└── package.json
```

---

## ⚙️ Prerequisites

Make sure you have the following installed before proceeding:

| Tool | Version | Install |
|------|---------|---------|
| Node.js | 20+ | [nodejs.org](https://nodejs.org) |
| pnpm | 8+ | `npm i -g pnpm` |
| Docker Desktop | latest | [docker.com](https://www.docker.com/products/docker-desktop) |
| Git | any | [git-scm.com](https://git-scm.com) |

Verify your setup:

```bash
node --version      # v20+
pnpm --version      # 8+
docker --version
docker compose version   # v2+
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/obrive.git
cd obrive
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start infrastructure (PostgreSQL + Redis)

```bash
docker compose up -d
```

Verify both containers are running:

```bash
docker compose ps

# Test PostgreSQL
docker exec obrive_postgres psql -U obrive -d obrive_dev -c "SELECT version();"

# Test Redis
docker exec obrive_redis redis-cli ping   # → PONG
```

### 4. Set up environment variables

Copy the example env file for the API:

```bash
cp apps/api/.env.example apps/api/.env
```

Then fill in the values in `apps/api/.env` (see [Environment Variables](#-environment-variables) below).

### 5. Run database migrations

```bash
cd apps/api
pnpm prisma migrate dev
pnpm prisma generate
```

### 6. Start development servers

Open two terminals from the root:

```bash
# Terminal 1 — API (runs on http://localhost:3001)
cd apps/api && pnpm start:dev

# Terminal 2 — Web (runs on http://localhost:3000)
cd apps/web && pnpm dev
```

### 7. Verify everything is working

| URL | Expected |
|-----|----------|
| `http://localhost:3001/health` | `{ "status": "ok" }` |
| `http://localhost:3000` | Obrive homepage |
| `http://localhost:3000/login` | Login page |
| `http://localhost:3000/register` | Register page |

---

## 🔑 Environment Variables

Create `apps/api/.env` with the following values:

```env
# Database
DATABASE_URL="postgresql://obrive:obrive_password@localhost:5432/obrive_dev"

# Redis
REDIS_URL="redis://localhost:6379"

# JWT — generate strong secrets (min 32 chars)
JWT_SECRET="your-super-secret-jwt-key-minimum-32-chars-long"
JWT_REFRESH_SECRET="your-super-secret-refresh-key-min-32-chars"

# App
PORT=3001
NODE_ENV=development

# Razorpay (get from https://dashboard.razorpay.com)
RAZORPAY_KEY_ID=""
RAZORPAY_KEY_SECRET=""
RAZORPAY_WEBHOOK_SECRET=""

# Surepass / Vahan API (for RC lookup)
# Leave empty to use mock data during development
SUREPASS_API_TOKEN=""

# AWS S3 (for image uploads — Week 3+)
AWS_ACCESS_KEY_ID=""
AWS_SECRET_ACCESS_KEY=""
AWS_REGION=""
AWS_S3_BUCKET=""
```

> ⚠️ **Never commit `.env` to version control.** It is already listed in `.gitignore`.

> 💡 **No Vahan API keys yet?** Leave `SUREPASS_API_TOKEN` empty — the app falls back to mock RC data automatically during development.

---

## 🐳 Docker Reference

The `docker-compose.yml` at the root spins up PostgreSQL and Redis locally.

```yaml
services:
  postgres:
    image: postgres:16-alpine
    container_name: obrive_postgres
    environment:
      POSTGRES_USER: obrive
      POSTGRES_PASSWORD: obrive_password
      POSTGRES_DB: obrive_dev
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    container_name: obrive_redis
    ports:
      - "6379:6379"
```

**Common Docker commands:**

```bash
# Start containers (run this every time you start work)
docker compose up -d

# Stop containers (keeps your data)
docker compose stop

# Start stopped containers
docker compose start

# View logs
docker compose logs postgres
docker compose logs redis

# Full reset — deletes all local data
docker compose down -v
```

---

## 📜 Available Scripts

Run these from the **monorepo root** unless noted otherwise.

```bash
# Start all apps in dev mode
pnpm dev

# Build all apps
pnpm build

# Lint all apps
pnpm lint

# Run all tests
pnpm test
```

**API-specific** (from `apps/api`):

```bash
pnpm start:dev          # Start NestJS in watch mode
pnpm test               # Unit tests
pnpm test:e2e           # E2E tests
pnpm prisma studio      # Open Prisma DB GUI in browser
pnpm prisma migrate dev # Run pending migrations
pnpm prisma generate    # Regenerate Prisma client
```

**Web-specific** (from `apps/web`):

```bash
pnpm dev        # Start Next.js dev server
pnpm build      # Production build
pnpm lint       # ESLint
```

---

## 🗃 Database

Prisma is used as the ORM. Schema lives at `apps/api/prisma/schema.prisma`.

```bash
# After editing schema.prisma, always run both:
pnpm prisma migrate dev --name <describe-your-change>
pnpm prisma generate

# Open visual DB browser
pnpm prisma studio
```

---

## 🔌 External API Keys

Two external APIs are required for full functionality. Both can be replaced with mock data during early development.

### Razorpay (Payments + FASTag recharge)
1. Sign up at [dashboard.razorpay.com](https://dashboard.razorpay.com)
2. Go to **Settings → API Keys → Generate Key**
3. For webhooks: **Settings → Webhooks → Add New Webhook**
4. Use the **Test Mode** keys during development

### Surepass / Vahan (Vehicle RC lookup)
1. Sign up at [surepass.io](https://surepass.io)
2. Get your API token from the dashboard
3. If unavailable, leave `SUREPASS_API_TOKEN` blank — mock data is served automatically

---

## 🏗 Sprint Plan

This project is built in a 4-week sprint:

| Week | Theme | Key Deliverables |
|------|-------|-----------------|
| Week 1 | Foundation | Monorepo · Auth · Vehicle RC · Health Score · Product Catalogue |
| Week 2 | Commerce Core | Cart · Checkout · Orders · FASTag Recharge · GraphQL |
| Week 3 | Admin + Realtime | Admin Panel · RBAC · Socket.IO · Coupons |
| Week 4 | Launch | Load Testing · Security · E2E Tests · Production Deploy |

---

## 🤝 Contributing

1. Branch off `develop` — never commit directly to `main`
2. Branch naming: `feat/`, `fix/`, `chore/` prefix (e.g. `feat/vehicle-health-score`)
3. Run `pnpm lint` and `pnpm test` before opening a PR
4. Keep PRs focused — one feature or fix per PR

---

## 📄 License

Private — All rights reserved © 2025 Obrive.