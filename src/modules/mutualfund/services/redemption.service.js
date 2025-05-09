import { apiError } from "../../../utils/apiError.js";
import { holdingRepository, portfolioRepository } from "../repositories/index.repository.js";
import { tnxRepository, walletRepository } from "../../../shared/repositories/index.repository.js";
import { subtractOverallPortfolio } from "../../../shared/services/overallPortfolio.service.js";
import { fifoRedemption } from "./fifo.service.js";

// Handles both partial and full redemptions

export const processRedemption = async (userId, fundCode, redemptionAmt = null) => {
  const fund = await portfolioRepository.getFund(userId, fundCode);

  if (!fund) throw new apiError(400, "Fund Not Found");
  if (redemptionAmt > fund.mv) throw new apiError(400, "insufficient fund balance");

  const redemptionUnits = redemptionAmt
    ? redemptionAmt / parseFloat(fund.latestNav)
    : parseFloat(fund.availableUnits);

  if (!redemptionAmt || redemptionAmt === fund.mv) {
    redemptionAmt = fund.mv;

    await portfolioRepository.deleteFund(userId, fundCode);
    await holdingRepository.deleteByCode(userId, fundCode);

    await subtractOverallPortfolio({ userId, sellAmount: redemptionAmt, portfolioType: "MF" });
  } else {
    const costBasis = await fifoRedemption(userId, fundCode, redemptionUnits);

    const updatedInvestedAmt = fund.investedAmt - costBasis;
    const updatedMv = fund.mv - redemptionAmt;
    const updatedUnits = parseFloat(fund.availableUnits) - redemptionUnits;
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
    code: fund.fundCode,
    name: fund.fundName,
    sellPrice: parseFloat(fund.latestNav),
    sellQty: redemptionUnits,
  }); // shared

  await walletRepository.credit(userId, redemptionAmt); // shared
};
