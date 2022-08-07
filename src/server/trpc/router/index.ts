// src/server/trpc/router/index.ts
import { t } from "../utils";
import { gridRouter } from "./gridRouter";
import { exampleRouter } from "./example";
import { authRouter } from "./auth";

export const appRouter = t.router({
  example: exampleRouter,
  grid: gridRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
