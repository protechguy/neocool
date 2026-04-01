import { HeroSection } from "@/components/home/HeroSection";
import { StageCardsSection } from "@/components/home/StageCardsSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StageCardsSection />
      <TestimonialSection />
      <CtaSection />
    </>
  );
}
