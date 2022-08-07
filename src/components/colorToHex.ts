// --malachite: #04e762ff;
// --mango: #f5b700ff;
// --carolina-blue: #00a1e4ff;
// --red-purple: #dc0073ff;
// --chartreuse-web: #89fc00ff;

import { Color } from "@prisma/client";

export function toHex(color: Color) {
  switch (color) {
    case Color.Malachite:
      return "#04e762ff";
    case Color.Mango:
      return "#f5b700ff";
    case Color.CarolinaBlue:
      return "#00a1e4ff";
    case Color.RedPurple:
      return "#dc0073ff";
    case Color.ChartreuseWeb:
      return "#89fc00ff";

    default:
      throw new Error("");
  }
}
