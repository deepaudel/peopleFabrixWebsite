import type { Metadata } from "next";

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
 * of nothing.
 */
export function pageMetadata({
  title,
  description,
}: {
  title: string;
  description: string;
}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage.url],
    },
  };
}
