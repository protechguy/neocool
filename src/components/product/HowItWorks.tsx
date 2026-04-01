import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/motion/FadeUp";

export function HowItWorks({ steps }: { steps: { title: string; description: string }[] }) {
  return (
    <section className="py-20 bg-section-frost">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How It Works</h2>
          <p className="mt-3 text-lg text-slate-500">Three simple steps.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <FadeUp key={step.title} delay={i * 0.15}>
              <div className="text-center">
                <div className="mx-auto w-14 h-14 rounded-2xl bg-sky-500/10 text-sky-600 flex items-center justify-center text-lg font-bold border border-sky-500/20">
                  {i + 1}
                </div>
                <h3 className="mt-5 text-lg sm:text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-[15px] text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
