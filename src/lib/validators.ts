import { z } from "zod";

export const orderSchema = z.object({
  stage: z.enum(["stage-1", "stage-2", "both"], { required_error: "Please select a mod." }),
  name: z.string().min(1, "Name is required.").max(100),
  email: z.string().email("Please enter a valid email."),
  model: z.string().min(1, "Please select your MacBook model."),
  message: z.string().max(1000).optional().default(""),
});

export type OrderSchema = z.infer<typeof orderSchema>;
