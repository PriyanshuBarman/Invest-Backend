import { ApiError } from "../../../utils/ApiError.utils.js";
import { asyncHandler } from "../../../utils/asyncHandler.utils.js";
import { sellAllQty, sellSomeQty } from "../services/sell.service.js";

export const handleSell = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const { symbol, price, quantity } = req.body;

  await sellSomeQty(userId, symbol, price, quantity);

  return res
    .status(200)
    .json({ success: true, message: `${quantity} quantity sold successful` });
});

export const handleSellAllQty = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const { symbol, price } = req.body;

  await sellAllQty(userId, symbol, price);

  return res
    .status(200)
    .json({ success: true, message: "All quantity sold successfully" });
});
