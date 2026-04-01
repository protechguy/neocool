"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-2xl border-b border-black/[0.04] shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-14">
        <Link href="/" className="relative z-10">
          <span
            className={`text-[15px] font-bold tracking-[0.2em] uppercase transition-colors duration-500 ${
              scrolled ? "text-text-primary" : "text-white"
            }`}
          >
            Neocool
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/stage-1"
            className={`text-[13px] font-medium transition-colors duration-300 ${
              scrolled
                ? "text-text-secondary hover:text-text-primary"
                : "text-white/70 hover:text-white"
            }`}
          >
            Stage 1
          </Link>
          <Link
            href="/stage-2"
            className={`text-[13px] font-medium transition-colors duration-300 ${
              scrolled
                ? "text-text-secondary hover:text-text-primary"
                : "text-white/70 hover:text-white"
            }`}
          >
            Stage 2
          </Link>
          <Link
            href="/order"
            className="bg-apple-blue hover:bg-apple-blue-hover text-white text-[13px] font-medium px-5 py-2 rounded-full transition-all duration-300 hover:shadow-glow-blue"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 transition-colors ${
            scrolled ? "text-text-primary" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-black/[0.04] px-6 py-5 flex flex-col gap-4">
          <Link
            href="/stage-1"
            className="text-[15px] text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Stage 1
          </Link>
          <Link
            href="/stage-2"
            className="text-[15px] text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Stage 2
          </Link>
          <Link
            href="/order"
            className="bg-apple-blue text-white text-[15px] font-medium px-5 py-2.5 rounded-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Order Now
          </Link>
        </div>
      )}
    </nav>
  );
}
