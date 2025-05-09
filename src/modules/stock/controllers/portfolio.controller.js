import { overallPortfolioRepo } from "../../../shared/repositories/overallPortFolio.repository.js";
import { apiError } from "../../../utils/apiError.js";
import { asyncHandler } from "../../../utils/asyncHandler.js";
import { portfolioRepository } from "../repositories/portfolio.repository.js";

export const fetchPortfolio = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const { sort_by, order_by } = req.query;

  const portfolio = await portfolioRepository.getAllStock({
    userId,
    sort_by,
    order_by,
  });

  if (!portfolio) throw new apiError(400, "No Portfolio Found");

  return res.status(200).json({ success: true, sort_by, order_by, portfolio });
});


export const fetchStock = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const { symbol } = req.params;

  if (!symbol) throw new apiError(400, "symbol is required");

  const stock = await portfolioRepository.getStock(userId, symbol);
  
  if (!stock) throw new apiError(400, "Stock Not Found in Portfolio");

  return res.status(200).json({ success: true, stock });
});


export const fetchOverallPortfolio = asyncHandler(async (req, res) => {
  const { userId } = req.user;

  const summary = await overallPortfolioRepo.get({
    userId,
    portfolioType: "STOCK",
  }); // shared

  if (!summary) throw new apiError(400, "No Portfolio Found");

  return res.status(200).json({ success: true, summary });
});
