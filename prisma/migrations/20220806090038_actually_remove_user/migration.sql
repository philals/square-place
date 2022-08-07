/*
  Warnings:

  - You are about to drop the column `userId` on the `Grid` table. All the data in the column will be lost.
  - Added the required column `version` to the `Grid` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Grid" DROP CONSTRAINT "Grid_userId_fkey";

-- AlterTable
ALTER TABLE "Grid" DROP COLUMN "userId",
ADD COLUMN     "version" INTEGER NOT NULL;
