import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeUp } from "@/components/motion/FadeUp";

export function TestimonialSection() {
  return (
    <section className="py-20">
      <Container className="max-w-3xl">
        <FadeUp>
          <GlassCard className="p-10 text-center relative overflow-hidden">
            {/* Frost accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-[radial-gradient(ellipse,rgba(56,189,248,0.06)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-ice-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium text-text-primary leading-relaxed">
                &ldquo;Dropped 15&deg;C and my fans barely spin now. Game changer for video editing on my MacBook Neo.&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm text-text-secondary">
                &mdash; Early Tester
              </figcaption>
            </div>
          </GlassCard>
        </FadeUp>
      </Container>
    </section>
  );
}
