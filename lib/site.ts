// Everything about the site that isn't layout lives here.
export const site = {
  title: "JBin",
  description: "JBin's website",
  repoUrl: "https://github.com/JBin-bin/test-website",
  contact: { name: "JBin", email: "jb.calo@csucc.edu.ph" },
  coAuthors: [
    { name: "Claude" },
    { name: "Lawrence", email: "somewherefishsleep@gmail.com" },
  ],
  // Add a page by creating app/<slug>/page.tsx and listing it here.
  tabs: [{ label: "Home", href: "/" }],
  giscus: {
    repo: "JBin-bin/test-website",
    repoId: "R_kgDOU2sctg",
    category: "Announcements",
    categoryId: "DIC_kwDOU2scts4DGzJQ",
  },
};
