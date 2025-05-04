import { db } from "../../config/db.js";

export const tnxRepository = {
  getAll: async (userId) => {
    const [tnx] = await db.execute(`SELECT * FROM transactions WHERE user_id = ?`, [userId]);
    return tnx.length ? tnx : null;
  },

  getByCode: async (userId, code) => {
    const [tnx] = await db.execute(`SELECT * FROM transactions WHERE user_id = ? AND code = ?`, [
      userId,
      code,
    ]);
    return tnx.length ? tnx : null;
  },

  getByPortfolio: async ({ userId, portfolioType }) => {
    const [tnx] = await db.execute(`SELECT * FROM transactions WHERE user_id = ? AND asset =  ?`, [
      userId,
      portfolioType,
    ]);
    return tnx.length ? tnx : null;
  },

  purchase: async ({ asset, userId, tnxAmount, code, name, purchasePrice, purchaseQty }) => {
    await db.execute(
      `INSERT INTO transactions (asset, user_id, tnx_amount, code, name, price, qty, tnx_type) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [asset, userId, tnxAmount, code, name, purchasePrice, purchaseQty, "INVEST"]
    );
  },

  sell: async ({ asset, userId, tnxAmount, code, name, sellPrice, sellQty }) => {
    await db.execute(
      `INSERT INTO transactions (asset, user_id, tnx_amount, code, name, price, qty, tnx_type) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [asset, userId, tnxAmount, code, name, sellPrice, sellQty, "REDEEM"]
    );
  },

  deposit: async (userId, tnxAmount) => {
    await db.execute(`INSERT INTO transactions (user_id, tnx_amount, tnx_type) VALUES (?, ?, ?)`, [
      userId,
      tnxAmount,
      "DEPOSIT",
    ]);
  },
};
