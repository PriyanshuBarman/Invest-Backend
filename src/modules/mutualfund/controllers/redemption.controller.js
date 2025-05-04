import { processRedemption } from "../services/redemption.service.js";

export const handleRedeem = async (req, res) => {
  const { userId } = req.user;
  const { fundCode } = req.params;
  const { redemptionAmt } = req.body;

  if (!fundCode) {
    return res.status(400).json({ success: false, message: "fundCode required" });
  }
  if (!redemptionAmt) {
    return res.status(400).json({ success: false, message: "redemptionAmt required" });
  }
  if (isNaN(redemptionAmt) || redemptionAmt <= 0) {
    return res.status(400).json({ success: false, message: "Invalid  redemptionAmt" });
  }

  try {
    await processRedemption(userId, fundCode, redemptionAmt);
    return res.status(200).json({ success: true, message: "redemption successful" });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ success: false, message: error.message });
  }
};

export const handleFullRedeem = async (req, res) => {
  const { userId } = req.user;
  const { fundCode } = req.params;

  if (!fundCode) {
    return res.status(400).json({ success: false, message: "fundCode required" });
  }

  try {
    await processRedemption(userId, fundCode);
    return res.status(200).json({ success: true, message: "All units redeemed successfully" });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ success: false, message: error.message });
  }
};
