import { processSell } from "../services/sell.service.js";

export const handleSell = async (req, res) => {
  const { userId } = req.user;
  const { symbol } = req.params;
  const { sellQty } = req.body;

  if (!symbol) {
    return res.status(400).json({ success: false, message: "symbol required" });
  }
  if (!sellQty) {
    return res.status(400).json({ success: false, message: "sellQty required" });
  }
  if (isNaN(sellQty) || sellQty <= 0 || !Number.isInteger(sellQty)) {
    return res.status(400).json({ success: false, message: "Invalid sell qty" });
  }

  try {
    await processSell(userId, symbol, sellQty);
    return res.status(200).json({ success: true, message: "sold out successful" });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ success: false, message: error.message });
  }
};

export const handleSellAllQty = async (req, res) => {
  const { userId } = req.user;
  const { symbol } = req.params;
  if (!symbol) {
    return res.status(400).json({ success: false, message: "symbol required" });
  }

  try {
    await processSell(userId, symbol);
    return res.status(200).json({ success: true, message: "All qty sold out successfully" });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ success: false, message: error.message });
  }
};
