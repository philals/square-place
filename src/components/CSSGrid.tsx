import { ParttialGrid } from "./processGrid";
import React from "react";
import { Pixel } from "@prisma/client";

export const CSSGrid = (props: {
  rows: Array<Array<Partial<Pixel>>>;
  changePixel: (x: number, y: number) => void;
}) => {
  return (
    <>
      {props.rows.map((r, y) => {
        return (
          <div key={y} className="flex flex-row">
            {r.map((cell, x) => (
              <div
                style={{ backgroundColor: cell.color }}
                className="w-8 h-8 flex flex-row"
                key={x}
                onClick={() => props.changePixel(y, x)}
              ></div>
            ))}
          </div>
        );
      })}
    </>
  );
};
