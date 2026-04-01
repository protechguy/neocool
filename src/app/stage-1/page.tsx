import { Metadata } from "next";
import { PRODUCTS } from "@/lib/constants";
import { ProductHero } from "@/components/product/ProductHero";
import { SpecsGrid } from "@/components/product/SpecsGrid";
import { HowItWorks } from "@/components/product/HowItWorks";
import { ProductCta } from "@/components/product/ProductCta";

const product = PRODUCTS["stage-1"];

export const metadata: Metadata = {
  title: "Stage 1 — Thermal Pad",
  description: product.description,
};

export default function Stage1Page() {
  return (
    <>
      <ProductHero badge={product.badge} title={product.title} tagline={product.tagline} />
      <SpecsGrid specs={product.specs} />
      <HowItWorks steps={product.steps} />
      <ProductCta stage="stage-1" title={product.title} />
    </>
  );
}
