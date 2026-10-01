import { execSync } from "node:child_process";

const repoUrl = "https://github.com/JBin-bin/test-website";

// Read at build time, so these reflect the commit and deploy that produced this page
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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="p-2">
        <h1 className="text-xl font-bold">JBin</h1>
        <p>I&apos;m JBin, I&apos;m an IT freshman. I&apos;m 21, that is all - goodbye.</p>
      </main>

      <div className="overflow-hidden whitespace-nowrap border-y">
        <span className="inline-block animate-marquee motion-reduce:animate-none">
          Peach mango pie is the best dessert ever.
        </span>
      </div>

      <footer className="mt-auto border-t p-2 text-sm">
        <p>
          Repo:{" "}
          <a className="text-blue-700 underline" href={repoUrl}>
            {repoUrl}
          </a>
        </p>
        <p>
          Last commit: {lastCommitTime()} | Last updated: {formatTime(new Date())}
        </p>
        <p>
          Contact: JBin,{" "}
          <a className="text-blue-700 underline" href="mailto:jb.calo@csucc.edu.ph">
            jb.calo@csucc.edu.ph
          </a>
        </p>
        <p>
          Co-authors: Claude, Lawrence (
          <a className="text-blue-700 underline" href="mailto:somewherefishsleep@gmail.com">
            somewherefishsleep@gmail.com
          </a>
          )
        </p>
      </footer>
    </div>
  );
}
