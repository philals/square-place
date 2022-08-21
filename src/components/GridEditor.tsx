import PixelGrid from "react-pixel-grid";
import { Grid, ParttialGrid, processGrid } from "./processGrid";
import React, { useState } from "react";
import { CirclePicker, ColorResult } from "react-color";
import { CSSGrid } from "./CSSGrid";

export const GridEditor = (props: { grid?: Grid }) => {
  const [grid, setGrid] = useState<ParttialGrid>(props?.grid || whiteGrid);
  console.log("🚀🚀 ~ grid", grid);
  const [color, setColor] = useState<string>();

  return (
    <>
      <CirclePicker
        color={color}
        onChange={(
          color: ColorResult,
          event: React.ChangeEvent<HTMLInputElement>
        ) => {
          setColor(color.hex);
        }}
      />

      <CSSGrid grid={grid} />
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
