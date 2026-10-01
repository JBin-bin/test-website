import { execSync } from "node:child_process";

// Read at build time, so these reflect the commit and deploy that produced the page.
function formatTime(date: Date) {
  return (
    date.toLocaleString("en-US", {
      timeZone: "Asia/Manila",
      dateStyle: "medium",
      timeStyle: "short",
    }) + " PHT"
  );
}

function lastCommitTime() {
  try {
    return formatTime(new Date(execSync("git log -1 --format=%cI").toString().trim()));
  } catch {
    return "unknown";
  }
}

export const buildInfo = {
  lastCommit: lastCommitTime(),
  lastUpdated: formatTime(new Date()),
};
