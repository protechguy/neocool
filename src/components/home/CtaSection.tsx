import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/motion/FadeUp";

export function CtaSection() {
  return (
    <section className="py-24 bg-dark-section relative overflow-hidden grid-pattern">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,113,227,0.08)_0%,transparent_70%)] pointer-events-none" />

      <Container className="relative z-10 text-center">
        <FadeUp>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Ready to unlock<br />full performance?
          </h2>
          <p className="mt-4 text-lg text-white/40 max-w-md mx-auto">
            Order your Neocool thermal mod and feel the difference.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/order" className="text-[15px] px-8 py-3.5">
              Order Now &rarr;
            </Button>
            <Button
              href="/stage-1"
              variant="secondary"
              className="text-[15px] px-8 py-3.5 !bg-white/5 !border-white/10 !text-white/70 hover:!bg-white/10 hover:!text-white"
            >
              Compare Stages
            </Button>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
