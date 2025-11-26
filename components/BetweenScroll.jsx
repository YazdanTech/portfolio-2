"use client";

import { useEffect } from "react";

export default function BetweenScroll() {
  useEffect(() => {
    const background = document.createElement("div");
    background.id = "background-layer";
    document.body.appendChild(background);

    const sections = document.querySelectorAll(".between-section");

    sections.forEach((section, i) => {
      const h1 = section.querySelector("h1");
      if (!h1) return;

      const clone = h1.cloneNode(true);
      clone.dataset.index = i;
      background.appendChild(clone);
    });

    const bgTexts = background.querySelectorAll("h1");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = [...sections].indexOf(entry.target);
          if (index === -1) return;

          const h1 = bgTexts[index];
          if (!h1) return;

          if (entry.intersectionRatio > 0.5) h1.classList.add("active");
          else h1.classList.remove("active");
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => observer.observe(s));

    return () => {
      observer.disconnect();
      background.remove();
    };
  }, []);

  return null;
}
