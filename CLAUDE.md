# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

Marketing site for People Fabrix (an HR/workforce AI product), built with Next.js App Router,
React 19, TypeScript, and Tailwind CSS v4. Static marketing pages plus one API route that sends
contact-form submissions via Resend. Live at https://peoplefabrix.com.

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint (eslint-config-next core-web-vitals + typescript)
```

There is no test suite configured in this repo.

## Environment

Copy `.env.local.example` to `.env.local` to enable contact-form email delivery:
`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`. Without `RESEND_API_KEY` set, the
`/api/contact` route returns a 500 rather than sending mail. `CONTACT_FROM_EMAIL` must be on a
domain verified with Resend, or it falls back to Resend's shared test sender.

## Deployment

Hosted on Railway, connected directly to this repo's `main` branch — pushing to `main` triggers
an automatic build and deploy. Production env vars are set in the Railway dashboard, not
committed.

## Architecture

**Routing** — `src/app/` uses the Next.js App Router. Each marketing route
(`/`, `/about`, `/solutions`, `/contact`, `/privacy`, `/terms`) is a `page.tsx` that composes
components from `src/components/`; there's no nested layouts beyond the single root
`src/app/layout.tsx`, which wraps every page in `Nav` and `Footer`. Old `/platform` links
permanently redirect to `/` (see `next.config.ts`) — that page's content was merged into the
homepage.

**Component organization** — `src/components/` is organized by page/section, not by type:
`home/`, `about/`, `contact/`, `solutions/`, `platform/`, `layout/` (Nav, Footer), `shared/`
(cross-page pieces like `ClosingCTA`, `PageHeader`), `icons/`. When adding a new homepage
section or page section, follow this same page-scoped folder convention rather than a shared
`components/ui/` bucket.

**Content vs. presentation** — copy that appears in multiple places or is naturally tabular
(the five product pillars, the five audience segments) lives in `src/content/*.ts` as typed
data arrays, separate from the components that render it (`PillarDetail.tsx`,
`SolutionsByAudience.tsx`). When editing marketing copy for pillars or audiences, edit
`src/content/pillars.ts` / `src/content/audiences.ts` — not the component files.

**SEO** — `src/lib/seo.ts` exports `pageMetadata({ title, description })`, a helper that fills
in matching `openGraph`/`twitter` blocks (using a shared default OG screenshot) around
per-page title/description. Every page's `metadata` export should use this helper rather than
hand-writing a `Metadata` object, so shared links render consistently on LinkedIn/Slack/email.
The root layout (`src/app/layout.tsx`) sets the site-wide default title/description/OG image
that `pageMetadata` builds on.

**Contact form** — `ContactForm.tsx` posts JSON to `src/app/api/contact/route.ts`, which
validates required fields (name, work email, company), builds an HTML table of the submitted
fields, and sends it via Resend with `replyTo` set to the submitter's email. Errors from
missing config, bad payloads, and Resend failures are all distinguished with different
status codes/messages — keep that distinction if you touch this route.

**Styling** — Tailwind v4 via `@import "tailwindcss"` in `globals.css` (no `tailwind.config.js`
— theme tokens are declared inline with `@theme`). Fonts are `Manrope` (`--font-heading`) and
`Inter` (`--font-body`), loaded via `next/font/google` in the root layout and referenced as
Tailwind font vars. Dark, slide-style sections (e.g. `PillarDetail`) use a repeated
`bg-[#0f172a]` / `#46e5f9` accent color pair rather than a named Tailwind color — match this
literal pair rather than introducing a new brand color when adding similar sections.
