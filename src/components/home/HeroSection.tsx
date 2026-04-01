"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CountUp } from "@/components/motion/CountUp";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative bg-hero-gradient min-h-screen flex flex-col items-center justify-center overflow-hidden caustics -mt-14 pt-14">
      {/* Iceberg background — centered behind content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/images/iceberg.svg"
          alt=""
          fill
          className="object-cover opacity-100"
          priority
        />
      </div>

      {/* Underwater light shafts */}
      <div className="absolute top-0 left-1/3 w-[200px] h-[70%] bg-gradient-to-b from-transparent via-sky-400/[0.03] to-transparent rotate-[15deg] pointer-events-none" />
      <div className="absolute top-0 right-1/3 w-[150px] h-[60%] bg-gradient-to-b from-transparent via-cyan-300/[0.04] to-transparent rotate-[-10deg] pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="badge badge-blue mx-auto mb-8">Precision Thermal Engineering</div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
            Keep Your<br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-blue-300 bg-clip-text text-transparent">
              MacBook Neo
            </span>
            <br />Ice Cold.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-sky-100/60 max-w-xl mx-auto leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.3)]">
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
            <span className="text-[11px] uppercase tracking-[3px] font-semibold text-sky-200/40 mb-2">Without Neocool</span>
            <div className="text-5xl md:text-6xl font-bold text-red-400 pulse-warm rounded-2xl px-6 py-3">
              <CountUp to={95} duration={2} suffix="°C" />
            </div>
            <span className="mt-2 text-[13px] text-red-400/50">Thermal throttling</span>
          </div>

          {/* Arrow */}
          <div className="text-sky-400/30 text-2xl rotate-90 sm:rotate-0">→</div>

          {/* After */}
          <div className="flex flex-col items-center">
            <span className="text-[11px] uppercase tracking-[3px] font-semibold text-sky-200/40 mb-2">With Neocool</span>
            <div className="text-5xl md:text-6xl font-bold text-ice-blue pulse-cool rounded-2xl px-6 py-3">
              <CountUp to={72} duration={2} suffix="°C" />
            </div>
            <span className="mt-2 text-[13px] text-sky-400/50">Full performance</span>
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
          <Button href="/stage-1" variant="secondary" className="text-[15px] px-8 py-3.5">
            Explore Mods
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
