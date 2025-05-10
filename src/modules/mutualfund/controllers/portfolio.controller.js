import { overallPortfolioRepo } from "../../../shared/repositories/overallPortFolio.repository.js";
import { apiError } from "../../../utils/apiError.js";
import { asyncHandler } from "../../../utils/asyncHandler.js";
import { portfolioRepository } from "../repositories/portfolio.repository.js";

export const fetchPortfolio = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const { sort_by, order_by, fundType } = req.query;

  const portfolio = await portfolioRepository.getAll({
    userId,
    sort_by,
    order_by,
    fundType,
  });

  if (!portfolio) throw new apiError(400, "Not invested");
  
  return res
    .status(200)
    .json({ success: true, sort_by, order_by, fundType, portfolio });
});

export const fetchFund = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const { fundCode } = req.params;

  if (!fundCode) throw new apiError(400, "fundCode is required");

  const fund = await portfolioRepository.getFund(userId, fundCode);
  if (!fund) throw new apiError(404, "Not invested");

  return res.status(200).json({ success: true, fund });
});

export const fetchOverallPortfolio = asyncHandler(async (req, res) => {
  const { userId } = req.user;

  const summary = await overallPortfolioRepo.get({
    userId,
    portfolioType: "MF",
  }); // shared

  if (!summary) throw new apiError(404, "Not invested yet");

  return res.status(200).json({ success: true, summary });
});
