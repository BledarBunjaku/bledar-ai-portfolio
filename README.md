# Bledar AI Portfolio Platform

A modern personal portfolio platform for Bledar Bunjaku. It is built as a small product for recruiters, CTOs and founders to evaluate experience, projects, skills, availability and job fit quickly.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Zod validation
- Next.js API routes only
- Gemini API or Groq API for AI responses
- Local markdown/TypeScript data files
- Railway-ready deployment

No database, Redis or NestJS backend is used in version 1.

## Features

- Professional landing page
- Grounded AI assistant at `/ask`
- Project case studies at `/projects`
- Skills page at `/skills`
- Job description match analyzer at `/match`
- Booking page at `/book`
- ATS-friendly CV page at `/cv`
- Real CV and portfolio PDF downloads from `public/docs`
- Open Graph image route
- Mobile responsive layout

## Local Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Set one AI provider key. If neither is configured, the app uses conservative local fallback answers so the UI still works during development.

```bash
GROQ_API_KEY=
GROQ_MODEL=llama-3.1-8b-instant

GEMINI_API_KEY=
GEMINI_MODEL=gemini-1.5-flash

NEXT_PUBLIC_SITE_URL=https://your-railway-domain.up.railway.app
NEXT_PUBLIC_BOOKING_URL=https://calendar.google.com/calendar/appointments/schedules/your-link
NEXT_PUBLIC_CONTACT_EMAIL=bledarbunjaku@gmail.com
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/bledar-bunjaku-6748641b7/
NEXT_PUBLIC_GITHUB_URL=https://github.com/your-profile
```

Server-side API keys are used only in Next.js route handlers and are not exposed to the frontend.

## Data Model

The AI assistant and match analyzer both read:

- `data/bledar-context.md`

The pages use structured local data:

- `src/data/projects.ts`
- `src/data/skills.ts`
- `src/data/experience.ts`
- `src/data/site.ts`
- `public/docs/Bledar_Bunjaku_Software_Engineer_CV.pdf`
- `public/docs/Bledar_Bunjaku_Software_Engineer_Portfolio.pdf`

This keeps version 1 deployable without a database.

## AI Routes

`POST /api/chat`

- Accepts browser-state chat history.
- Reads `data/bledar-context.md`.
- Calls Groq first when `GROQ_API_KEY` is present, otherwise Gemini when `GEMINI_API_KEY` is present.
- Streams the final answer back as plain text.
- Instructs the model to answer only from context and avoid invented facts.

`POST /api/match`

- Accepts a pasted job description.
- Reads the same context file.
- Returns a structured fit analysis with score, matches, weaker areas, relevant projects and a short application message.

`GET /api/cv`

- Returns the real CV PDF as a downloadable file.

## Railway Deployment

1. Create a Railway project from this repository.
2. Set the environment variables listed above.
3. Use the default Next.js build command:

```bash
npm run build
```

4. Use the default start command:

```bash
npm run start
```

5. Set `NEXT_PUBLIC_SITE_URL` to the public Railway domain.

## Version 2 Ideas

- NestJS backend
- PostgreSQL persistence
- Saved chat sessions
- Visitor analytics
- Admin dashboard
- Redis background jobs
- Google Calendar API booking flow
- Email notifications
