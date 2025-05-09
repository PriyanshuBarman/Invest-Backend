import { apiError } from "../../../utils/apiError.js";
import { asyncHandler } from "../../../utils/asyncHandler.js";
import { processSell } from "../services/sell.service.js";

export const handleSell = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const { symbol } = req.params;
  const { sellQty } = req.body;

  if (!symbol) throw new apiError(400, "symbol required");

  if (!sellQty) throw new apiError(400, "sellQty required");

  if (isNaN(sellQty) || sellQty <= 0 || !Number.isInteger(sellQty))
    throw new apiError(400, "Invalid sellQty");

  await processSell(userId, symbol, sellQty);

  return res
    .status(200)
    .json({ success: true, message: "sold out successful" });
});

export const handleSellAllQty = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const { symbol } = req.params;

  if (!symbol) throw new apiError(400, "symbol required");

  await processSell(userId, symbol);

  return res
    .status(200)
    .json({ success: true, message: "All qty sold out successfully" });
});
