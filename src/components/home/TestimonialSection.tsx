import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeUp } from "@/components/motion/FadeUp";

export function TestimonialSection() {
  return (
    <section className="py-16">
      <Container className="max-w-3xl">
        <FadeUp>
          <GlassCard className="p-10 text-center">
            <p className="text-lg text-text-secondary italic">
              &ldquo;Dropped 15&deg;C and my fans barely spin now. Game changer for video editing on my MacBook Neo.&rdquo;
            </p>
            <p className="mt-4 text-sm font-medium text-text-primary">&mdash; Early Tester</p>
          </GlassCard>
        </FadeUp>
      </Container>
    </section>
  );
}
