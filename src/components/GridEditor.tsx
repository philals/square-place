import PixelGrid from "react-pixel-grid";
import { Grid, ParttialGrid, processGrid } from "./processGrid";
import React, { useState } from "react";
import { CirclePicker, ColorResult } from "react-color";
import { CSSGrid } from "./CSSGrid";
import { trpc } from "../utils/trpc";

export const GridEditor = (props: {}) => {
  const [grid, setGrid] = useState<ParttialGrid>(whiteGrid);
  const [color, setColor] = useState<string>();
  const insertGrid = trpc.proxy.grid.insertGrid.useMutation();
  console.log("🚀🚀 ~ color", color);

  const rows = [
    grid.pixels.slice(0, 4),
    grid.pixels.slice(4, 8),
    grid.pixels.slice(8, 12),
    grid.pixels.slice(12, 16),
  ];

  function changePixel(x: number, y: number) {
    rows[x]![y]! = {
      color,
      version: 1,
    };
    setGrid({
      pixels: [...rows[0]!, ...rows[1]!, ...rows[2]!, ...rows[3]!],
    });
  }

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
      <button onClick={() => insertGrid.mutate(grid)}>Submit</button>

      <CSSGrid rows={rows} changePixel={changePixel} />
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
