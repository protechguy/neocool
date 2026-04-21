import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Thermal Mods for MacBook Neo`,
    template: `%s | ${SITE.name}`,
  },
  description: "Precision thermal mods for MacBook Neo. Stage 1 thermal pad and Stage 2 copper heatsink for maximum cooling performance.",
  applicationName: SITE.name,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    title: `${SITE.name} — Thermal Mods for MacBook Neo`,
    description: "Precision thermal mods for MacBook Neo. Stage 1 thermal pad and Stage 2 copper heatsink for maximum cooling performance.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Thermal Mods for MacBook Neo`,
    description: "Precision thermal mods for MacBook Neo. Stage 1 thermal pad and Stage 2 copper heatsink for maximum cooling performance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: SITE.privacyEmail,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <Navbar />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
