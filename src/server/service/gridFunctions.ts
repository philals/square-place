import { prisma } from "../db/client";

export async function getAllGrids() {
  const res = await prisma.grid.findMany({ include: { pixels: true } });
  return { grids: res };
}
