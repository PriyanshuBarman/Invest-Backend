import { userRepository } from "../repositories/user.repository.js";

export const getAllUser = async (params) => {
  const { userId } = req.user;
  try {
    const users = userRepository.getAll();
    return res.status(200).json({ success: true, users });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getUser = async (req, res) => {
  console.log(req.user);
  const { userId } = req.user;
  console.log(userId);
  try {
    const user = await userRepository.findById(userId);
    return res.status(200).json({ success: true, user });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
