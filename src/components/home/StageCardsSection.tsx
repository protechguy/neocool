import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/motion/FadeUp";
import { PRODUCTS } from "@/lib/constants";

export function StageCardsSection() {
  const stages = [PRODUCTS["stage-1"], PRODUCTS["stage-2"]];

  return (
    <section className="py-24 bg-section-frost ice-texture">
      <Container className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Two-Stage Cooling System</h2>
          <p className="mt-3 text-lg text-slate-500">Start with Stage 1 for immediate improvement. Add Stage 2 for maximum thermal performance.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {stages.map((product, i) => (
            <FadeUp key={product.slug} delay={i * 0.15}>
              <GlassCard className="p-10 text-center relative overflow-hidden group hover:shadow-elevated transition-all duration-500">
                {/* Frost glow on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  i === 0
                    ? "bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.1),transparent_60%)]"
                    : "bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.08),transparent_60%)]"
                }`} />

                <div className="relative z-10">
                  <span className={`badge ${i === 0 ? "badge-blue" : "badge-copper"}`}>
                    {product.badge}
                  </span>
                  <h3 className="mt-5 text-xl sm:text-2xl font-semibold text-slate-900">{product.title}</h3>
                  <p className="mt-3 text-[15px] text-slate-500 leading-relaxed max-w-sm mx-auto">
                    {product.description}
                  </p>
                  <div className="mt-6 text-2xl sm:text-3xl font-bold text-slate-900">{product.price}</div>
                  <div className="mt-8">
                    <Button href={`/${product.slug}`} variant="primary">
                      Learn More
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
