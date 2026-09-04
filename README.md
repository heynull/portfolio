# Moses Ajila Portfolio

A minimal personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- Editorial portfolio with work, projects, experiences, local writing, recommended reading, and contact links
- Responsive desktop and mobile layouts
- Keyboard-accessible navigation and project links
- Reduced-motion support
- Static generation through the Next.js App Router
- Basic site metadata and Open Graph metadata
- Local Markdown publishing with dedicated article routes

## Tech stack

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- npm

## Project structure

```text
app/
├── writing/[slug]/page.tsx
├── favicon.ico
├── globals.css
├── layout.tsx
├── not-found.tsx
└── page.tsx
components/
content/
└── writing/
lib/
public/
types/
└── index.ts
next.config.js
package.json
postcss.config.mjs
tailwind.config.ts
tsconfig.json
```

Verified portfolio content lives in `lib/portfolio.ts`. Focused page sections live in
`components/`, local Markdown essays live in `content/writing/`, and the
frontmatter reader lives in `lib/writing.ts`. Global and responsive styles live
in `app/globals.css`.

See `content/writing/README.md` for the required article frontmatter.

## Local development

Use a currently supported Node.js release compatible with Next.js 16 and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npx tsc --noEmit
npm run lint
npm run build
```

## Production

`npm run build` creates the production build and `npm start` serves it. The project can be deployed to any platform that supports Next.js; no provider-specific deployment configuration is committed.

No environment variables are currently required.
