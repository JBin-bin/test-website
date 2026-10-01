import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // Build to plain static files in /out (GitHub Pages can't run a Node server)
  output: "export",
  // The site is served from https://jbin-bin.github.io/test-website/
  basePath: isGitHubPages ? "/test-website" : "",
  images: { unoptimized: true },
  // Each tab builds to <slug>/index.html, which GitHub Pages serves cleanly
  trailingSlash: true,
};

export default nextConfig;
