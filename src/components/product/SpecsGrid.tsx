import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/motion/FadeUp";
import { ProductSpec } from "@/types";

export function SpecsGrid({ specs }: { specs: ProductSpec[] }) {
  return (
    <section className="py-20 bg-section-gradient">
      <Container>
        <SectionHeading title="Specifications" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {specs.map((spec, i) => (
            <FadeUp key={spec.label} delay={i * 0.1}>
              <GlassCard className="p-7 text-center">
                <p className="text-[11px] uppercase tracking-[2px] text-text-secondary font-semibold">{spec.label}</p>
                <p className="mt-3 text-xl font-bold text-text-primary">{spec.value}</p>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
