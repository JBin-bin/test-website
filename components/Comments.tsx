"use client";

import { useEffect, useRef } from "react";
import { currentTheme } from "@/components/ThemeToggle";
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
      "data-theme": currentTheme(),
      "data-lang": "en",
      "data-loading": "lazy",
    }).forEach(([key, value]) => script.setAttribute(key, value));

    container.appendChild(script);

    // Giscus lives in an iframe, so tell it about theme switches via postMessage.
    const onThemeChange = (e: Event) => {
      const theme = (e as CustomEvent<string>).detail;
      container
        .querySelector<HTMLIFrameElement>("iframe.giscus-frame")
        ?.contentWindow?.postMessage({ giscus: { setConfig: { theme } } }, "https://giscus.app");
    };
    window.addEventListener("themechange", onThemeChange);

    return () => {
      window.removeEventListener("themechange", onThemeChange);
      container.replaceChildren();
    };
  }, []);

  return (
    <section className="max-w-2xl p-4">
      <h2 className="font-bold">Comments</h2>
      <div ref={ref} />
    </section>
  );
}
