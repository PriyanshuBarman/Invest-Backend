import { processInvestment } from "../services/investment.service.js";

export const handleInvest = async (req, res, next) => {
  const { userId } = req.user;

  // req.bod contains (investmentAmt, fundCode, fundName, purchaseNav, fundType )
  try {
    await processInvestment({ userId, ...req.body });
    return res.status(200).json({
      success: true,
      message: "Investment processed successfully",
    });
  } catch (error) {
    console.log("error", error);
    next(error);
    // res.status(error.statusCode || 500).json({ success: false, message: error.message });
  }
};
