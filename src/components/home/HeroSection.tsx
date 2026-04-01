"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CountUp } from "@/components/motion/CountUp";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden -mt-14 pt-14">
      {/* Real iceberg background photo */}
      <Image
        src="/images/iceberg-bg.jpg"
        alt="Iceberg background"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 pointer-events-none" />

      {/* Subtle blue tint overlay */}
      <div className="absolute inset-0 bg-sky-950/30 mix-blend-multiply pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="badge badge-blue mx-auto mb-8">Precision Thermal Engineering</div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
            Keep Your<br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-300 bg-clip-text text-transparent">
              MacBook Neo
            </span>
            <br />Ice Cold.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-xl mx-auto leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
            Two-stage thermal modification system. Precision-cut thermal pads and custom copper heatsinks engineered for peak performance.
          </p>
        </motion.div>

        {/* Temperature comparison */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16"
        >
          {/* Before */}
          <div className="flex flex-col items-center">
            <span className="text-[11px] uppercase tracking-[3px] font-semibold text-white/40 mb-2">Without Neocool</span>
            <div className="text-5xl md:text-6xl font-bold text-red-400 pulse-warm rounded-2xl px-6 py-3">
              <CountUp to={95} duration={2} suffix="°C" />
            </div>
            <span className="mt-2 text-[13px] text-red-300/50">Thermal throttling</span>
          </div>

          {/* Arrow */}
          <div className="text-white/30 text-2xl rotate-90 sm:rotate-0">→</div>

          {/* After */}
          <div className="flex flex-col items-center">
            <span className="text-[11px] uppercase tracking-[3px] font-semibold text-white/40 mb-2">With Neocool</span>
            <div className="text-5xl md:text-6xl font-bold text-ice-blue pulse-cool rounded-2xl px-6 py-3">
              <CountUp to={72} duration={2} suffix="°C" />
            </div>
            <span className="mt-2 text-[13px] text-sky-300/50">Full performance</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-14 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="/order" className="text-[15px] px-8 py-3.5">Order Now</Button>
          <Button href="/stage-1" variant="secondary" className="text-[15px] px-8 py-3.5 !bg-white/10 !border-white/20 !text-white/90 hover:!bg-white/20">
            Explore Mods
          </Button>
        </motion.div>
      </div>

      {/* Bottom fade to icy surface */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#d4eef6] to-transparent pointer-events-none" />
    </section>
  );
}
