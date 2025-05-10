import { db } from "../../../config/db.js";

export const portfolioRepository = {
  getAll: async ({ userId, sort_by = "mv", order_by = "DESC", fundType }) => {
    const condition = fundType ? "AND fundType = ?" : "";
    const query = `SELECT * FROM mfportfolio WHERE userId = ? ${condition} ORDER BY ${sort_by} ${order_by}`;

    const params = fundType ? [userId, fundType] : [userId];

    const [portfolio] = await db.execute(query, params);
    return portfolio.length ? portfolio : null;
  },

  getFund: async (userId, fundCode) => {
    const [portfolio] = await db.execute(
      "SELECT * FROM mfportfolio WHERE  userId = ? AND fundCode = ?",
      [userId, fundCode]
    );
    return portfolio[0] || null;
  },

  createFund: async ({
    userId,
    investmentAmt,
    fundCode,
    fundName,
    purchaseNav,
    fundType,
    purchaseUnits,
  }) => {
    await db.execute(
      "INSERT INTO mfportfolio (userId, fundCode, fundName, fundType, mv, availableUnits, investedAmt, latestNav) VALUES(?,?,?,?,?,?,?,?)",
      [
        userId,
        fundCode,
        fundName,
        fundType,
        investmentAmt,
        purchaseUnits,
        investmentAmt,
        purchaseNav,
      ]
    );
  },

  updateFund: async ({
    updatedInvestedAmt,
    updatedMv,
    updatedUnits,
    updatedRoi,
    userId,
    fundCode,
  }) => {
    await db.execute(
      "UPDATE mfportfolio SET investedAmt = ?, mv = ?, availableUnits = ?, roi = ? WHERE userId = ? AND fundCode = ?",
      [
        updatedInvestedAmt,
        updatedMv,
        updatedUnits,
        updatedRoi,
        userId,
        fundCode,
      ]
    );
  },

  deleteFund: async (userId, fundCode) => {
    await db.execute(
      "DELETE FROM mfportfolio WHERE userId = ? AND fundCode = ?",
      [userId, fundCode]
    );
  },
};
