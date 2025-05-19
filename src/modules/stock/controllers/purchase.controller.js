import { asyncHandler } from "../../../utils/asyncHandler.utils.js";
import { processPurchase } from "../services/purchase.service.js";

export const handlePurchase = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const { symbol, stockName, price, quantity } = req.body;

  await processPurchase({
    userId,
    symbol,
    stockName,
    price,
    quantity,
  });

  return res.status(200).json({
    success: true,
    message: "Investment processed successfully",
  });
});
