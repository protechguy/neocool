import { ProductData } from "@/types";

export const SITE = {
  name: "Neocool",
  domain: "neocool.com",
  description: "Precision thermal mods for MacBook Neo.",
};

export const MACBOOK_MODELS = [
  "MacBook Neo 14\" (2025)",
  "MacBook Neo 16\" (2025)",
  "MacBook Neo 14\" (2026)",
  "MacBook Neo 16\" (2026)",
];

export const PRODUCTS: Record<string, ProductData> = {
  "stage-1": {
    slug: "stage-1",
    badge: "Stage 1",
    title: "Thermal Pad",
    tagline: "The Foundation of Cool",
    description: "Precision-cut thermal pad engineered for optimal heat transfer from the MacBook Neo's processor to the chassis.",
    price: "$XX",
    specs: [
      { label: "Material", value: "High-conductivity thermal pad" },
      { label: "Thermal Rating", value: "12 W/mK" },
      { label: "Compatibility", value: "MacBook Neo 14\" & 16\"" },
      { label: "Temp Reduction", value: "Up to 10°C" },
    ],
    steps: [
      { title: "Peel", description: "Remove the precision-cut thermal pad from its backing." },
      { title: "Place", description: "Align and place on the designated contact area." },
      { title: "Press", description: "Apply even pressure and close the chassis." },
    ],
  },
  "stage-2": {
    slug: "stage-2",
    badge: "Stage 2",
    title: "Copper Heatsink",
    tagline: "Maximum Thermal Performance",
    description: "Custom-machined copper heatsink that dramatically increases thermal dissipation for sustained peak performance.",
    price: "$XX",
    specs: [
      { label: "Material", value: "C110 pure copper" },
      { label: "Thermal Rating", value: "385 W/mK" },
      { label: "Compatibility", value: "MacBook Neo 14\" & 16\"" },
      { label: "Temp Reduction", value: "Up to 23°C" },
    ],
    steps: [
      { title: "Prep", description: "Clean the surface and apply thermal compound." },
      { title: "Attach", description: "Position the copper heatsink on the contact area." },
      { title: "Seal", description: "Secure in place and reassemble the chassis." },
    ],
  },
};
