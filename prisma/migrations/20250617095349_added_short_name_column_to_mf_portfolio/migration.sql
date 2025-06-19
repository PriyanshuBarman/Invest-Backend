/*
  Warnings:

  - Added the required column `shortName` to the `MfPortfolio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `mfportfolio` ADD COLUMN `shortName` VARCHAR(191) NOT NULL;
