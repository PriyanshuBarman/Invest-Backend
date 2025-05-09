import { tnxRepository, walletRepository } from "../../../shared/repositories/index.repository.js";
import { addToOverallPortfolio } from "../../../shared/services/overallPortfolio.service.js";
import { apiError } from "../../../utils/apiError.js";
import { holdingRepository, portfolioRepository } from "../repositories/index.repository.js";

// Handles both Fresh & Re investment
export const processInvestment = async (data) => {
  const { userId, investmentAmt, fundCode, fundName, purchaseNav } = data;
  const balance = await walletRepository.check(userId);
  if (balance < investmentAmt) {
    throw new apiError(400, "Insufficient wallet balance");
  }
  const purchaseUnits = investmentAmt / purchaseNav;

  const prevInv = await portfolioRepository.getFund(userId, fundCode);

  if (!prevInv) {
    await portfolioRepository.createFund({ purchaseUnits, ...data });
  } else {
    const updatedInvestedAmt = prevInv.investedAmt + investmentAmt;
    const updatedUnits = parseFloat(prevInv.availableUnits) + purchaseUnits;
    const updatedMv = prevInv.mv + investmentAmt;
    const updatedPnl = updatedMv - updatedInvestedAmt;
    const updatedRoi = updatedInvestedAmt > 0 ? (updatedPnl / updatedInvestedAmt) * 100 : 0;

    await portfolioRepository.updateFund({
      userId,
      fundCode,
      updatedInvestedAmt,
      updatedMv,
      updatedUnits,
      updatedRoi,
    });
  }

  await holdingRepository.add({
    userId,
    fundCode,
    fundName,
    investmentAmt,
    purchaseNav,
    purchaseUnits,
  });

  await tnxRepository.purchase({
    asset: "MF",
    userId,
    tnxAmount: investmentAmt,
    code: fundCode,
    name: fundName,
    purchaseQty: purchaseUnits,
    purchasePrice: purchaseNav,
  }); // shared

  await addToOverallPortfolio({ userId, investmentAmt, portfolioType: "MF" }); // shared

  await walletRepository.debit(userId, investmentAmt); // shared
  console.log("findishsdfldsj");
};
