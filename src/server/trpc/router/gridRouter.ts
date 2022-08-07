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
            { color: Color.CarolinaBlue, version: 1, gridId: newGrid.id },
            { color: Color.ChartreuseWeb, version: 1, gridId: newGrid.id },
            { color: Color.Malachite, version: 1, gridId: newGrid.id },
            { color: Color.Mango, version: 1, gridId: newGrid.id },
            { color: Color.Mango, version: 1, gridId: newGrid.id },
            { color: Color.RedPurple, version: 1, gridId: newGrid.id },
            { color: Color.RedPurple, version: 1, gridId: newGrid.id },
            { color: Color.Malachite, version: 1, gridId: newGrid.id },
            { color: Color.ChartreuseWeb, version: 1, gridId: newGrid.id },
            { color: Color.RedPurple, version: 1, gridId: newGrid.id },
            { color: Color.ChartreuseWeb, version: 1, gridId: newGrid.id },
            { color: Color.CarolinaBlue, version: 1, gridId: newGrid.id },
            { color: Color.RedPurple, version: 1, gridId: newGrid.id },
            { color: Color.ChartreuseWeb, version: 1, gridId: newGrid.id },
            { color: Color.Malachite, version: 1, gridId: newGrid.id },
            { color: Color.RedPurple, version: 1, gridId: newGrid.id },
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
