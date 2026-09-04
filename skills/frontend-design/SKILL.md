---
name: frontend-design
description: Design and implement polished, responsive frontend interfaces with strong typography, layout, accessibility, and visual QA. Use when making UI/UX decisions, redesigning sections, translating visual references into original interfaces, or reviewing frontend quality.
---

# Frontend Design Skill

## Purpose

Act as both a senior frontend engineer and a careful product/interface designer.

The goal is not merely to make the page "look better." The goal is to create a coherent visual system whose typography, spacing, hierarchy, interaction, responsive behavior, and accessibility reinforce the content.

User instructions and repository `AGENTS.md` rules take precedence over this skill.

## Before coding

1. Inspect the existing UI and content.
2. Identify the current visual language worth preserving.
3. Identify the actual design problem.
4. Inspect any supplied screenshots or reference sites.
5. Extract principles from references rather than copying their exact implementation.
6. Confirm which content and assets are real before designing around them.

## Reference-site analysis

When studying another website, separate observations into:
- typography
- spacing/rhythm
- grid
- navigation
- color
- texture
- card composition
- imagery
- interaction
- responsive behavior
- footer
- content architecture

Use those principles to create an original result.

Never copy:
- another site's brand
- exact copy
- unique illustrations
- distinctive artwork
- exact page composition
- proprietary assets

## Design hierarchy

Every page should have a clear hierarchy:
- primary identity/message
- section headings
- core content
- metadata
- secondary actions

Use size, weight, spacing, alignment, contrast, and grouping deliberately.

Avoid:
- arbitrary font sizes
- excessive bold text
- tiny low-contrast metadata
- overusing borders
- excessive shadows
- decorative UI with no purpose

## Typography

Use a small tokenized type scale.

Prefer `clamp()` for major responsive sizes.

Evaluate:
- font weight
- line-height
- letter spacing
- max line length
- paragraph density
- mobile readability

Desktop text should not become visually heavy simply because there is more space.
Mobile text should not become thin or fragile.

Aim for comfortable body line lengths, usually about 55–75 characters where practical.

## Spacing

Use a consistent spacing system.

Prioritize:
- section rhythm
- internal card spacing
- alignment
- whitespace around headings
- predictable mobile compression

Do not solve clutter only by shrinking text.

## Layout

Use CSS Grid/Flexbox intentionally.

Desktop and mobile should feel designed separately, not merely collapsed.

At narrow widths:
- remove unnecessary side-by-side layouts
- keep navigation obvious
- maintain touch targets
- avoid horizontal scrolling
- preserve readable gutters

## Background and texture

Subtle texture may add character but must never reduce readability.

For dot/grid backgrounds:
- prefer CSS gradients
- use very low contrast
- avoid visual interference behind body copy
- test on multiple pixel densities
- verify contrast in light and dark environments

## Project presentation

Project cards should communicate in this order:
1. visual
2. title
3. what it is / what was done
4. relevant links

Do not overload cards with tags unless they add meaning.

External links should be clear and semantic.

## Writing/editorial sections

Treat writing as content, not UI decoration.

Lists of essays should prioritize:
- title
- date
- topic/category if useful
- clear click target

Article pages should prioritize reading comfort:
- good measure
- generous line-height
- clear heading rhythm
- sensible code/image treatment
- simple previous/back navigation

## Experience sections

For non-job experiences such as events, volunteering, programs, and community work:
- avoid forcing a corporate employment timeline
- allow mixed entry types
- make dates and context easy to scan
- support images selectively
- favor story/context over badge-like UI

## Interaction

Every interactive element needs:
- hover state where relevant
- keyboard focus state
- touch usability
- clear semantic element
- reduced-motion fallback

Avoid animation for animation's sake.

## Accessibility

Check:
- semantic landmarks
- heading order
- focus visibility
- keyboard operation
- link purpose
- color contrast
- reduced motion
- image alt text
- no content hidden only behind hover
- no viewport-width JS for styling

## Visual QA

Do not stop at successful compilation.

Review the implementation at representative widths:
- 1440
- 1024
- 768
- 390
- 320

Look for:
- broken rhythm
- awkward line wraps
- oversized headings
- weak text weight
- card imbalance
- navigation overlap
- clipped content
- horizontal overflow
- poor image crops
- inconsistent alignment

## Engineering discipline

Prefer:
- reusable tokens
- focused components
- typed content data
- server-rendered static content
- CSS media queries
- simple dependencies

Avoid:
- giant monolithic client components
- duplicated inline styles
- JS resize listeners for layout
- fabricated placeholder content
- dependency additions without need

## Completion report

When done, report:
1. design decisions
2. files changed
3. responsive behavior
4. accessibility improvements
5. unresolved content/assets
6. validation results
