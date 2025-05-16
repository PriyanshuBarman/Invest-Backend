import { tnxRepo } from "../../../shared/repositories/tnx.repository.js";
import { ApiError } from "../../../utils/ApiError.utils.js";
import { asyncHandler } from "../../../utils/asyncHandler.utils.js";

export const fetchPortfolioTnx = asyncHandler(async (req, res) => {
  const { userId } = req.user;

  const tnxData = await tnxRepo.getByPortfolio({
    userId,
    portfolioType: "STOCK",
  }); // shared

  if (!tnxData) throw new ApiError(404, "No transactions found");

  return res.status(200).json({ success: true, tnxData });
});

export const fetchStockTnx = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const { symbol } = req.params;

  const fundTnxData = await tnxRepository.getByCode(userId, symbol);

  if (!fundTnxData) throw new ApiError(404, "No transactions found");

  return res.status(200).json({ success: true, fundTnxData });
});
