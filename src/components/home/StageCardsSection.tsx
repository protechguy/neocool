import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/motion/FadeUp";
import { PRODUCTS } from "@/lib/constants";

export function StageCardsSection() {
  const stages = [PRODUCTS["stage-1"], PRODUCTS["stage-2"]];

  return (
    <section className="py-20">
      <Container>
        <SectionHeading title="Two-Stage Cooling System" subtitle="Start with Stage 1, upgrade to Stage 2 for maximum performance." />
        <div className="grid md:grid-cols-2 gap-6">
          {stages.map((product, i) => (
            <FadeUp key={product.slug} delay={i * 0.15}>
              <GlassCard className="p-8 text-center">
                <span className="text-xs uppercase tracking-[2px] font-semibold text-apple-blue">{product.badge}</span>
                <h3 className="mt-2 text-2xl font-semibold text-text-primary">{product.title}</h3>
                <p className="mt-2 text-text-secondary">{product.description}</p>
                <div className="mt-4 text-3xl font-bold text-text-primary">{product.price}</div>
                <div className="mt-6">
                  <Button href={`/${product.slug}`} variant="primary">Learn More</Button>
                </div>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
