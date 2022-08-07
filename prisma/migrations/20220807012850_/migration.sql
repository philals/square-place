/*
  Warnings:

  - You are about to drop the column `rowId` on the `Pixel` table. All the data in the column will be lost.
  - You are about to drop the `Row` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `gridId` to the `Pixel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Pixel" DROP CONSTRAINT "Pixel_rowId_fkey";

-- DropForeignKey
ALTER TABLE "Row" DROP CONSTRAINT "Row_gridId_fkey";

-- AlterTable
ALTER TABLE "Pixel" DROP COLUMN "rowId",
ADD COLUMN     "gridId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Row";

-- AddForeignKey
ALTER TABLE "Pixel" ADD CONSTRAINT "Pixel_gridId_fkey" FOREIGN KEY ("gridId") REFERENCES "Grid"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
