/*
  Warnings:

  - Added the required column `version` to the `Pixel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Grid" DROP CONSTRAINT "Grid_userId_fkey";

-- AlterTable
ALTER TABLE "Grid" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Pixel" ADD COLUMN     "version" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Grid" ADD CONSTRAINT "Grid_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
