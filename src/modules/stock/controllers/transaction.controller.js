import { tnxRepository } from "../../../shared/repositories/tnx.repository.js";
import { apiError } from "../../../utils/apiError.js";
import { asyncHandler } from "../../../utils/asyncHandler.js";

export const fetchPortfolioTnx = asyncHandler(async (req, res) => {
  const { userId } = req.user;

  const tnxData = await tnxRepository.getByPortfolio({
    userId,
    portfolioType: "STOCK",
  }); // shared

  if (!tnxData) throw new apiError(404, "No transactions found");

  return res.status(200).json({ success: true, tnxData });
});

export const fetchStockTnx = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const { symbol } = req.params;

  const fundTnxData = await tnxRepository.getByCode(userId, symbol);

  if (!fundTnxData) throw new apiError(404, "No transactions found");

  return res.status(200).json({ success: true, fundTnxData });
});
