/*
  Warnings:

  - The values [Equity,Debt,Hybrid,Other] on the enum `MfPortfolio_fundType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `mfportfolio` MODIFY `fundType` ENUM('EQUITY', 'DEBT', 'HYBRID', 'OTHER') NOT NULL;
