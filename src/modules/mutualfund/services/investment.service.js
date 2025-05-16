import { tnxRepo, walletRepo } from "../../../shared/repositories/index.repository.js";
import { addToUserPortfolio } from "../../../shared/services/userPortfolio.service.js";
import { ApiError } from "../../../utils/ApiError.utils.js";
import { holdingRepo, portfolioRepo } from "../repositories/index.repository.js";
import { calculateUpdatedPortfolio } from "../utils/investment.utils.js";

// Main Handler
export const processInvestment = async (data) => {
  const { userId, investmentAmt, fundCode, fundName, purchaseNav, fundType } = data;

  const balance = await walletRepo.check(userId);
  if (investmentAmt > balance) throw new ApiError(400, "Insufficient wallet balance");

  const purchaseUnits = investmentAmt / purchaseNav;

  const prevInvestment = await portfolioRepo.findUnique({
    userId_fundCode: { userId, fundCode },
  });

  // ------------------------------------------------------------------ Checking if the user has already invested in the fund
  if (!prevInvestment) {
    await freshInvest({ ...data, purchaseUnits });
  } else {
    await reInvest({ ...data, purchaseUnits, prevInvestment });
  }
  // ------------------------------------------------------------------// Checking if the user has already invested in the fund

  // Post-investment operations for both (Fresh & Re investment)
  await holdingRepo.create({
    userId,
    fundCode,
    fundName,
    amount: investmentAmt,
    purchaseNav,
    units: purchaseUnits,
  });

  await tnxRepo.create({
    userId,
    amount: investmentAmt,
    code: fundCode,
    name: fundName,
    quantity: purchaseUnits,
    price: purchaseNav,
    assetType: "MF",
    tnxType: "BUY",
  });

  await addToUserPortfolio({ userId, investmentAmt, portfolioType: "MF" });

  await walletRepo.debit(userId, investmentAmt);
};

// Below are the helper functions (freshInvest & reInvest) used in the main handler
// *freshInvest* function is used to create a new investment in the portfolio
// *reInvest* function is used to update the existing investment in the portfolio
// prettier-ignore
const freshInvest = async ({userId,fundCode,fundName,fundType,investmentAmt,purchaseNav,purchaseUnits}) => {
  await portfolioRepo.create({
    userId,
    fundCode,
    fundName,
    fundType,
    units: purchaseUnits,
    marketValue: investmentAmt,
    investedAmt: investmentAmt,
    latestNav: purchaseNav,
  });
};

// prettier-ignore
const reInvest = async ({userId,fundCode,investmentAmt,purchaseNav,purchaseUnits,prevInvestment}) => {
  const updatedValues = calculateUpdatedPortfolio(
    prevInvestment,
    investmentAmt,
    purchaseUnits
  );

  await portfolioRepo.update(
    { userId_fundCode: { userId, fundCode } },
    { ...updatedValues, latestNav: purchaseNav }
  );
};
