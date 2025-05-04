import { userRepository } from "../repositories/user.repository.js";

export const getAllUser = async (params) => {
  const { user_id } = req.user;
  try {
    const users = userRepository.getAll();
    return res.status(200).json({ success: true, users });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getUser = async (req, res) => {
    console.log(req.user)
    const { user_id } = req.user;
    console.log(user_id)
  try {
      const user = await userRepository.findById(user_id);
    return res.status(200).json({ success: true, user });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
