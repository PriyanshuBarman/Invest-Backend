import { overallPortfolioRepo } from "../../../shared/repositories/overallPortFolio.repository.js";
import { portfolioRepository } from "../repositories/portfolio.repository.js";

export const fetchPortfolio = async (req, res) => {
  const { userId } = req.user;
  const { sort_by, order_by } = req.query;

  try {
    const portfolio = await portfolioRepository.getAllStock({
      userId,
      sort_by,
      order_by,
    });

    if (!portfolio) {
      return res.status(400).json({ success: false, message: "Not invested" });
    }

    return res.status(200).json({ success: true, sort_by, order_by, portfolio });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const fetchStock = async (req, res) => {
  const { userId } = req.user;
  const { symbol } = req.params;
  if (!symbol) {
    return res.status(400).json({ success: false, message: "symbol required " });
  }

  try {
    const stock = await portfolioRepository.getStock(userId, symbol);
    if (!stock) {
      return res.status(400).json({ success: false, message: "stock not found or not invested" });
    }

    return res.status(200).json({ success: true, stock });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const fetchOverallPortfolio = async (req, res) => {
  const { userId } = req.user;
  try {
    const summary = await overallPortfolioRepo.get({ userId, portfolioType: "STOCK" }); // shared

    if (!summary) {
      return res.status(404).json({ success: false, message: "Not invested yet" });
    }

    return res.status(200).json({ success: true, summary });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
