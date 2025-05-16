/*
  Warnings:

  - You are about to drop the column `purchaseAt` on the `transaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `transaction` DROP COLUMN `purchaseAt`,
    ADD COLUMN `price` DECIMAL(10, 4) NULL;
