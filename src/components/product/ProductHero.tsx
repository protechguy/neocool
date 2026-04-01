import { Container } from "@/components/ui/Container";

export function ProductHero({ badge, title, tagline }: { badge: string; title: string; tagline: string }) {
  return (
    <section className="py-24 text-center">
      <Container>
        <span className="text-xs uppercase tracking-[3px] font-semibold text-apple-blue">{badge}</span>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold text-text-primary">{title}</h1>
        <p className="mt-4 text-xl text-text-secondary">{tagline}</p>
      </Container>
    </section>
  );
}
