import { Pixel } from "@prisma/client";

export type ArrayOfGrids = Array<ParttialGrid>;
export type Grid = { pixels: Pixel[] };
export interface ParttialGrid {
  pixels: Partial<Pixel>[];
}

export function processGrid(grids: ArrayOfGrids) {
  const it: string[][] = [];

  for (let index = 0; index < grids.length / 4; index++) {
    const start = 4 * index;
    const fin = 4 * index + 4;
    const row = processTheseFour(grids.slice(start, fin));
    it.push(...row);
  }

  return it;
}

function processTheseFour(fourGrids: ArrayOfGrids): Array<Array<string>> {
  const firstFour = getFirstFourFromEach(fourGrids, 1).flat();
  const secondFour = getSecondFourFromEach(fourGrids, 2).flat();
  const thirdFour = getThirdFromEach(fourGrids, 3).flat();
  const fourthFour = getFourthFFromEach(fourGrids, 4).flat();

  const toRetuen = [firstFour, secondFour, thirdFour, fourthFour];

  return toRetuen as Array<Array<string>>;
}

// TODO: Refactor all all
function getFirstFourFromEach(fourGrids: ArrayOfGrids, row: number) {
  return fourGrids.slice(0, 4).map((grid) => {
    return grid.pixels.slice(0, 4).map((pixel) => pixel.color);
  });
}

function getSecondFourFromEach(fourGrids: ArrayOfGrids, row: number) {
  return fourGrids.slice(0, 4).map((grid) => {
    return grid.pixels.slice(4, 8).map((pixel) => pixel.color);
  });
}

function getThirdFromEach(fourGrids: ArrayOfGrids, row: number) {
  return fourGrids.slice(0, 4).map((grid) => {
    return grid.pixels.slice(8, 12).map((pixel) => pixel.color);
  });
}

function getFourthFFromEach(fourGrids: ArrayOfGrids, row: number) {
  return fourGrids.slice(0, 4).map((grid) => {
    return grid.pixels.slice(12, 16).map((pixel) => pixel.color);
  });
}
