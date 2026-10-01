import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Tabs } from "@/components/Tabs";
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
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <header className="p-2">
          <h1 className="text-xl font-bold">{site.title}</h1>
        </header>
        <Tabs />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
