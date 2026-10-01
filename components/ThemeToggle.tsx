"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

// Runs in <head> before paint: stored choice wins, otherwise follow the system setting.
export const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");}catch(e){}if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.classList.toggle("dark",t==="dark");})();`;

export function currentTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  window.dispatchEvent(new CustomEvent("themechange", { detail: theme }));
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(currentTheme());

    // Keep following the system setting until the user picks a theme themselves.
    const media = matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = (e: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem("theme")) return;
      } catch {}
      const next = e.matches ? "dark" : "light";
      applyTheme(next);
      setTheme(next);
    };
    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  const toggle = () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("theme", next);
    } catch {}
    applyTheme(next);
    setTheme(next);
  };

  return (
    <button type="button" onClick={toggle} className="rounded border px-2 py-0.5 text-sm">
      {theme === "dark" ? "Light mode" : theme === "light" ? "Dark mode" : "Theme"}
    </button>
  );
}
