import { overallPortfolioRepo } from "../../../shared/repositories/overallPortFolio.repository.js";
import { portfolioRepository } from "../repositories/portfolio.repository.js";

export const fetchPortfolio = async (req, res) => {
  const { userId } = req.user;
  const { sort_by, order_by, fund_type } = req.query;

  try {
    const portfolio = await portfolioRepository.getAll({
      userId,
      sort_by,
      order_by,
      fund_type,
    });

    if (!portfolio) {
      return res.status(400).json({ success: false, message: "Not invested" });
    }

    return res.status(200).json({ success: true, sort_by, order_by, fund_type, portfolio });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const fetchFund = async (req, res) => {
  const { userId } = req.user;
  const { fundCode } = req.params;

  if (!fundCode) {
    return res.status(400).json({ success: false, message: "fundCode required " });
  }

  try {
    const fund = await portfolioRepository.getFund(userId, fundCode);
    if (!fund) {
      return res.status(400).json({ success: false, message: "Fund not found or not invested" });
    }

    return res.status(200).json({ success: true, fund });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const fetchOverallPortfolio = async (req, res) => {
  const { userId } = req.user;
  try {
    const summary = await overallPortfolioRepo.get({ userId, portfolioType: "MF" }); // shared

    if (!summary) {
      return res.status(404).json({ success: false, message: "Not invested yet" });
    }

    return res.status(200).json({ success: true, summary });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
