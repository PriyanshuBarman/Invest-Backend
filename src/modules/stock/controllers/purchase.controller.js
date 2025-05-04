import { processPurchase } from "../services/purchase.service.js";

export const handlePurchase = async (req, res) => {
  const { userId } = req.user;
  
  // req.body contains { symbol, stockName, purchasePrice, purchaseQty }

  try {
    await processPurchase({ userId, ...req.body });
    return res.status(200).json({
      success: true,
      message: "Investment processed successfully",
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};
