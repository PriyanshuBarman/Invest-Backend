/*
  Warnings:

  - You are about to drop the `portfoliosummary` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `portfoliosummary` DROP FOREIGN KEY `PortfolioSummary_userId_fkey`;

-- DropTable
DROP TABLE `portfoliosummary`;

-- CreateTable
CREATE TABLE `UserPortfolio` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `portfolioType` ENUM('MF', 'STOCK', 'GOLD') NOT NULL,
    `totalInv` DECIMAL(10, 2) NOT NULL,
    `totalMv` DECIMAL(10, 2) NOT NULL,
    `totalPnl` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `totalRoi` DECIMAL(8, 2) NOT NULL DEFAULT 0.00,
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `UserPortfolio_userId_portfolioType_key`(`userId`, `portfolioType`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserPortfolio` ADD CONSTRAINT `UserPortfolio_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
