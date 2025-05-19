/*
  Warnings:

  - A unique constraint covering the columns `[userId,symbol]` on the table `StockPortfolio` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `StockPortfolio_userId_symbol_key` ON `StockPortfolio`(`userId`, `symbol`);
