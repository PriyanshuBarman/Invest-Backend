import { asyncHandler } from "../../../utils/asyncHandler.utils.js";
import { fullRedemption, partialRedemption } from "../services/redemption.service.js";

export const handleFullRedeem = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const { fundCode } = req.params;

  await fullRedemption(userId, fundCode);

  return res.status(200).json({ success: true, message: "All units redeemed successfully" });
});

export const handlePartialRedeem = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const { fundCode } = req.params;
  const { redemptionAmt } = req.body;

  await partialRedemption(userId, fundCode, redemptionAmt);

  return res.status(200).json({ success: true, message: "redemption successful" });
});
