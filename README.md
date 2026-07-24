# peopleFabrixWebsite

Marketing site for People Fabrix, built with Next.js. Live at https://peoplefabrix.com.

## Setup

```bash
npm install
npm run dev       # http://localhost:3000
```

Copy `.env.local.example` to `.env.local` and fill in real values to enable contact-form email
delivery (Resend). See that file for what each variable does.

## Deployment

Hosted on Railway (service `peoplefabrix-website`, project `peoplefabrix-website`). The Railway
service is connected directly to this GitHub repo's `main` branch — pushing to `main` triggers
an automatic build and deploy, no manual `railway up` needed.

Required production environment variables (set in the Railway dashboard, not committed):
`RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL` — same variables as
`.env.local.example`, needed for the contact form to send email.