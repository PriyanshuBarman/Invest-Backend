import { asyncHandler } from "../../../utils/asyncHandler.js";
import { processPurchase } from "../services/purchase.service.js";

export const handlePurchase = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const { symbol, stockName, purchasePrice, purchaseQty } = req.body;

  await processPurchase({
    userId,
    symbol,
    stockName,
    purchasePrice,
    purchaseQty,
  });

  return res.status(200).json({
    success: true,
    message: "Investment processed successfully",
  });
});
