//  LightPurple: '#8386f5',
//   Purple: '#3d43b4',
//   NaveyPurple: '#041348',
//   DarkGreen: '#083e12',
//   CyberGreen: '#1afe49'

import { Color } from "@prisma/client";

export function toHex(color: Color) {
  switch (color) {
    case Color.LightPurple:
      return "#8386f5";
    case Color.Purple:
      return "#3d43b4";
    case Color.NaveyPurple:
      return "#041348";
    case Color.DarkGreen:
      return "#083e12";
    case Color.CyberGreen:
      return "#1afe49";

    default:
      throw new Error("Color did not match: " + color);
  }
}
