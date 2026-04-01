import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/motion/FadeUp";

export function ProductCta({ stage, title }: { stage: string; title: string }) {
  return (
    <section className="py-20">
      <Container className="text-center">
        <FadeUp>
          <h2 className="text-3xl font-bold text-text-primary">Get the {title}</h2>
          <div className="mt-6">
            <Button href={`/order?stage=${stage}`}>Order Now &rarr;</Button>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
