"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

export function Tabs() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 border-b px-2 py-1">
      {site.tabs.map((tab) => {
        const active = pathname === tab.href || pathname === `${tab.href}/`;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            aria-current={active ? "page" : undefined}
            className={active ? "font-bold" : "text-blue-700 underline dark:text-blue-400"}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
