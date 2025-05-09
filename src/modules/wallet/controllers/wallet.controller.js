import {
  tnxRepository,
  walletRepository,
} from "../../../shared/repositories/index.repository.js";
import { apiError } from "../../../utils/apiError.js";
import { asyncHandler } from "../../../utils/asyncHandler.js";

export const checkBalance = asyncHandler(async (req, res, next) => {
  const { userId } = req.user;
  const balance = await walletRepository.check(userId);

  return res.status(200).json({ success: true, balance });
});

export const deposit = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const { amount } = req.body;

  if (!amount || isNaN(amount) || amount <= 0)
    throw new apiError(400, "Invalid amount");

  await walletRepository.credit(userId, amount);
  await tnxRepository.deposit(userId, amount);

  return res.status(200).json({ success: true, message: "Deposit successful" });
});
