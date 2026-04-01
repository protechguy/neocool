import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/motion/FadeUp";

export function CtaSection() {
  return (
    <section className="py-20">
      <Container className="text-center">
        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">Ready to cool down?</h2>
          <p className="mt-3 text-lg text-text-secondary">Order your Neocool thermal mod today.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/order">Order Now &rarr;</Button>
            <Button href="/stage-1" variant="secondary">Compare Stages</Button>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
