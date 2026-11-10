# anthonyfink.dev

Personal portfolio of Anthony Fink — Full Stack Web Developer.
Live at **[anthonyfink.dev](https://anthonyfink.dev)**.

Built with Next.js (pages router), TypeScript and Chakra UI, deployed on Vercel.

## Getting started

```bash
npm install
npm run dev                  # http://localhost:3000
```

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint (`eslint-config-next`) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | Unit tests (Vitest) |
| `npm run format` | Format with Prettier |

## Environment variables

None. Third-party IDs that are public by design (Google Analytics measurement ID,
EmailJS service/template/public key) are committed in the source.

## Project structure

```
components/   Reusable UI (Card, Seo, NavBar, Footer, …)
section/      Page-level composites (ProfileSection, ProjectsSection, …)
pages/        Routes and API routes
constants/    Site config, project list, tech stack, structured data
styles/       Chakra theme and global CSS
utils/        Analytics events, rate limiting
public/       Static assets, locales, CV
```

### Content lives in `constants/`

Projects, career history, education and the tech stack are plain data —
edit `constants/projects.ts` and `constants/index.ts` rather than the components.

## API routes

| Route | Purpose |
| --- | --- |
| `POST /api/validate-domain` | MX lookup for the contact form; rate limited per IP |
| `GET /sitemap.xml` | Generated from the route list in `pages/sitemap.xml.ts` |

## Deployment

Pushing to `main` deploys to Vercel. 

## Internationalisation

`next-i18next` is wired up with `en`, `he` and `ru` locales, but the interface is
not translated yet — only a couple of keys exist in `public/locales/`. Automatic
locale detection is therefore **off**, so visitors are not redirected to a
half-translated page. `/he` and `/ru` still resolve if visited directly.
