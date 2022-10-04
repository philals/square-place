import PixelGrid from "react-pixel-grid";
import { ArrayOfGrids, processGrid } from "../processGrid";

export const GridRender = (props: { grids: ArrayOfGrids }) => {
  const it = processGrid(props.grids);
  console.log("🚀🚀 ~ it", it);

  return (
    <PixelGrid
      data={it as any}
      options={{
        size: 40,
        padding: 0,
        // formatted: true,
      }}
    />
  );
};
