import { tnxRepository, walletRepository } from "../../../shared/repositories/index.repository.js";
import { addToOverallPortfolio } from "../../../shared/services/overallPortfolio.service.js";
import { apiError } from "../../../utils/apiError.js";
import { holdingRepository, portfolioRepository } from "../repositories/index.repository.js";

// Handles both Fresh & Re investment
export const processPurchase = async (data) => {
  const { userId, symbol, stockName, purchasePrice, purchaseQty } = data;

  const balance = await walletRepository.check(userId);

  const investmentAmt = purchaseQty * purchasePrice;

  if (balance < investmentAmt) {
    throw new apiError(400, "Insufficient wallet balance");
  }

  const prevInv = await portfolioRepository.getStock(userId, symbol);

  if (!prevInv) {
    await portfolioRepository.addNewStock({ investmentAmt, ...data });
  } else {
    const updatedInvestedAmt = prevInv.investedAmt + investmentAmt;
    const updatedMv = prevInv.mv + investmentAmt;
    const updatedQty = parseFloat(prevInv.available_qty) + purchaseQty;
    const updatedPnl = updatedMv - updatedInvestedAmt;
    const updatedRoi = updatedInvestedAmt > 0 ? (updatedPnl / updatedInvestedAmt) * 100 : 0;

    await portfolioRepository.updateStock({
      userId,
      symbol,
      updatedInvestedAmt,
      updatedMv,
      updatedQty,
      updatedRoi,
    });
  }

  await tnxRepository.purchase({
    userId,
    tnxAmount: investmentAmt,
    asset: "STOCK",
    code: symbol,
    name: stockName,
    purchaseQty,
    purchasePrice,
  }); // shared

  await holdingRepository.add({
    userId,
    symbol,
    stockName,
    investmentAmt,
    purchasePrice,
    purchaseQty,
  });
  await addToOverallPortfolio({ userId, investmentAmt, portfolioType: "STOCK" }); // shared

  await walletRepository.debit(userId, investmentAmt); // shared
};
