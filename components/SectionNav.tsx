"use client";

import { useEffect, useState } from "react";
import type { NavigationItem } from "@/types";

export function SectionNav({ items }: { items: NavigationItem[] }) {
  const [activeSection, setActiveSection] = useState<string>(items[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const marker = window.scrollY + Math.min(window.innerHeight * 0.3, 220);
      let current: string = items[0].id;

      for (const item of items) {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= marker) {
          current = item.id;
        }
      }

      if (
        items.some((item) => item.id === "contact") &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 24
      ) {
        current = "contact";
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  return (
    <nav className="section-nav" aria-label="Portfolio sections">
      <ul className="section-nav__list" data-count={items.length}>
        {items.map((item) => (
          <li key={item.id}>
            <a
              className="section-nav__link"
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? "location" : undefined}
            >
              <span>{item.label}</span>
              <span className="section-nav__marker" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
