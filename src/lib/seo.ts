import { ProductData } from "@/types";
import { SITE } from "@/lib/constants";

export function productSchema(product: ProductData) {
  const url = `${SITE.url}/${product.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${SITE.name} ${product.badge} — ${product.title}`,
    description: product.description,
    brand: { "@type": "Brand", name: SITE.name },
    category: "Computer cooling accessory",
    url,
    offers: {
      "@type": "Offer",
      url,
      price: product.priceAmount.toFixed(2),
      priceCurrency: product.priceCurrency,
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: SITE.name },
    },
  };
}
