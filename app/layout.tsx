import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Test Website",
  description: "A blank Next.js + Tailwind starter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
