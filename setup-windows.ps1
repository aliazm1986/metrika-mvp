$ErrorActionPreference = "Stop"

Write-Host "Metrika setup" -ForegroundColor Cyan

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Host "Node.js is not installed. Install Node.js 20 LTS from https://nodejs.org and run this file again." -ForegroundColor Yellow
  exit 1
}

if (-not (Test-Path ".env")) {
  Copy-Item ".env.example" ".env"
  Write-Host "Created .env from .env.example"
}

npm install
npx prisma generate

Write-Host ""
Write-Host "Setup complete." -ForegroundColor Green
Write-Host "Run the app with: npm run dev"
Write-Host "Then open: http://localhost:3000"
Write-Host ""
Write-Host "PostgreSQL is optional for the visual demo. For database features run: docker compose up -d db; npm run db:migrate; npm run db:seed"
