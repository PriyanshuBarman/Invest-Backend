// prettier-ignore
export const calculatePortfolioAfterSell = (userPortfolio, redemptionAmt, costBasis) => {
  const newTotalInv = costBasis
    ? userPortfolio.totalInv - costBasis
    : userPortfolio.totalInv - redemptionAmt;
  const newTotalMv = userPortfolio.totalInv - redemptionAmt;
  const newTotalPnl = newTotalMv - newTotalInv;
  const newTotalRoi = (newTotalPnl / newTotalInv) * 100;

  return {
    totalInv: newTotalInv,
    totalMv: newTotalMv,
    totalPnl: newTotalPnl,
    totalRoi: newTotalRoi,
  };
};

export const calculatePortfolioAfterBuy = (userPortfolio, investmentAmt) => {
  const newTotalInv = userPortfolio.totalInv.toNumber() + investmentAmt;
  const newTotalMv = userPortfolio.totalInv.toNumber() + investmentAmt;
  const newTotalPnl = newTotalMv - newTotalInv;
  const newTotalRoi = (newTotalPnl / newTotalInv) * 100;

  return {
    totalInv: newTotalInv,
    totalMv: newTotalMv,
    totalPnl: newTotalPnl,
    totalRoi: newTotalRoi,
  };
};
