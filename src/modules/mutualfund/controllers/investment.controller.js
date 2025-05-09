import { asyncHandler } from "../../../utils/asyncHandler.js";
import { processInvestment } from "../services/investment.service.js";

export const handleInvest = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const { investmentAmt, fundCode, fundName, purchaseNav, fundType } = req.body;

  await processInvestment({ userId, investmentAmt, fundCode, fundName, purchaseNav, fundType });

  return res.status(200).json({
    success: true,
    message: "Investment processed successfully",
  });
});
