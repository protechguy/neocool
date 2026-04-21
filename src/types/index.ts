export type StageOption = "stage-1" | "stage-2" | "both";

export interface OrderFormData {
  stage: StageOption;
  name: string;
  email: string;
  model: string;
  message: string;
}

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
  priceAmount: number;
  priceCurrency: string;
  specs: ProductSpec[];
  steps: { title: string; description: string }[];
}
