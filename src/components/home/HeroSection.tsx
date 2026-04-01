"use client";

import { SlideIn } from "@/components/motion/SlideIn";
import { CountUp } from "@/components/motion/CountUp";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex flex-col">
      <div className="flex flex-col md:flex-row flex-1">
        {/* Before */}
        <SlideIn direction="left" className="flex-1 bg-gradient-to-br from-before-bg to-red-200 flex flex-col items-center justify-center py-20 px-8 text-center">
          <span className="text-xs uppercase tracking-[3px] font-semibold text-before-red mb-2">Before</span>
          <div className="text-6xl md:text-7xl font-bold text-red-900">
            <CountUp to={95} duration={1.5} suffix="°C" />
          </div>
          <p className="mt-3 text-base text-red-700">Thermal throttling.<br />Fans screaming.</p>
          <div className="mt-5 w-32 h-1.5 bg-red-200 rounded-full overflow-hidden">
            <div className="w-[95%] h-full bg-before-red rounded-full" />
          </div>
        </SlideIn>

        {/* After */}
        <SlideIn direction="right" className="flex-1 bg-gradient-to-br from-after-bg to-blue-200 flex flex-col items-center justify-center py-20 px-8 text-center">
          <span className="text-xs uppercase tracking-[3px] font-semibold text-after-blue mb-2">After Neocool</span>
          <div className="text-6xl md:text-7xl font-bold text-blue-900">
            <CountUp to={72} duration={1.5} suffix="°C" />
          </div>
          <p className="mt-3 text-base text-blue-700">Full performance.<br />Whisper quiet.</p>
          <div className="mt-5 w-32 h-1.5 bg-blue-200 rounded-full overflow-hidden">
            <div className="w-[72%] h-full bg-after-blue rounded-full" />
          </div>
        </SlideIn>
      </div>

      {/* Headline overlay */}
      <div className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
          Precision Thermal Mods<br />for MacBook Neo
        </h1>
        <p className="mt-4 text-lg text-text-secondary">Two stages. One cooler MacBook.</p>
        <div className="mt-8">
          <Button href="/order">Order Now</Button>
        </div>
      </div>
    </section>
  );
}
