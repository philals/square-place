import { Grid as pGrid, Pixel } from "@prisma/client";
import { toHex } from "./colorToHex";

export type GridsOfPixels = Array<{ pixels: Pixel[] }>;

export function processGrid(grids: GridsOfPixels) {
  const dimention = 4; // Likely where the version will come in

  const it: string[][] = [];

  for (let index = 0; index <= grids.length / 4; index++) {
    const start = 4 * index;
    const fin = 4 * index + 4;
    const row = processTheseFour(grids.slice(start, fin));
    console.log("🚀🚀 ~ fin", fin);
    console.log("🚀🚀 ~ start", start);
    it.push(...row);
  }
  console.log("🚀🚀 ~ it", it);

  return it;
}

function processTheseFour(fourGrids: GridsOfPixels): Array<Array<string>> {
  const firstFour = getFirstFourFromEach(fourGrids, 1).flat();
  console.log("🚀🚀 ~ firstFour", firstFour);
  const secondFour = getSecondFourFromEach(fourGrids, 2).flat();
  const thirdFour = getThirdFromEach(fourGrids, 3).flat();
  const fourthFour = getFourthFFromEach(fourGrids, 4).flat();

  const toRetuen = [firstFour, secondFour, thirdFour, fourthFour];

  return toRetuen;
}

function getFirstFourFromEach(fourGrids: GridsOfPixels, row: number) {
  return fourGrids.slice(0, 4).map((grid) => {
    return grid.pixels.slice(0, 4).map((pixel) => toHex(pixel.color));
  });
}

function getSecondFourFromEach(fourGrids: GridsOfPixels, row: number) {
  return fourGrids.slice(0, 4).map((grid) => {
    return grid.pixels.slice(4, 8).map((pixel) => toHex(pixel.color));
  });
}

function getThirdFromEach(fourGrids: GridsOfPixels, row: number) {
  return fourGrids.slice(0, 4).map((grid) => {
    return grid.pixels.slice(8, 12).map((pixel) => toHex(pixel.color));
  });
}

function getFourthFFromEach(fourGrids: GridsOfPixels, row: number) {
  return fourGrids.slice(0, 4).map((grid) => {
    return grid.pixels.slice(12, 16).map((pixel) => toHex(pixel.color));
  });
}
