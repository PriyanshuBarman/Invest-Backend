import { tnxRepository } from "../../../shared/repositories/tnx.repository.js";

export const fetchAllTransactions = async (req, res) => {
  const { user_id } = req.user;
  try {
    const tnx = await tnxRepository.getAll(user_id); // shared

    if (!tnx) {
      return res.status(404).json({ success: false, message: "No transactions found" });
    }

    return res.status(200).json({ success: true, tnx });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
