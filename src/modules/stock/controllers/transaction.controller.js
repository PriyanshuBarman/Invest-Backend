import { asyncHandler } from "../../../utils/asyncHandler.utils.js";
import { fetchPortfolioTnx, fetchStockTnx } from "../services/tnx.service.js";

export const getPortfolioTnx = asyncHandler(async (req, res) => {
  const { userId } = req.user;

  const tnx = await fetchPortfolioTnx(userId);

  return res.status(200).json({ success: true, tnx });
});

export const getStockTnx = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const { symbol } = req.params;

  const tnx = await fetchStockTnx(userId, symbol);

  return res.status(200).json({ success: true, tnx });
});
