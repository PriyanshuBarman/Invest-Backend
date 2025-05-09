import { apiError } from "../../../utils/apiError.js";
import { asyncHandler } from "../../../utils/asyncHandler.js";
import { processRedemption } from "../services/redemption.service.js";

export const handleRedeem = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const { fundCode } = req.params;
  const { redemptionAmt } = req.body;

  if (!fundCode) throw new apiError(400, "fundCode required");

  if (!redemptionAmt) throw new apiError(400, "redemptionAmt required");
  
  if (isNaN(redemptionAmt) || redemptionAmt <= 0)
    throw new apiError(400, "invalid redemptionAmt");

  await processRedemption(userId, fundCode, redemptionAmt);

  return res
    .status(200)
    .json({ success: true, message: "redemption successful" });
});

export const handleFullRedeem = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const { fundCode } = req.params;

  if (!fundCode) throw new apiError(400, "fundCode required");

  await processRedemption(userId, fundCode);

  return res
    .status(200)
    .json({ success: true, message: "All units redeemed successfully" });
});
