/*
  Warnings:

  - Changed the type of `coverage` on the `Metrics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Metrics" DROP COLUMN "coverage";
ALTER TABLE "Metrics" ADD COLUMN     "coverage" FLOAT8 NOT NULL;
