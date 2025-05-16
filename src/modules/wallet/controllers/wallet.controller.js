import { ApiError } from "../../../utils/ApiError.utils.js";
import { asyncHandler } from "../../../utils/asyncHandler.utils.js";
import { depositBalance, fetchBalance } from "../services/wallet.service.js";

export const getBalance = asyncHandler(async (req, res, next) => {
  const { userId } = req.user;
  const balance = await fetchBalance(userId);

  return res.status(200).json({ success: true, balance });
});

export const deposit = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const { amount } = req.body;

  if (!amount || isNaN(amount) || amount <= 0) throw new ApiError(400, "Invalid amount");

  await depositBalance(userId, amount);

  return res.status(200).json({ success: true, message: "Deposit successful" });
});
