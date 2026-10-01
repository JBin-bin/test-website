import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Tabs } from "@/components/Tabs";
import { ThemeToggle, themeInitScript } from "@/components/ThemeToggle";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
};

// Shared shell for every tab: title, tab bar, page content, footer.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: the init script adds the "dark" class before React hydrates.
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-screen flex-col bg-white text-black dark:bg-neutral-900 dark:text-neutral-100">
        <header className="flex items-center justify-between p-2">
          <h1 className="text-xl font-bold">{site.title}</h1>
          <ThemeToggle />
        </header>
        <Tabs />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
