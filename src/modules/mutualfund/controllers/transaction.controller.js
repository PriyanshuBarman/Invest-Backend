import { tnxRepository } from "../../../shared/repositories/tnx.repository.js";

export const fetchPortfolioTnx = async (req, res) => {
  const { userId } = req.user;

  try {
    const tnx = await tnxRepository.getByPortfolio({ userId, portfolioType: "MF" });
    if (!tnx) {
      return res.status(404).json({ success: false, message: "No transactions found" });
    }

    return res.status(200).json({ success: true, tnx });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const fetchFundTnx = async (req, res) => {
  const { userId } = req.user;
  const { fund_code } = req.params;

  try {
    const tnx = await tnxRepository.getByCode(userId, fund_code);
    if (!tnx) {
      return res.status(404).json({ success: false, message: "No transactions found" });
    }

    return res.status(200).json({ success: true, tnx });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
