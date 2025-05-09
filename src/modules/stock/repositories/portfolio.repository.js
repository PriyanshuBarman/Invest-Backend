import { db } from "../../../config/db.js";

export const portfolioRepository = {
  getAllStock: async ({ userId, sort_by = "mv", order_by = "DESC" }) => {
    const query = `SELECT * FROM stock_portfolio WHERE userId = ? ORDER BY ${sort_by} ${order_by}`;

    const [portfolio] = await db.execute(query, [userId]);
    return portfolio.length ? portfolio : null;
  },

  getStock: async (userId, symbol) => {
    const [portfolio] = await db.execute("SELECT * FROM stock_portfolio WHERE  userId = ? AND symbol = ?", [
      userId,
      symbol,
    ]);
    return portfolio[0] || null;
  },

  addNewStock: async ({ userId, investmentAmt, symbol, stockName, purchasePrice, purchaseQty }) => {
    await db.execute(
      "INSERT INTO stock_portfolio (userId, symbol, stock_name, investedAmt, mv, available_qty, latest_price) VALUES(?,?,?,?,?,?,?)",
      [userId, symbol, stockName, investmentAmt, investmentAmt, purchaseQty, purchasePrice]
    );
  },

  updateStock: async ({ updatedInvestedAmt, updatedMv, updatedQty, updatedRoi, userId, symbol }) => {
    await db.execute(
      "UPDATE stock_portfolio SET investedAmt = ?, mv = ?, available_qty = ?, roi = ? WHERE userId = ? AND symbol = ?",
      [updatedInvestedAmt, updatedMv, updatedQty, updatedRoi, userId, symbol]
    );
  },

  deleteStock: async (userId, symbol) => {
    await db.execute("DELETE FROM stock_portfolio WHERE userId = ? AND symbol = ?", [userId, symbol]);
  },
};
