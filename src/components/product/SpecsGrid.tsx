import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeUp } from "@/components/motion/FadeUp";
import { ProductSpec } from "@/types";

export function SpecsGrid({ specs }: { specs: ProductSpec[] }) {
  return (
    <section className="py-20 bg-ice-surface ice-texture">
      <Container className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Specifications</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {specs.map((spec, i) => (
            <FadeUp key={spec.label} delay={i * 0.1}>
              <GlassCard className="p-7 text-center">
                <p className="text-[11px] uppercase tracking-[2px] text-slate-400 font-semibold">{spec.label}</p>
                <p className="mt-3 text-xl font-bold text-slate-900">{spec.value}</p>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
