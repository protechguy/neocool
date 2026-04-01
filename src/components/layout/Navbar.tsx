"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-xl border-b border-glass-border shadow-glass" : "bg-transparent"}`}>
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-lg font-bold text-text-primary tracking-wide">NEOCOOL</Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/stage-1" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Stage 1</Link>
          <Link href="/stage-2" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Stage 2</Link>
          <Button href="/order" className="text-sm px-6 py-2">Order Now</Button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 text-text-primary" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl border-b border-glass-border px-6 pb-4 flex flex-col gap-4">
          <Link href="/stage-1" className="text-sm text-text-secondary" onClick={() => setMenuOpen(false)}>Stage 1</Link>
          <Link href="/stage-2" className="text-sm text-text-secondary" onClick={() => setMenuOpen(false)}>Stage 2</Link>
          <Button href="/order" className="text-sm text-center">Order Now</Button>
        </div>
      )}
    </nav>
  );
}
