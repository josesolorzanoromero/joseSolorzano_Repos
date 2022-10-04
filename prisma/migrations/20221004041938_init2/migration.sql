/*
  Warnings:

  - Added the required column `coverage` to the `Metrics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Metrics" ADD COLUMN     "coverage" INT4 NOT NULL;
