import { db } from "../../config/db.js";

export const overallPortfolioRepo = {
  get: async ({ userId, portfolioType }) => {
    const [portfolio] = await db.execute(
      "SELECT * FROM portfolio_summary WHERE userId = ? AND portfolioType = ?",
      [userId, portfolioType]
    );
    return portfolio[0] || null;
  },
  create: async ({ userId, investmentAmt, portfolioType }) => {
    await db.execute(
      "INSERT INTO portfolio_summary (userId, totalInv, totalMv, portfolioType) VALUES(?,?,?,?)",
      [userId, investmentAmt, investmentAmt, portfolioType]
    );
  },
  delete: async ({ userId, portfolioType }) => {
    await db.execute("DELETE FROM portfolio_summary WHERE userId = ? AND portfolioType= ?", [
      userId,
      portfolioType,
    ]);
  },
  update: async ({
    userId,
    portfolioType,
    updatedTotalInv,
    updatedTotalMv,
    updatedTotalPnl,
    updatedTotalRoi,
  }) => {
    await db.execute(
      "UPDATE portfolio_summary SET totalInv = ?, totalMv = ?, totalPnl = ?, totalRoi = ? WHERE userId = ? AND portfolioType = ?",
      [updatedTotalInv, updatedTotalMv, updatedTotalPnl, updatedTotalRoi, userId, portfolioType]
    );
  },
};
