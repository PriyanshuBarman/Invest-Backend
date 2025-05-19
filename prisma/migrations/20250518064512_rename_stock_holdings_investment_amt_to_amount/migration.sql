/*
  Warnings:

  - You are about to drop the column `investmentAmt` on the `stockholding` table. All the data in the column will be lost.
  - Added the required column `amount` to the `StockHolding` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `stockholding` DROP COLUMN `investmentAmt`,
    ADD COLUMN `amount` DECIMAL(10, 2) NOT NULL;
