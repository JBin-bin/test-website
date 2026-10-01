"use client";

import { useEffect, useRef } from "react";
import { site } from "@/lib/site";

// Giscus stores comments as GitHub Discussions in the repo; one thread per page path.
export function Comments() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const { repo, repoId, category, categoryId } = site.giscus;
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    Object.entries({
      "data-repo": repo,
      "data-repo-id": repoId,
      "data-category": category,
      "data-category-id": categoryId,
      "data-mapping": "pathname",
      "data-strict": "0",
      "data-reactions-enabled": "1",
      "data-emit-metadata": "0",
      "data-input-position": "bottom",
      "data-theme": "light",
      "data-lang": "en",
      "data-loading": "lazy",
    }).forEach(([key, value]) => script.setAttribute(key, value));

    container.appendChild(script);
    return () => container.replaceChildren();
  }, []);

  return (
    <section className="p-2">
      <h2 className="font-bold">Comments</h2>
      <div ref={ref} />
    </section>
  );
}
