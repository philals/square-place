import { t } from "../utils";
import { z } from "zod";
import { parttialGridSchema } from "../../../../test";

export const gridRouter = t.router({
  insertGrid: t.procedure
    .input(parttialGridSchema)
    .mutation(async ({ input, ctx }) => {
      try {
        await makeANewGrid(ctx.prisma, input);
      } catch (error) {
        console.log("🚀🚀 ~ error", error);
      }

      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
  makeMantGrids: t.procedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .mutation(async ({ input, ctx }) => {
      try {
        await makeNewGrid(ctx.prisma, "#1afe49");
        await makeNewGrid(ctx.prisma, "#083e12");
        await makeNewGrid(ctx.prisma, "#8386f5");
        await makeNewGrid(ctx.prisma, "#041348");
        await makeNewGrid(ctx.prisma, "#3d43b4");
        await makeNewGrid(ctx.prisma, "#1afe49");
        await makeNewGrid(ctx.prisma, "#083e12");
        await makeNewGrid(ctx.prisma, "#8386f5");
      } catch (error) {
        console.log("🚀🚀 ~ error", error);
      }

      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
  getAll: t.procedure.query(async ({ ctx }) => {
    const res = await ctx.prisma.grid.findMany({ include: { pixels: true } });
    return { grids: res };
  }),
  getOne: t.procedure.query(async ({ ctx }) => {
    const res = await ctx.prisma.grid.findFirst({
      include: { pixels: true },
    });
    return res;
  }),
  deleteAll: t.procedure.mutation(async ({ ctx }) => {
    await ctx.prisma.pixel.deleteMany({});
    await ctx.prisma.grid.deleteMany({});
    return {};
  }),
});

async function makeANewGrid(prisma: any, color: string) {
  const newGrid = await prisma.grid.create({ data: { version: 1 } });
  console.log("🚀🚀 ~ newGrid", newGrid);

  const pixels = await prisma.pixel.createMany({
    data: [
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
    ],
  });
  console.log("🚀🚀 ~ pixels", pixels);
}

async function makeNewGrid(prisma: any, color: string) {
  const newGrid = await prisma.grid.create({ data: { version: 1 } });
  console.log("🚀🚀 ~ newGrid", newGrid);

  const pixels = await prisma.pixel.createMany({
    data: [
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
      { color, version: 1, gridId: newGrid.id },
    ],
  });
  console.log("🚀🚀 ~ pixels", pixels);
}
