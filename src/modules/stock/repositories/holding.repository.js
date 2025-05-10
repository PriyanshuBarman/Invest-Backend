import { db } from "../../../config/db.js";

export const holdingRepository = {
  get: async (userId, symbol) => {
    const [holdings] = await db.execute(
      "SELECT * FROM stockholding WHERE userId = ? AND symbol = ? ORDER BY purchaseDate ASC",
      [userId, symbol]
    );
    return holdings.length ? holdings : null;
  },

  add: async ({
    userId,
    symbol,
    stockName,
    investmentAmt,
    purchasePrice,
    purchaseQty,
  }) => {
    await db.execute(
      "INSERT INTO stockholding (userId, symbol, stock_name, investment_amt, purchase_price, qty) VALUES(?,?,?,?,?,?)",
      [userId, symbol, stockName, investmentAmt, purchasePrice, purchaseQty]
    );
  },

  update: async (holdingId, updatedHoldingQty, updatedInvestedAmt) => {
    await db.execute(
      "UPDATE stockholding SET qty = ?, investment_amt = ? WHERE id = ?",
      [updatedHoldingQty, updatedInvestedAmt, holdingId]
    );
  },

  deleteByCode: async (userId, symbol) => {
    await db.execute(
      "DELETE FROM stockholding WHERE userId = ? AND symbol = ?",
      [userId, symbol]
    );
  },

  deleteById: async (holdingId) => {
    await db.execute("DELETE FROM stockholding WHERE id = ?", [holdingId]);
  },
};
