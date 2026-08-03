import type { Metadata } from "next";

export const siteUrl = "https://peoplefabrix.com";

const defaultOgImage = {
  url: "/screenshots/og-image.png",
  width: 1280,
  height: 720,
  alt: "People Fabrix answering an HR policy question with a citation to the company handbook",
};

/**
 * Per-page title/description already exist on every route — this fills in
 * the matching openGraph/twitter blocks so links shared on LinkedIn, Slack,
 * or email show a real title, description, and product screenshot instead
 * of nothing. Also sets the canonical URL for the route via `path`.
 *
 * `title`/`description` are optional: omit them (e.g. on the homepage) to
 * inherit title/openGraph/twitter straight from the root layout instead of
 * overwriting them — Next.js metadata merging replaces `openGraph` wholesale
 * per segment, so only pass them when the page has its own copy.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description?: string;
  path: string;
}): Metadata {
  const metadata: Metadata = {
    alternates: {
      canonical: path,
    },
  };

  if (title) metadata.title = title;
  if (description) metadata.description = description;

  if (title || description) {
    metadata.openGraph = {
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      images: [defaultOgImage],
    };
    metadata.twitter = {
      card: "summary_large_image",
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      images: [defaultOgImage.url],
    };
  }

  return metadata;
}
