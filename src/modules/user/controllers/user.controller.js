import { asyncHandler } from "../../../utils/asyncHandler.js";
import { userRepository } from "../repositories/user.repository.js";

export const getAllUser = asyncHandler(async (req, res) => {
  const users = userRepository.getAll();
  return res.status(200).json({ success: true, users });
});

export const getUser = asyncHandler(async (req, res) => {
  const { userId } = req.user;

  const user = await userRepository.findById(userId);
  return res.status(200).json({ success: true, user });
});
