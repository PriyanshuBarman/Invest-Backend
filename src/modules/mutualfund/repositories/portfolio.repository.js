import { db } from "../../../config/db.js";

export const portfolioRepository = {
  getAll: async ({ userId, sort_by = "mv", order_by = "DESC", fund_type }) => {
    const condition = fund_type ? "AND fund_type = ?" : "";
    const query = `SELECT * FROM mf_portfolio WHERE user_id = ? ${condition} ORDER BY ${sort_by} ${order_by}`;

    const params = fund_type ? [userId, fund_type] : [userId];

    const [portfolio] = await db.execute(query, params);
    return portfolio.length ? portfolio : null;
  },

  getFund: async (userId, fundCode) => {
    const [portfolio] = await db.execute("SELECT * FROM mf_portfolio WHERE  user_id = ? AND fund_code = ?", [
      userId,
      fundCode,
    ]);
    return portfolio[0] || null;
  },

  createFund: async ({ userId, investmentAmt, fundCode, fundName, purchaseNav, fundType, purchaseUnits }) => {
    await db.execute(
      "INSERT INTO mf_portfolio (user_id, fund_code, fund_name, fund_type, mv, available_units, invested_amt, latest_nav) VALUES(?,?,?,?,?,?,?,?)",
      [userId, fundCode, fundName, fundType, investmentAmt, purchaseUnits, investmentAmt, purchaseNav]
    );
  },

  updateFund: async ({ updatedInvestedAmt, updatedMv, updatedUnits, updatedRoi, userId, fundCode }) => {
    await db.execute(
      "UPDATE mf_portfolio SET invested_amt = ?, mv = ?, available_units = ?, roi = ? WHERE user_id = ? AND fund_code = ?",
      [updatedInvestedAmt, updatedMv, updatedUnits, updatedRoi, userId, fundCode]
    );
  },

  deleteFund: async (userId, fundCode) => {
    await db.execute("DELETE FROM mf_portfolio WHERE user_id = ? AND fund_code = ?", [userId, fundCode]);
  },
};
