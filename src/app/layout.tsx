import type { Metadata, Viewport } from "next";
import "./globals.css";
import { seoKeywords } from "./seo-keywords";

export const viewport: Viewport = {
  themeColor: "#0d1117",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://guthab.com"), // CRITICAL FIX: Must point to OUR domain to rank
  title: {
    default: "Guthab · Premium Domain for Code Hosting",
    template: "%s · Guthab",
  },
  description: "This premium domain name guthab.com is available for sale. Perfect for developer tools, code hosting, or tech startups. Contact for acquisition.",
  applicationName: "Guthab Markets",
  authors: [{ name: "Guthab Seller", url: "https://t.me/edevz" }],
  generator: "Next.js",
  keywords: [
    // High volume dev keywords (Traffic magneto)
    ...seoKeywords,
    // Domain sale specific keywords (Buyer targets)
    "domain for sale", "premium domain", "buy guthab", "guthab.com", "tech domain name",
    "startup name", "brandable domain", "short domain", "catchy domain", "developer brand",
    "git domain", "hub domain", "software company name"
  ],
  referrer: "origin-when-cross-origin",
  creator: "Guthab Owner",
  publisher: "Guthab Owner",
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
    canonical: "https://guthab.com", // Self-referencing canonical
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    images: ["/icon.svg"],
    title: "Guthab - Premium Domain for Sale",
    description: "Start your next big dev tool with guthab.com.",
    url: "https://guthab.com",
    siteName: "Guthab",
    locale: "en_US",
    alternateLocale: ["ru_RU", "uz_UZ"],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Guthab · Premium Domain",
    description: "Perfect domain for your next coding project.",
    images: ["/icon.svg"],
    creator: "@guthab",
  },
  appleWebApp: {
    capable: true,
    title: "Guthab",
    statusBarStyle: "black-translucent",
  },
  verification: {
    google: "google-site-verification=placeholder", // User needs to replace this
    yandex: "yandex-verification=placeholder",
    other: {
      "bing-verify": "placeholder",
      "baidu-site-verification": "placeholder",
      "facebook-domain-verification": "placeholder"
    }
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://guthab.com/#website",
                  "url": "https://guthab.com",
                  "name": "Guthab",
                  "description": "Premium Code Hosting Domain Name",
                  "publisher": { "@id": "https://guthab.com/#organization" },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://guthab.com/?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "Organization",
                  "@id": "https://guthab.com/#organization",
                  "name": "Guthab Domains",
                  "url": "https://guthab.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://guthab.com/icon.svg",
                    "width": 512,
                    "height": 512
                  }
                },
                {
                  "@type": "Product",
                  "@id": "https://guthab.com/#product",
                  "name": "guthab.com Domain Name",
                  "description": "Premium domain name guthab.com available for immediate acquisition. Perfect for developer tools.",
                  "brand": { "@id": "https://guthab.com/#organization" },
                  "image": "https://guthab.com/icon.png",
                  "offers": {
                    "@type": "Offer",
                    "price": "Negotiable",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock",
                    "url": "https://guthab.com/buy",
                    "seller": { "@id": "https://guthab.com/#organization" }
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [{
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://guthab.com"
                  }, {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Buy Domain",
                    "item": "https://guthab.com/buy"
                  }]
                },
                {
                  "@type": "TechArticle",
                  "headline": "Guthab - The Premier Domain for Code Hosting Platforms",
                  "description": "Why guthab.com is the ultimate branding choice for next-generation git hosting and DevOps tools.",
                  "author": { "@type": "Person", "name": "Guthab Seller" },
                  "datePublished": "2025-01-01",
                  "dateModified": "2025-01-01",
                  "publisher": { "@id": "https://guthab.com/#organization" }
                },
                {
                  "@type": "Dataset",
                  "name": "Guthab.com Domain Data",
                  "description": "Technical specifications and availability data for the guthab.com domain name.",
                  "creator": { "@id": "https://guthab.com/#organization" },
                  "license": "https://guthab.com/buy"
                },
                {
                  "@type": "Service",
                  "name": "Premium High-Value Domain Acquisition",
                  "serviceType": "Domain Brokerage",
                  "category": "Business Services",
                  "description": "Professional secure transfer service for the guthab.com premium asset.",
                  "provider": { "@id": "https://guthab.com/#organization" },
                  "areaServed": "World",
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Domain Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": { "@id": "https://guthab.com/#product" }
                      }
                    ]
                  }
                },
                {
                  "@type": "BuyAction",
                  "target": "https://guthab.com/buy",
                  "agent": { "@type": "Person", "name": "Buyer" },
                  "object": { "@id": "https://guthab.com/#product" }
                }
              ]
            }),
          }}
        />
        {/* Domain Sale Specific Meta Tags */}
        <meta name="revisit-after" content="1 days" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="target" content="all" />
        <meta name="handheldfriendly" content="true" />
        <meta name="domain-status" content="for-sale" />
        <meta property="og:availability" content="for sale" />
        <meta property="business:contact_data:email" content="ergashevdev@gmail.com" />
      </body>
    </html>
  );
}
