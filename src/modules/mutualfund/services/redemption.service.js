import { ApiError } from "../../../utils/apiError.js";
import { holdingRepository, portfolioRepository } from "../repositories/index.repository.js";
import { tnxRepository, walletRepository } from "../../../shared/repositories/index.repository.js";
import { subtractOverallPortfolio } from "../../../shared/services/overallPortfolio.service.js";
import { fifoRedemption } from "./fifo.service.js";

// Handles both partial and full redemptions

export const processRedemption = async (userId, fundCode, redemptionAmt = null) => {
  const fund = await portfolioRepository.getFund(userId, fundCode);
  if (!fund) {
    throw new ApiError(400, "Fund Not Found");
  }
  if (redemptionAmt > fund.mv) {
    throw new ApiError(400, "insufficient fund balance");
  }

  const redemptionUnits = redemptionAmt
    ? redemptionAmt / parseFloat(fund.latest_nav)
    : parseFloat(fund.available_units);

  if (!redemptionAmt || redemptionAmt === fund.mv) {
    redemptionAmt = fund.mv;
    await portfolioRepository.deleteFund(userId, fundCode);
    await holdingRepository.deleteByCode(userId, fundCode);
    await subtractOverallPortfolio({ userId, sellAmount: redemptionAmt, portfolioType: "MF" });
  } else {
    const costBasis = await fifoRedemption(userId, fundCode, redemptionUnits);

    const updatedInvestedAmt = fund.invested_amt - costBasis;
    const updatedMv = fund.mv - redemptionAmt;
    const updatedUnits = parseFloat(fund.available_units) - redemptionUnits;
    const updatedPnl = updatedMv - updatedInvestedAmt;
    const updatedRoi = updatedInvestedAmt > 0 ? (updatedPnl / updatedInvestedAmt) * 100 : 0;
    await portfolioRepository.updateFund({
      updatedInvestedAmt,
      updatedMv,
      updatedUnits,
      updatedRoi,
      userId,
      fundCode,
    });

    await subtractOverallPortfolio({ userId, costBasis, sellAmount: redemptionAmt, portfolioType: "MF" }); // shared
  }

  await tnxRepository.sell({
    asset: "MF",
    userId,
    tnxAmount: redemptionAmt,
    code: fund.fund_code,
    name: fund.fund_name,
    sellPrice: parseFloat(fund.latest_nav),
    sellQty: redemptionUnits,
  }); // shared

  await walletRepository.credit(userId, redemptionAmt); // shared
};
