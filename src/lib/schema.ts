import { z } from "zod";

export const modelSchema = z.object({
  id: z.string().optional(),
  model: z.string().optional(),
  capacity: z.number().optional(),
  tilt: z.number().min(0, "Tilt must be a positive number"),
  isActive: z.boolean(),
});