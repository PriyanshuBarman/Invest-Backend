-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `nm` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NULL,
    `isAdmin` BOOLEAN NOT NULL DEFAULT false,
    `avatar` VARCHAR(191) NULL,
    `balance` DECIMAL(10, 2) NOT NULL DEFAULT 1000.00,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transaction` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `amount` DECIMAL(10, 2) NOT NULL,
    `assetType` ENUM('MF', 'STOCK', 'GOLD') NULL,
    `code` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `tnxType` ENUM('DEPOSIT', 'REDEEM', 'INVEST') NOT NULL,
    `quantity` DECIMAL(10, 2) NULL,
    `puchaseAt` DECIMAL(10, 4) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MfPortfolio` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `latestNav` DECIMAL(10, 4) NOT NULL,
    `fundCode` VARCHAR(191) NOT NULL,
    `fundName` VARCHAR(191) NOT NULL,
    `fundType` ENUM('Equity', 'Debt', 'Hybrid', 'Other') NOT NULL,
    `availableUnits` DECIMAL(10, 2) NOT NULL,
    `investedAmt` DECIMAL(10, 2) NOT NULL,
    `marketValue` DECIMAL(10, 2) NOT NULL,
    `pnl` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `roi` DECIMAL(8, 2) NOT NULL DEFAULT 0.00,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MfHolding` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `fundCode` VARCHAR(191) NOT NULL,
    `fundName` VARCHAR(191) NOT NULL,
    `purchaseDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `purchaseNav` DECIMAL(10, 4) NOT NULL,
    `units` DECIMAL(10, 2) NOT NULL,
    `amount` DECIMAL(10, 2) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StockPortfolio` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `symbol` VARCHAR(191) NOT NULL,
    `stockName` VARCHAR(191) NOT NULL,
    `availableQty` INTEGER NOT NULL,
    `latestPrice` DECIMAL(10, 2) NULL,
    `investedAmt` DECIMAL(10, 2) NOT NULL,
    `marketValue` DECIMAL(10, 2) NOT NULL,
    `pnl` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `roi` DECIMAL(8, 2) NOT NULL DEFAULT 0.00,
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StockHolding` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `symbol` VARCHAR(191) NOT NULL,
    `stockName` VARCHAR(191) NOT NULL,
    `investmentAmt` DECIMAL(10, 2) NOT NULL,
    `quantity` INTEGER NOT NULL DEFAULT 0,
    `purchaseDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `purchasePrice` DECIMAL(10, 2) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PortfolioSummary` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `portfolioType` ENUM('MF', 'STOCK', 'GOLD') NOT NULL,
    `totalInvestment` DECIMAL(10, 2) NOT NULL,
    `totalMv` DECIMAL(10, 2) NOT NULL,
    `totalPnl` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `totalRoi` DECIMAL(8, 2) NOT NULL DEFAULT 0.00,
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Transaction` ADD CONSTRAINT `Transaction_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MfPortfolio` ADD CONSTRAINT `MfPortfolio_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MfHolding` ADD CONSTRAINT `MfHolding_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StockPortfolio` ADD CONSTRAINT `StockPortfolio_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `StockHolding` ADD CONSTRAINT `StockHolding_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PortfolioSummary` ADD CONSTRAINT `PortfolioSummary_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
