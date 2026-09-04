# AGENTS.md — HeyMoses Portfolio

## Project intent

This repository is Moses Ajila's personal portfolio. Treat it as a real personal site, not a demo/template.

The site should feel:
- editorial
- minimal
- confident
- technically precise
- warm rather than corporate
- intentionally designed on both desktop and mobile

Preserve the existing monospace-led visual identity unless the user explicitly requests a different direction.

## Truthfulness rules

Never invent:
- employers or clients
- project outcomes
- metrics
- dates
- awards
- roles
- testimonials
- screenshots
- GitHub URLs
- live-site URLs
- biographies or personal history

If content is missing, structure the UI so the field can be added later, but do not fabricate it.

## Current content architecture

The intended top-level content model is:

1. Intro / identity
2. Work
   - This section is for current/professional work.
   - For now, Fiysam Energy is the only work entry.
3. Projects
   - Fiysam Energy website
   - Fiysam Studio
   - Miva Church
   - Shigoshot
   - Each project should support: image, title, description, GitHub link, live website link.
   - Render only links whose URLs are actually known.
4. Experience / field notes
   - Events attended
   - Programs organized
   - Volunteer work
   - Community involvement
   - Other meaningful experiences
5. Writing
   - Essays and notes published on the portfolio
6. Recommended Reading
   - External reading recommendations only; never imply authorship
7. Contact / footer

Agentstuff is not part of the portfolio and should not be rendered.

## Navigation

Desktop:
- Keep the distinctive side navigation unless a clearly stronger solution is demonstrated.
- Side navigation should remain unobtrusive and visually balanced with the editorial layout.

Mobile:
- Navigation belongs at the top, never fixed at the bottom.
- Prefer a compact sticky top navigation with a light backdrop treatment if needed.
- It must not cause horizontal overflow.
- It must remain usable at 320px width.
- Active section state should remain accessible.

## Visual direction

Use darasoba.com and the user's supplied reference screenshot as inspiration, not as a design to copy literally.

Take inspiration from:
- restrained editorial composition
- strong type hierarchy
- generous breathing room
- subtle grid/dot paper texture
- compact section labels
- simple project presentation
- writing presented as a first-class part of the portfolio
- quiet footer with strong contact call-to-action

Do not reproduce another designer's exact layout, branding, copy, unique illustrations, or distinctive component composition.

### Background treatment

Use a CSS-generated subtle dotted/grid texture rather than an image asset.

Preferred approach:
- warm off-white base
- very low-contrast dots/grid
- dots approximately 1px
- spacing around 20–28px
- optional mask/fade so texture is softer near content-heavy areas
- texture must not reduce text contrast

### Typography

The current monospace/system type direction is intentional.

Improve it through:
- responsive `clamp()` sizing
- readable line-height
- sensible max-widths
- balanced weights
- avoiding overly heavy desktop text and overly thin mobile text
- consistent type tokens instead of arbitrary one-off sizes

Do not solve hierarchy by making everything bold.

## Project cards

Project cards should support:
- verified image
- title
- concise description
- optional GitHub link
- optional live-site link

Desktop:
- editorial grid, likely 2 columns where space permits

Mobile:
- single column
- image first
- clear title and description
- touch-friendly links

Use semantic `<article>` and `<a>` elements.

If a project image is missing:
- do not invent one
- use an intentional neutral media placeholder only if the user explicitly approves placeholders
- otherwise render the card without media until an asset exists

## Experience / field notes

Design this section to grow over time.

Each entry should support:
- title
- type/category
- date or year when known
- place/organization when known
- short description
- optional image
- optional external link

Do not force a corporate résumé timeline. It should be suitable for conferences, events, volunteering, community programs, workshops, and things the user organized.

## Writing

Writing is a core section, not an afterthought.

Support first-party essays/notes with:
- title
- slug
- date
- optional category/tag
- excerpt
- reading time only if it can be derived
- dedicated article route

Prefer simple Markdown/MDX or a similarly maintainable local content format unless the existing stack gives a better native option.

The home page should show a compact writing index inspired by editorial portfolios: title, optional topic, date/year, and link.

## Footer

Footer should feel editorial and calm.

Include:
- a strong but concise contact invitation
- email/contact link
- elsewhere links (GitHub, LinkedIn, X as verified)
- copyright/current year
- back-to-top link

Do not copy Darasoba's exact wording or layout.

## Frontend implementation rules

- Prefer server components for static content.
- Use client components only where interaction genuinely requires them.
- Prefer typed data modules for portfolio content.
- Prefer CSS/Tailwind responsive behavior over viewport-width JavaScript.
- Use semantic HTML.
- Maintain keyboard navigation and visible focus states.
- Respect `prefers-reduced-motion`.
- Avoid `transition: all`.
- Do not add dependencies unless they materially improve the implementation.
- Use Lucide only when an icon is actually needed.
- Do not use emoji as interface icons.
- Avoid decorative complexity that competes with the content.

## Design QA

Before declaring design work complete, inspect at minimum:
- 1440px desktop
- 1024px
- 768px
- 390px mobile
- 320px mobile

Check:
- hierarchy
- line lengths
- section rhythm
- nav behavior
- no overlap
- no horizontal overflow
- focus states
- reduced motion
- image cropping
- text weight/contrast
- touch target sizes

## Validation

After implementation, run:
- `npx tsc --noEmit`
- `npm run lint`
- `npm run build`
- `git diff --check`
- `git status --short`

Never commit or push unless the user explicitly asks.
