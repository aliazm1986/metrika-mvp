# Metrika / مِتریکا

Metrika is a Persian RTL, dark-mode MVP for discovering fictional fractional real-estate projects in Iran. It includes project browsing, architectural renders, an illustrative purchase simulator, a demo investor dashboard, and a prototype secondary marketplace.

> **Important:** This repository is a demo/MVP. Projects, prices, documents, portfolio values, calculations, and listings are fictional. Nothing here is an investment offer, a forecast, a guarantee of return, a legal ownership instrument, or a real transaction.

## Requirements

- Windows 10/11
- Node.js 20 LTS or newer
- npm (included with Node.js)
- Git
- Docker Desktop (optional; only needed for PostgreSQL)
- VS Code (recommended)

## Quick start on Windows

Open the project folder in VS Code, open **Terminal → New Terminal**, and run:

```powershell
Set-ExecutionPolicy -Scope Process Bypass
.\setup-windows.ps1
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

If PowerShell blocks the script, run the commands manually:

```powershell
Copy-Item .env.example .env
npm install
npm run dev
```

The visual demo does not require PostgreSQL.

## Available commands

```powershell
npm run dev          # Start the development server
npm run build        # Create a production build
npm run start        # Serve the production build
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript checks
npm test             # Run Vitest tests
```

For a clean verification:

```powershell
npm run lint
npm run typecheck
npm test
npm run build
```

Stop the development server with `Ctrl+C` before running `npm run build` if Windows reports that a `.next` file is locked.

## Optional PostgreSQL / Prisma

Start PostgreSQL with Docker Desktop:

```powershell
docker compose up -d db
npm run db:generate
npm run db:migrate
npm run db:seed
```

Useful Prisma commands:

```powershell
npx prisma studio
npx prisma validate
npx prisma format
```

The database URL is configured in `.env`. Never commit `.env`; use `.env.example` as the safe template.

## Project structure

```text
app/
  page.tsx                  # Landing page
  projects/                 # Project listing and detail pages
  dashboard/                # Demo investor dashboard
  marketplace/              # Demo secondary marketplace
  api/                      # Demo route handlers
lib/
  data.ts                   # Fictional project data
  finance.ts                # Isolated illustrative calculation
public/projects/            # AI-generated architectural renders
prisma/
  schema.prisma             # Database models
  seed.ts                   # Demo seed data
app/globals.css             # RTL design system and responsive styles
```

## Editing the demo

- Change project names, cities, prices, and descriptions in `lib/data.ts`.
- Change page copy in the relevant `app/**/page.tsx` file.
- Change colors, spacing, cards, and responsive behavior in `app/globals.css`.
- Replace project renders in `public/projects/` while keeping the image paths in `lib/data.ts`.

All generated images are original demo architectural renders made for this project. They are not photographs of real properties.

## GitHub workflow

Create an empty repository on GitHub, then run the following in the project root:

```powershell
git init
git add .
git commit -m "Initial Metrika real-estate MVP"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

Replace `YOUR_USERNAME/YOUR_REPOSITORY` with your own repository path. GitHub may open a browser or ask you to authenticate through Git Credential Manager. Do not put a personal access token inside this README or in source files.

For later updates:

```powershell
git add .
git commit -m "Describe the change"
git push
```

## Deploying a public preview

The easiest permanent preview is Vercel:

1. Push the repository to GitHub.
2. Sign in to Vercel.
3. Choose **Add New → Project** and import the GitHub repository.
4. Keep the framework preset as **Next.js**.
5. Add the variables from `.env.example` only if database features are enabled.
6. Deploy.

The visual demo can be deployed without PostgreSQL. For production, use a managed PostgreSQL provider and run migrations through a controlled deployment process.

## API demo endpoints

```text
GET  /api/projects
POST /api/simulate
```

`/api/simulate` accepts JSON such as:

```json
{
  "budget": 500000,
  "unitPrice": 18500000
}
```

The response is illustrative only and must not be used as financial advice.

## Security, legal, and production checklist

Before any public launch, add and review:

- regulated payment gateway
- KYC/AML and identity verification
- legal ownership and contract workflow
- regulated custody/settlement structure
- secure authentication and authorization
- rate limiting, audit logging, monitoring, and backups
- privacy policy, terms, risk disclosure, and compliance review
- accessibility, performance, penetration testing, and incident response

Do not implement real payments, token issuance, custody, securities settlement, or legally binding property transactions without qualified legal, financial, security, and regulatory review.
