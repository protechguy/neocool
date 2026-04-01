import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/motion/FadeUp";

export function ProductCta({ stage, title }: { stage: string; title: string }) {
  return (
    <section className="py-24 bg-dark-section relative overflow-hidden grid-pattern">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,113,227,0.08)_0%,transparent_70%)] pointer-events-none" />
      <Container className="relative z-10 text-center">
        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get the {title}</h2>
          <p className="mt-3 text-white/40">Experience the difference.</p>
          <div className="mt-8">
            <Button href={`/order?stage=${stage}`}>Order Now &rarr;</Button>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
