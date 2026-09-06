# Local writing

Add published essays and notes to this directory as Markdown files.

Each file must begin with:

```yaml
---
title: Article title
slug: article-slug
date: YYYY-MM-DD
topic: Optional topic
image: Optional path beneath public, such as /images/writing/article-cover.webp
imageAlt: Required descriptive alt text when image is present
excerpt: A short homepage summary
---
```

Write the article body in Markdown below the frontmatter. The filename may be
used as the slug when the `slug` field is omitted. This README is not rendered
as an article.
