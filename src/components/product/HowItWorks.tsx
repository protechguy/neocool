import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/motion/FadeUp";

export function HowItWorks({ steps }: { steps: { title: string; description: string }[] }) {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading title="How It Works" subtitle="Three simple steps." />
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <FadeUp key={step.title} delay={i * 0.15}>
              <div className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-apple-blue text-white flex items-center justify-center text-lg font-bold">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-text-primary">{step.title}</h3>
                <p className="mt-2 text-text-secondary">{step.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
