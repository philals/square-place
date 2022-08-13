import PixelGrid from "react-pixel-grid";
import { Grid as pGrid, Pixel } from "@prisma/client";
import { processGrid } from "./processGrid";

export const GridRender = (props: {
  grids: (pGrid & { pixels: Pixel[] })[];
}) => {
  const it = processGrid(props.grids);

  return (
    <>
      <PixelGrid
        data={it as any}
        options={{
          size: 40,
          padding: 1,
          // formatted: true,
        }}
      />
    </>
  );
};
