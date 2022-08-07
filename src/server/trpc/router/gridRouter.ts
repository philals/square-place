import { t } from "../utils";
import { z } from "zod";
import { Color } from "@prisma/client";
import { cp } from "fs";

const version = 1;

export const gridRouter = t.router({
  makeAGrid: t.procedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .mutation(async ({ input, ctx }) => {
      try {
        const newGrid = await ctx.prisma.grid.create({ data: { version: 1 } });
        console.log("🚀🚀 ~ newGrid", newGrid);

        const pixels = await ctx.prisma.pixel.createMany({
          data: [
            { color: Color.Blue, version: 1, gridId: newGrid.id },
            { color: Color.Green, version: 1, gridId: newGrid.id },
          ],
        });
        console.log("🚀🚀 ~ pixels", pixels);
      } catch (error) {
        console.log("🚀🚀 ~ error", error);
      }

      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
  getAll: t.procedure.query(({ ctx }) => {
    const res = ctx.prisma.grid.findMany({ include: { pixels: true } });
    console.log("🚀🚀 ~ res", res);
    return res;
  }),
  getOne: t.procedure.query(({ ctx }) => {
    const res = ctx.prisma.grid.findFirst({
      include: { pixels: true },
    });
    console.log("🚀🚀 ~ res", res);
    return res;
  }),
  deleteAll: t.procedure.mutation(async ({ ctx }) => {
    await ctx.prisma.pixel.deleteMany({});
    await ctx.prisma.grid.deleteMany({});
    return {};
  }),
});
