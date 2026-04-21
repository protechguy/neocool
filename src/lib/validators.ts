import { z } from "zod";

export const orderSchema = z.object({
  stage: z.enum(["stage-1", "stage-2", "both"], { error: "Please select a mod." }),
  name: z.string().min(1, "Name is required.").max(100),
  email: z.email("Please enter a valid email.").max(254),
  model: z.string().min(1, "Please select your MacBook model."),
  message: z.string().max(1000),
});

export type OrderSchema = z.infer<typeof orderSchema>;
