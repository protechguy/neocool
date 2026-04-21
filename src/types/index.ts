export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductData {
  slug: "stage-1" | "stage-2";
  badge: string;
  title: string;
  tagline: string;
  description: string;
  price: string;
  specs: ProductSpec[];
  steps: { title: string; description: string }[];
}
