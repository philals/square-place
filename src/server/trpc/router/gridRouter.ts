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
        console.error("🚀🚀 ~ error", error);
        throw error;
      }

      return {
        greeting: `Hello ${input ?? "world"}`,
      };
    }),
  makeManyGrids: t.procedure
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
        console.error("🚀🚀 ~ error", error);
        throw error;
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
  deleteGrid: t.procedure
    .input(
      z.object({
        gridIds: z.array(z.string()).min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      for (const gridId of input.gridIds) {
        await ctx.prisma.pixel.deleteMany({ where: { gridId: gridId } });
        await ctx.prisma.grid.delete({ where: { id: gridId } });
      }
      return {};
    }),
});

async function makeANewGrid(
  prisma: any,
  color: {
    pixels: {
      // id?: string | undefined;
      color?: string | undefined;
      version?: number | undefined;
      // gridId?: string | undefined;
    }[];
  }
) {
  const newGrid = await prisma.grid.create({ data: { version: 1 } });

  const pixels = color.pixels.map((pixel) => {
    return { color: pixel.color, version: pixel.version, gridId: newGrid.id };
  });

  await prisma.pixel.createMany({
    data: pixels,
  });
}

async function makeNewGrid(prisma: any, color: string) {
  const newGrid = await prisma.grid.create({ data: { version: 1 } });

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
}
