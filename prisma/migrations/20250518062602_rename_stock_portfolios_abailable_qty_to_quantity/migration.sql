/*
  Warnings:

  - You are about to drop the column `availableQty` on the `stockportfolio` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `StockPortfolio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `stockportfolio` DROP COLUMN `availableQty`,
    ADD COLUMN `quantity` INTEGER NOT NULL;
