import PixelGrid from "react-pixel-grid";
import { Grid as pGrid, Pixel } from "@prisma/client";
import { Grid, ParttialGrid, processGrid } from "./processGrid";
import React, { useState } from "react";

export const GridEditor = (props: { grid?: Grid }) => {
  const [grid, setGrid] = useState<ParttialGrid>(props?.grid || whiteGrid);

  return (
    <>
      <PixelGrid
        data={processGrid([grid])}
        options={{
          size: 40,
          padding: 0,
          // formatted: true,
        }}
      />
    </>
  );
};

const greyPixel = {
  color: "#808080",
  version: 1,
};

const whiteGrid: ParttialGrid = {
  pixels: [
    greyPixel,
    greyPixel,
    greyPixel,
    greyPixel,
    greyPixel,
    greyPixel,
    greyPixel,
    greyPixel,
    greyPixel,
    greyPixel,
    greyPixel,
    greyPixel,
    greyPixel,
    greyPixel,
    greyPixel,
    greyPixel,
  ],
};
