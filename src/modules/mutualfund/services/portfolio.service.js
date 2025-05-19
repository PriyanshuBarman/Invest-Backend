import { userPortfolioRepo } from "../../../shared/repositories/index.repository.js";
import { ApiError } from "../../../utils/ApiError.utils.js";
import { portfolioRepo } from "../repositories/index.repository.js";

export const fetchPortfolio = async ({ userId, fundType, sort_by, order_by }) => {
  const portfolio = await portfolioRepo.findMany(
    { userId, fundType },
    { orderBy: { [sort_by]: order_by } }
  );

  if (!portfolio) throw new ApiError(400, "Not invested");
  return portfolio;
};

export const fetchFund = async ({ userId, fundCode }) => {
  const fund = await portfolioRepo.findUnique({
    userId_fundCode: { userId, fundCode },
  });

  if (!fund) throw new ApiError(404, "Not invested");
  return fund;
};

export const fetchPortfolioSummary = async ({ userId }) => {
  const portfolio = await userPortfolioRepo.findUnique({
    userId_portfolioType: { userId, portfolioType: "MF" },
  });

  if (!portfolio) throw new ApiError(400, "Not invested in any fund");
  return portfolio;
};
