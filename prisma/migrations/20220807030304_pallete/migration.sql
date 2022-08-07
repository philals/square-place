/*
  Warnings:

  - The values [Red,Green,Blue] on the enum `Color` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Color_new" AS ENUM ('Malachite', 'Mango', 'CarolinaBlue', 'RedPurple', 'ChartreuseWeb');
ALTER TABLE "Pixel" ALTER COLUMN "color" TYPE "Color_new" USING ("color"::text::"Color_new");
ALTER TYPE "Color" RENAME TO "Color_old";
ALTER TYPE "Color_new" RENAME TO "Color";
DROP TYPE "Color_old";
COMMIT;
