import { z } from "zod";

export const modelSchema = z.object({
  model: z.string().min(1, "Model is required"),
  capacity: z.number().min(1, "Capacity must be greater than 0"),
  tilt: z.number().min(0, "Tilt must be a positive number"),
  isActive: z.boolean(),
});