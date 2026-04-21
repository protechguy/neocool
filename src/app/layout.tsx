import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Neocool — Thermal Mods for MacBook Neo",
    template: "%s | Neocool",
  },
  description: "Precision thermal mods for MacBook Neo. Stage 1 thermal pad and Stage 2 copper heatsink for maximum cooling performance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <MotionProvider>
          <Navbar />
          <main id="main-content" className="pt-16 min-h-screen">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
