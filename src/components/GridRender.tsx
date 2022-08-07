import PixelGrid from "react-pixel-grid";
import { Grid, Pixel } from "@prisma/client";
import { toHex } from "./colorToHex";

export const GridRender = (props: {
  grids: (Grid & { pixels: Pixel[] })[];
}) => {
  const dimention = 4; // Likely where the version will come in

  const all = props.grids.map((grid) => {
    const pixes = [];
    for (let row = 0; row < dimention; row++) {
      pixes.push(
        grid.pixels
          .slice(dimention * row, row * dimention + dimention)
          .map((pixel) => toHex(pixel.color))
      );
    }
  });
  console.log("🚀🚀 ~ all", all);

  const cheat = props.grids.map((grid) => {
    return grid.pixels.map((pixel) => {
      return toHex(pixel.color);
    });
  });
  console.log("🚀🚀 ~ cheat", cheat);

  return (
    <PixelGrid
      data={cheat}
      options={{
        size: 40,
        padding: 0,
      }}
    />
  );
};
