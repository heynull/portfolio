import "server-only";

import fs from "node:fs";
import path from "node:path";
import type { WritingEntry } from "@/types";

const writingDirectory = path.join(process.cwd(), "content", "writing");

function parseFrontmatter(source: string, fileName: string): WritingEntry {
  const normalized = source.replace(/\r\n/g, "\n");

  if (!normalized.startsWith("---\n")) {
    throw new Error(`Writing file ${fileName} is missing frontmatter.`);
  }

  const end = normalized.indexOf("\n---\n", 4);
  if (end === -1) {
    throw new Error(`Writing file ${fileName} has invalid frontmatter.`);
  }

  const attributes = Object.fromEntries(
    normalized
      .slice(4, end)
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        const separator = line.indexOf(":");
        if (separator === -1) {
          throw new Error(`Invalid frontmatter line in ${fileName}: ${line}`);
        }

        const key = line.slice(0, separator).trim();
        const value = line
          .slice(separator + 1)
          .trim()
          .replace(/^["']|["']$/g, "");
        return [key, value];
      }),
  );

  const slug = attributes.slug || path.basename(fileName, ".md");
  const requiredFields = ["title", "date", "excerpt"] as const;

  for (const field of requiredFields) {
    if (!attributes[field]) {
      throw new Error(`Writing file ${fileName} is missing ${field}.`);
    }
  }

  return {
    title: attributes.title,
    slug,
    date: attributes.date,
    topic: attributes.topic || undefined,
    excerpt: attributes.excerpt,
    body: normalized.slice(end + 5).trim(),
  };
}

export function getWritingEntries(): WritingEntry[] {
  if (!fs.existsSync(writingDirectory)) {
    return [];
  }

  return fs
    .readdirSync(writingDirectory)
    .filter((fileName) => fileName.endsWith(".md") && fileName !== "README.md")
    .map((fileName) =>
      parseFrontmatter(
        fs.readFileSync(path.join(writingDirectory, fileName), "utf8"),
        fileName,
      ),
    )
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getWritingEntry(slug: string): WritingEntry | undefined {
  return getWritingEntries().find((entry) => entry.slug === slug);
}
