/*
  Warnings:

  - You are about to drop the column `availableUnits` on the `mfportfolio` table. All the data in the column will be lost.
  - The values [REDEEM,INVEST] on the enum `Transaction_tnxType` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `units` to the `MfPortfolio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `mfportfolio` DROP COLUMN `availableUnits`,
    ADD COLUMN `units` DECIMAL(10, 2) NOT NULL,
    MODIFY `latestNav` DECIMAL(10, 4) NULL;

-- AlterTable
ALTER TABLE `transaction` MODIFY `tnxType` ENUM('DEPOSIT', 'BUY', 'SELL') NOT NULL;
