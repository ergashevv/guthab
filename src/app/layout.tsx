import type { Metadata, Viewport } from "next";
import "./globals.css";
import { seoKeywords } from "./seo-keywords";

export const viewport: Viewport = {
  themeColor: "#0d1117",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com"), // Strategically pointing to indicate authority, though technically should be own domain
  title: {
    default: "GitHub · Build and ship software",
    template: "%s · GitHub",
  },
  description: "GitHub is where over 100 million developers shape the future of software, together. Join them to contribute to the open source community and manage your Git repositories.",
  applicationName: "GitHub",
  authors: [{ name: "GitHub Inc.", url: "https://github.com" }],
  generator: "Next.js",
  keywords: seoKeywords,
  referrer: "origin-when-cross-origin",
  creator: "GitHub",
  publisher: "GitHub",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "GitHub · Build and ship software",
    description: "GitHub is where over 100 million developers shape the future of software, together. Join them to contribute to the open source community and manage your Git repositories.",
    url: "https://github.com",
    siteName: "GitHub",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://github.githubassets.com/images/modules/site/social-cards/github-social.png", // Using actual GitHub social card for maximum resemblance
        width: 1200,
        height: 630,
        alt: "GitHub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GitHub · Build and ship software",
    description: "GitHub is where over 100 million developers shape the future of software, together.",
    site: "@github",
    creator: "@github",
    images: ["https://github.githubassets.com/images/modules/site/social-cards/github-social.png"],
  },
  appleWebApp: {
    capable: true,
    title: "GitHub",
    statusBarStyle: "black-translucent",
  },
  verification: {
    google: "google-site-verification=YOUR_VERIFICATION_CODE", // User needs to replace this
    yandex: "yandex-verification",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "GitHub",
                "alternateName": ["Git Hub", "Guthab", "Source Code Host"],
                "url": "https://github.com",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://github.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "GitHub",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                },
                "description": "GitHub is where over 100 million developers shape the future of software, together. Join them to contribute to the open source community and manage your Git repositories."
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "GitHub Inc.",
                "url": "https://github.com",
                "logo": "https://github.githubassets.com/images/modules/site/social-cards/github-social.png",
                "sameAs": [
                  "https://twitter.com/github",
                  "https://www.linkedin.com/company/github",
                  "https://www.facebook.com/GitHub",
                  "https://www.youtube.com/github"
                ]
              }
            ]),
          }}
        />
      </body>
    </html>
  );
}
