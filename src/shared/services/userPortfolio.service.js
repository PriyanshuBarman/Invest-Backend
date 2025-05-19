import {
  calculatePortfolioAfterBuy,
  calculatePortfolioAfterSell,
} from "../../utils/userPortfolio.utils.js";
import { userPortfolioRepo } from "../repositories/index.repository.js";

export const addToUserPortfolio = async ({ userId, investmentAmt, portfolioType }) => {
  const userPortfolio = await userPortfolioRepo.findUnique({
    userId_portfolioType: { userId, portfolioType },
  });

  // =================== If First Investment (CREATE) userPortfolio & return ===================
  if (!userPortfolio) {
    return await userPortfolioRepo.create({
      userId,
      portfolioType,
      totalMv: investmentAmt,
      totalInv: investmentAmt,
    });
  }
  // ================================================ else (UPDATE) userPortfolio //=======

  // Update the existing record
  await userPortfolioRepo.update(
    { id: userPortfolio.id },
    calculatePortfolioAfterBuy(userPortfolio, investmentAmt)
  );
};

// prettier-ignore
export const subtractUserPortfolio = async ({userId,amount,portfolioType,costBasis = null}) => {
  const userPortfolio = await userPortfolioRepo.findUnique({
    userId_portfolioType: { userId, portfolioType },
  });

  if (amount === userPortfolio.totalMv.toNumber()) {
    return await userPortfolioRepo.delete({ id: userPortfolio.id });
  }

  await userPortfolioRepo.update(
    { id: userPortfolio.id },
    calculatePortfolioAfterSell(userPortfolio, amount, costBasis)
  );
};
