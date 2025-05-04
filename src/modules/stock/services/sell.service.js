import { ApiError } from "../../../utils/apiError.js";
import { holdingRepository, portfolioRepository } from "../repositories/index.repository.js";
import { tnxRepository, walletRepository } from "../../../shared/repositories/index.repository.js";
import { subtractOverallPortfolio } from "../../../shared/services/overallPortfolio.service.js";
import { fifoRedemption } from "./fifo.service.js";

// Handles both partial and full redemptions

export const processSell = async (userId, symbol, sellQty = null) => {
  const stock = await portfolioRepository.getStock(userId, symbol);
  if (!stock) {
    throw new ApiError(400, "Stock Not Found");
  }
  if (sellQty > stock.available_qty) {
    throw new ApiError(400, "Sell qty cannot be greater than available qty");
  }

  sellQty = sellQty ? sellQty : stock.available_qty;
  const sellAmount = sellQty * parseFloat(stock.latest_price);

  if (!sellQty || sellQty === stock.available_qty) {
    await portfolioRepository.deleteStock(userId, symbol);
    await holdingRepository.deleteByCode(userId, symbol);
    await subtractOverallPortfolio({ userId, sellAmount, portfolioType: "STOCK" });
  } else {
    const costBasis = await fifoRedemption(userId, symbol, sellQty);

    const updatedInvestedAmt = stock.invested_amt - costBasis;
    const updatedMv = stock.mv - sellAmount;
    const updatedQty = stock.available_qty - sellQty;
    const updatedPnl = updatedMv - updatedInvestedAmt;
    const updatedRoi = updatedInvestedAmt > 0 ? (updatedPnl / updatedInvestedAmt) * 100 : 0;

    await portfolioRepository.updateStock({
      updatedInvestedAmt,
      updatedMv,
      updatedQty,
      updatedRoi,
      userId,
      symbol,
    });

    await subtractOverallPortfolio({ userId, costBasis, sellAmount, portfolioType: "STOCK" }); // shared
  }

  await tnxRepository.sell({
    asset: "STOCK",
    userId,
    tnxAmount: sellAmount,
    code: stock.symbol,
    name: stock.stock_name,
    sellQty,
    sellPrice: parseFloat(stock.latest_price),
  });
  await walletRepository.credit(userId, sellAmount);
};
