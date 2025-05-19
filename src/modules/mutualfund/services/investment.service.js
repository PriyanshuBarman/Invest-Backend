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

  const prevInv = await portfolioRepo.findUnique({
    userId_fundCode: { userId, fundCode },
  });

  //  Checking if the user has already invested in the fund (Fresh or Re invest)
  if (!prevInv) {
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
  } else {
    const updatedValues = calculateUpdatedPortfolio(prevInv, investmentAmt, purchaseUnits);
    await portfolioRepo.update({ id: prevInv.id }, { ...updatedValues, latestNav: purchaseNav });
  }
  // -----------------------------------------------------------------------------------------------------------

  // // Common Post-investment operations for both (Fresh & Re investment)
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
