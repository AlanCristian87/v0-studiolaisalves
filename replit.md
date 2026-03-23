# Laís Alves Studio e Beleza

A Next.js 16 landing page for a hair salon, migrated from Vercel to Replit.

## Stack

- **Framework**: Next.js 16.2.0 (App Router, Turbopack)
- **UI**: React 19, Tailwind CSS v4, shadcn/ui (Radix UI)
- **Package manager**: pnpm
- **Language**: TypeScript

## Project Structure

- `app/` — Next.js App Router (layout, page, globals.css)
- `components/` — Page sections (header, hero, services, footer, etc.)
- `lib/` — Utility functions
- `hooks/` — Custom React hooks
- `public/` — Static assets

## Running the App

```bash
pnpm run dev
```

Starts on port 5000, bound to `0.0.0.0` (required for Replit preview).

## Replit Configuration

- Dev server: `next dev -p 5000 -H 0.0.0.0`
- Start server: `next start -p 5000 -H 0.0.0.0`
- Workflow: "Start application" → `pnpm run dev`
