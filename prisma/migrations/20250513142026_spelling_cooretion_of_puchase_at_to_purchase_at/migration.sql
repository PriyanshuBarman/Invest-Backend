/*
  Warnings:

  - You are about to drop the column `puchaseAt` on the `transaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `transaction` DROP COLUMN `puchaseAt`,
    ADD COLUMN `purchaseAt` DECIMAL(10, 4) NULL;
