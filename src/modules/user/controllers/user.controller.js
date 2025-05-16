import { asyncHandler } from "../../../utils/asyncHandler.utils.js";
import { userRepo } from "../repositories/user.repository.js";

export const getAllUser = asyncHandler(async (req, res) => {
  const users = userRepo.getAll();
  return res.status(200).json({ success: true, users });
});

export const getUser = asyncHandler(async (req, res) => {
  const { userId } = req.user;

  const user = await userRepo.findById(userId);
  return res.status(200).json({ success: true, user });
});
