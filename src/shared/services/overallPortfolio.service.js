import { overallPortfolioRepo } from "../repositories/overallPortFolio.repository.js";

export const addToOverallPortfolio = async ({ userId, investmentAmt, portfolioType }) => {
  const summary = await overallPortfolioRepo.get({ userId, portfolioType });

  if (!summary) {
    await overallPortfolioRepo.create({ userId, investmentAmt, portfolioType });
    return;
  }

  const updatedTotalInv = summary.totalInv + investmentAmt;
  const updatedTotalMv = summary.totalInv + investmentAmt;
  const updatedTotalPnl = updatedTotalMv - updatedTotalInv;
  const updatedTotalRoi = (updatedTotalPnl / updatedTotalInv) * 100;

  overallPortfolioRepo.update({userId,portfolioType,updatedTotalInv,updatedTotalMv,updatedTotalPnl,updatedTotalRoi}); // prettier-ignore
};


export const subtractOverallPortfolio = async ({ userId, costBasis = null, sellAmount, portfolioType }) => {
  const summary = await overallPortfolioRepo.get({ userId, portfolioType });
  if (sellAmount === summary.totalMv) {
    await overallPortfolioRepo.delete({ userId, portfolioType });
    return;
  }

  const updatedTotalInv = costBasis ? summary.totalInv - costBasis : summary.totalInv - sellAmount;
  const updatedTotalMv = summary.totalInv - sellAmount;
  const updatedTotalPnl = updatedTotalMv - updatedTotalInv;
  const updatedTotalRoi = (updatedTotalPnl / updatedTotalInv) * 100;

  overallPortfolioRepo.update({userId,portfolioType,updatedTotalInv,updatedTotalMv,updatedTotalPnl,updatedTotalRoi}); // prettier-ignore
};
