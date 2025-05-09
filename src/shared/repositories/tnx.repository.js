import { db } from "../../config/db.js";

export const tnxRepository = {
  getAll: async (userId) => {
    const [tnx] = await db.execute(`SELECT * FROM transactions WHERE userId = ?`, [userId]);
    return tnx.length ? tnx : null;
  },

  getByCode: async (userId, code) => {
    const [tnx] = await db.execute(`SELECT * FROM transactions WHERE userId = ? AND code = ?`, [
      userId,
      code,
    ]);
    return tnx.length ? tnx : null;
  },

  getByPortfolio: async ({ userId, portfolioType }) => {
    const [tnx] = await db.execute(`SELECT * FROM transactions WHERE userId = ? AND asset =  ?`, [
      userId,
      portfolioType,
    ]);
    return tnx.length ? tnx : null;
  },

  purchase: async ({ asset, userId, tnxAmount, code, name, purchasePrice, purchaseQty }) => {
    await db.execute(
      `INSERT INTO transactions (asset, userId, tnxAmount, code, name, price, qty, tnxType) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [asset, userId, tnxAmount, code, name, purchasePrice, purchaseQty, "INVEST"]
    );
  },

  sell: async ({ asset, userId, tnxAmount, code, name, sellPrice, sellQty }) => {
    await db.execute(
      `INSERT INTO transactions (asset, userId, tnxAmount, code, name, price, qty, tnxType) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [asset, userId, tnxAmount, code, name, sellPrice, sellQty, "REDEEM"]
    );
  },

  deposit: async (userId, tnxAmount) => {
    await db.execute(`INSERT INTO transactions (userId, tnxAmount, tnxType) VALUES (?, ?, ?)`, [
      userId,
      tnxAmount,
      "DEPOSIT",
    ]);
  },
};
