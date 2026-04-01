import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/motion/FadeUp";
import { ProductSpec } from "@/types";

export function SpecsGrid({ specs }: { specs: ProductSpec[] }) {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading title="Specifications" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {specs.map((spec, i) => (
            <FadeUp key={spec.label} delay={i * 0.1}>
              <GlassCard className="p-6 text-center">
                <p className="text-xs uppercase tracking-[2px] text-text-secondary font-medium">{spec.label}</p>
                <p className="mt-2 text-lg font-semibold text-text-primary">{spec.value}</p>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
