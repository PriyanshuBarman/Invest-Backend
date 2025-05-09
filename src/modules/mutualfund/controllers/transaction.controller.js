import { tnxRepository } from "../../../shared/repositories/tnx.repository.js";
import { apiError } from "../../../utils/apiError.js";
import { asyncHandler } from "../../../utils/asyncHandler.js";

export const fetchPortfolioTnx = asyncHandler(async (req, res) => {
  const { userId } = req.user;

  const tnx = await tnxRepository.getByPortfolio({
    userId,
    portfolioType: "MF",
  });

  if (!tnx) throw new apiError(404, "No transactions found");

  return res.status(200).json({ success: true, tnx });
});


export const fetchFundTnx = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const { fundCode } = req.params;

  const tnx = await tnxRepository.getByCode(userId, fundCode);
  
  if (!tnx) throw new apiError(404, "No transactions found");

  return res.status(200).json({ success: true, tnx });
});
