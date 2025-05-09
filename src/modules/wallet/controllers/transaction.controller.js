import { tnxRepository } from "../../../shared/repositories/tnx.repository.js";
import { apiError } from "../../../utils/apiError.js";
import { asyncHandler } from "../../../utils/asyncHandler.js";

export const fetchAllTransactions = asyncHandler(async (req, res) => {
  const { userId } = req.user;

  const tnx = await tnxRepository.getAll(userId); // shared

  if (!tnx) throw new apiError(404, "No transactions found");

  return res.status(200).json({ success: true, tnx });
});
