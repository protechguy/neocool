import { Metadata } from "next";
import { PRODUCTS } from "@/lib/constants";
import { productSchema } from "@/lib/seo";
import { ProductHero } from "@/components/product/ProductHero";
import { SpecsGrid } from "@/components/product/SpecsGrid";
import { HowItWorks } from "@/components/product/HowItWorks";
import { ProductCta } from "@/components/product/ProductCta";
import { JsonLd } from "@/components/seo/JsonLd";

const product = PRODUCTS["stage-1"];

export const metadata: Metadata = {
  title: "Stage 1 — Thermal Pad",
  description: product.description,
  alternates: { canonical: "/stage-1" },
};

export default function Stage1Page() {
  return (
    <>
      <JsonLd data={productSchema(product)} />
      <ProductHero badge={product.badge} title={product.title} tagline={product.tagline} />
      <SpecsGrid specs={product.specs} />
      <HowItWorks steps={product.steps} />
      <ProductCta stage="stage-1" title={product.title} />
    </>
  );
}
