import { z } from "zod";

export const createPixelSchema = z.object({
  color: z.string(),
  version: z.number(),
});

export const createGridSchema = z.object({
  pixels: z.array(createPixelSchema).length(16),
});

export const parttialGridSchema = z.object({
  pixels: z.array(createPixelSchema.partial()),
});

export const arrayOfGridsSchema = z.array(parttialGridSchema);
