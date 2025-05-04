import { walletRepository, tnxRepository } from "../../../shared/repositories/index.repository.js";

export const checkBalance = async (req, res) => {
  const { userId } = req.user;
  console.log(req.user);
  try {
    console.log("first");
    const balance = await walletRepository.check(userId);
    console.log("first");

    return res.status(200).json({ success: true, balance });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const deposit = async (req, res) => {
  const { userId } = req.user;
  const { amount } = req.body;

  if (!amount || isNaN(amount) || amount <= 0) {
    return res.status(400).json({ success: false, message: "Invalid deposit amount" });
  }

  try {
    await walletRepository.credit(userId, amount);
    await tnxRepository.deposit(userId, amount);

    return res.status(200).json({ success: true, message: "Deposit successful" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
