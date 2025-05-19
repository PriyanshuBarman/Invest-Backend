import { tnxRepo, walletRepo } from "../../../shared/repositories/index.repository.js";
import { addToUserPortfolio } from "../../../shared/services/userPortfolio.service.js";
import { ApiError } from "../../../utils/ApiError.utils.js";
import { holdingRepo, portfolioRepo } from "../repositories/index.repository.js";
import { calculateUpdatedPortfolio } from "../utils/purchase.utils.js";

// Handles both Fresh & Re investment

export const processPurchase = async (data) => {
  const { userId, symbol, stockName, price, quantity } = data;

  const balance = await walletRepo.check(userId);

  const investmentAmt = quantity * price;

  if (investmentAmt > balance) throw new ApiError(400, "Insufficient wallet balance");

  const prevInv = await portfolioRepo.findUnique({ userId_symbol: { userId, symbol } });

  if (!prevInv) {
    await portfolioRepo.create({
      userId,
      symbol,
      stockName,
      quantity,
      investedAmt: investmentAmt,
      marketValue: investmentAmt,
      // latestPrice: price,
    });
  } else {
    const updatedValues = calculateUpdatedPortfolio(prevInv, investmentAmt, quantity);
    await portfolioRepo.update({ id: prevInv.id }, updatedValues);
  }

  // Below are the Common Post-investment operations for both (Fresh or Re investment)

  await tnxRepo.create({
    userId,
    price,
    quantity,
    code: symbol,
    tnxType: "BUY",
    assetType: "STOCK",
    amount: investmentAmt,
    name: stockName,
  }); // shared

  await holdingRepo.create({
    userId,
    price,
    symbol,
    quantity,
    stockName,
    amount: investmentAmt,
  });

  await addToUserPortfolio({ userId, investmentAmt, portfolioType: "STOCK" }); // shared

  await walletRepo.debit(userId, investmentAmt); // shared
};
