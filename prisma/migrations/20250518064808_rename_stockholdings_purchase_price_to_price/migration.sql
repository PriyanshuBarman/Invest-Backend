/*
  Warnings:

  - You are about to drop the column `purchasePrice` on the `stockholding` table. All the data in the column will be lost.
  - Added the required column `price` to the `StockHolding` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `stockholding` DROP COLUMN `purchasePrice`,
    ADD COLUMN `price` DECIMAL(10, 2) NOT NULL;
