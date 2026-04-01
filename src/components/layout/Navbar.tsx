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
          ? "bg-deep/80 backdrop-blur-2xl border-b border-glass-border shadow-[0_1px_12px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-14">
        <Link href="/" className="relative z-10">
          <span className="text-[15px] font-bold tracking-[0.2em] uppercase text-text-primary">
            Neocool
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/stage-1" className="text-[13px] font-medium text-text-secondary hover:text-ice-blue transition-colors duration-300">
            Stage 1
          </Link>
          <Link href="/stage-2" className="text-[13px] font-medium text-text-secondary hover:text-ice-blue transition-colors duration-300">
            Stage 2
          </Link>
          <Link
            href="/order"
            className="bg-ice-blue hover:bg-ice-blue-hover text-deep text-[13px] font-semibold px-5 py-2 rounded-full transition-all duration-300 hover:shadow-glow-ice"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-deep/95 backdrop-blur-2xl border-b border-glass-border px-6 py-5 flex flex-col gap-4">
          <Link href="/stage-1" className="text-[15px] text-text-secondary hover:text-ice-blue transition-colors" onClick={() => setMenuOpen(false)}>
            Stage 1
          </Link>
          <Link href="/stage-2" className="text-[15px] text-text-secondary hover:text-ice-blue transition-colors" onClick={() => setMenuOpen(false)}>
            Stage 2
          </Link>
          <Link href="/order" className="bg-ice-blue text-deep text-[15px] font-semibold px-5 py-2.5 rounded-full text-center" onClick={() => setMenuOpen(false)}>
            Order Now
          </Link>
        </div>
      )}
    </nav>
  );
}
