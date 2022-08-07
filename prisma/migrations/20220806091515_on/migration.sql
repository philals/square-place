/*
  Warnings:

  - You are about to drop the column `gridId` on the `Pixel` table. All the data in the column will be lost.
  - Added the required column `rowId` to the `Pixel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Pixel" DROP CONSTRAINT "Pixel_gridId_fkey";

-- AlterTable
ALTER TABLE "Pixel" DROP COLUMN "gridId",
ADD COLUMN     "rowId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Row" (
    "id" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "gridId" TEXT NOT NULL,

    CONSTRAINT "Row_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Row" ADD CONSTRAINT "Row_gridId_fkey" FOREIGN KEY ("gridId") REFERENCES "Grid"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pixel" ADD CONSTRAINT "Pixel_rowId_fkey" FOREIGN KEY ("rowId") REFERENCES "Row"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
