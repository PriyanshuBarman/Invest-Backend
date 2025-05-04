import { tnxRepository } from "../../../shared/repositories/tnx.repository.js";

export const fetchPortfolioTnx = async (req, res) => {
  const { userId } = req.user;

  try {
    const tnxData = await tnxRepository.getByPortfolio({ userId, portfolioType: "STOCK" }); // shared
    if (!tnxData) {
      return res.status(404).json({ success: false, message: "No transactions found" });
    }

    return res.status(200).json({ success: true, tnxData });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const fetchStockTnx = async (req, res) => {
  const { userId } = req.user;
  const { symbol } = req.params;

  try {
    const fundTnxData = await tnxRepository.getByCode(userId, symbol);
    if (!fundTnxData) {
      return res.status(404).json({ success: false, message: "No transactions found" });
    }

    return res.status(200).json({ success: true, fundTnxData });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
