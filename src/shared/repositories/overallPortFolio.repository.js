import { db } from "../../config/db.js";

export const overallPortfolioRepo = {
  get: async ({ userId, portfolioType }) => {
    const [portfolio] = await db.execute(
      "SELECT * FROM portfolio_summary WHERE user_id = ? AND portfolio_type = ?",
      [userId, portfolioType]
    );
    return portfolio[0] || null;
  },
  create: async ({ userId, investmentAmt, portfolioType }) => {
    await db.execute(
      "INSERT INTO portfolio_summary (user_id, total_inv, total_mv, portfolio_type) VALUES(?,?,?,?)",
      [userId, investmentAmt, investmentAmt, portfolioType]
    );
  },
  delete: async ({ userId, portfolioType }) => {
    await db.execute("DELETE FROM portfolio_summary WHERE user_id = ? AND portfolio_type= ?", [
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
      "UPDATE portfolio_summary SET total_inv = ?, total_mv = ?, total_pnl = ?, total_roi = ? WHERE user_id = ? AND portfolio_type = ?",
      [updatedTotalInv, updatedTotalMv, updatedTotalPnl, updatedTotalRoi, userId, portfolioType]
    );
  },
};
