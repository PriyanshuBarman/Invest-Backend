import { asyncHandler } from "../../../utils/asyncHandler.utils.js";
import { fetchUser } from "../services/user.service.js";

export const getUser = asyncHandler(async (req, res) => {
  const { userId } = req.user;

  const user = await fetchUser(userId);

  return res.status(200).json({ success: true, user });
});
