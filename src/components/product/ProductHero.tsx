"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function ProductHero({ badge, title, tagline, isStage2 = false }: { badge: string; title: string; tagline: string; isStage2?: boolean }) {
  return (
    <section className="relative bg-hero-gradient min-h-[60vh] flex items-center justify-center overflow-hidden -mt-14 pt-14 grid-pattern">
      {/* Ambient glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none ${
        isStage2
          ? "bg-[radial-gradient(circle,rgba(245,158,11,0.08)_0%,transparent_70%)]"
          : "bg-[radial-gradient(circle,rgba(56,189,248,0.08)_0%,transparent_70%)]"
      }`} />

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className={`badge ${isStage2 ? "badge-copper" : "badge-blue"}`}>{badge}</span>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold text-text-primary leading-[0.95] tracking-tight">{title}</h1>
          <p className="mt-5 text-xl text-text-secondary">{tagline}</p>
        </motion.div>
      </Container>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep to-transparent pointer-events-none" />
    </section>
  );
}
