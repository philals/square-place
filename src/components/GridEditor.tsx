import PixelGrid from "react-pixel-grid";
import { Grid as pGrid, Pixel } from "@prisma/client";
import { Grid, processGrid } from "./processGrid";
import React, { useState } from "react";

export const GridEditor = (props: { grid?: Grid }) => {
  //   const [grid, setGrid] = useState<Grid>(
  //     props?.grid || {
  //       pixels: [
  //         "#FFFFFF",
  //         "#FFFFFF",
  //         "#FFFFFF",
  //         "#FFFFFF",
  //         "#FFFFFF",
  //         "#FFFFFF",
  //         "#FFFFFF",
  //         "#FFFFFF",
  //       ],
  //     }
  //   );

  return (
    <>
      <PixelGrid
        data={[]}
        options={{
          size: 40,
          padding: 0,
          // formatted: true,
        }}
      />
    </>
  );
};

const emptyGrid: Grid = {
  pixels: [],
};
