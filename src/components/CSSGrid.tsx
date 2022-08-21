import { ParttialGrid } from "./processGrid";
import React from "react";

export const CSSGrid = (props: { grid: ParttialGrid }) => {
  const rows = [
    props.grid.pixels.slice(0, 4),
    props.grid.pixels.slice(4, 8),
    props.grid.pixels.slice(8, 12),
    props.grid.pixels.slice(12, 16),
  ];

  return (
    <>
      {rows.map((r, i) => {
        return (
          <div key={i} className="flex flex-row">
            {r.map((cell, i) => (
              <div
                style={{ backgroundColor: cell.color }}
                className="w-8 h-8 flex flex-row"
                key={i}
              ></div>
            ))}
          </div>
        );
      })}
    </>
  );
};
