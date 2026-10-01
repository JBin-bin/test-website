import { buildInfo } from "@/lib/build-info";
import { site } from "@/lib/site";

const link = "text-blue-700 underline dark:text-blue-400";

export function Footer() {
  return (
    <footer className="mt-auto border-t p-2 text-sm">
      <p>
        Repo:{" "}
        <a className={link} href={site.repoUrl}>
          {site.repoUrl}
        </a>
      </p>
      <p>
        Last commit: {buildInfo.lastCommit} | Last updated: {buildInfo.lastUpdated}
      </p>
      <p>
        Contact: {site.contact.name},{" "}
        <a className={link} href={`mailto:${site.contact.email}`}>
          {site.contact.email}
        </a>
      </p>
      <p>
        Co-authors:{" "}
        {site.coAuthors.map((author, i) => (
          <span key={author.name}>
            {i > 0 && ", "}
            {author.name}
            {author.email && (
              <>
                {" ("}
                <a className={link} href={`mailto:${author.email}`}>
                  {author.email}
                </a>
                {")"}
              </>
            )}
          </span>
        ))}
      </p>
    </footer>
  );
}
