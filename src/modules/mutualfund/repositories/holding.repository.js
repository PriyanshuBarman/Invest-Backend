import { db } from "../../../config/db.js";

export const holdingRepository = {
  get: async (userId, fundCode) => {
    const [holdings] = await db.execute(
      "SELECT * FROM mf_holdings WHERE user_id = ? AND fund_code = ? ORDER BY purchase_date ASC",
      [userId, fundCode]
    );
    return holdings.length ? holdings : null;
  },

  add: async ({ userId, fundCode, fundName, investmentAmt, purchaseNav, purchaseUnits }) => {
    await db.execute(
      "INSERT INTO mf_holdings (user_id, fund_code, fund_name, amount, purchase_nav, units) VALUES(?,?,?,?,?,?)",
      [userId, fundCode, fundName, investmentAmt, purchaseNav, purchaseUnits]
    );
  },

  update: async (holdingId, updatedHoldingUnits, updatedHoldingAmt) => {
    await db.execute("UPDATE mf_holdings SET units = ?, amount = ? WHERE id = ?", [
      updatedHoldingUnits,
      updatedHoldingAmt,
      holdingId,
    ]);
  },

  deleteByCode: async (userId, fundCode) => {
    await db.execute("DELETE FROM mf_holdings WHERE user_id = ? AND fund_code = ?", [userId, fundCode]);
  },

  deleteById: async (holdingId) => {
    await db.execute("DELETE FROM mf_holdings WHERE id = ?", [holdingId]);
  },
};
