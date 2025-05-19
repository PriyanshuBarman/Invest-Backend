/*
  Warnings:

  - A unique constraint covering the columns `[userId,fundCode]` on the table `MfPortfolio` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,portfolioType]` on the table `PortfolioSummary` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `MfPortfolio_userId_fundCode_key` ON `MfPortfolio`(`userId`, `fundCode`);

-- CreateIndex
CREATE UNIQUE INDEX `PortfolioSummary_userId_portfolioType_key` ON `PortfolioSummary`(`userId`, `portfolioType`);
