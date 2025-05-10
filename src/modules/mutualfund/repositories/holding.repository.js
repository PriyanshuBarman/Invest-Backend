import { db } from "../../../config/db.js";

export const holdingRepository = {
  get: async (userId, fundCode) => {
    const [holdings] = await db.execute(
      "SELECT * FROM mfholdings WHERE userId = ? AND fundCode = ? ORDER BY purchaseDate ASC",
      [userId, fundCode]
    );
    return holdings.length ? holdings : null;
  },

  add: async ({
    userId,
    fundCode,
    fundName,
    investmentAmt,
    purchaseNav,
    purchaseUnits,
  }) => {
    await db.execute(
      "INSERT INTO mfholdings (userId, fundCode, fundName, amount, purchaseNav, units) VALUES(?,?,?,?,?,?)",
      [userId, fundCode, fundName, investmentAmt, purchaseNav, purchaseUnits]
    );
  },

  update: async (holdingId, updatedHoldingUnits, updatedHoldingAmt) => {
    await db.execute(
      "UPDATE mfholdings SET units = ?, amount = ? WHERE id = ?",
      [updatedHoldingUnits, updatedHoldingAmt, holdingId]
    );
  },

  deleteByCode: async (userId, fundCode) => {
    await db.execute(
      "DELETE FROM mfholdings WHERE userId = ? AND fundCode = ?",
      [userId, fundCode]
    );
  },

  deleteById: async (holdingId) => {
    await db.execute("DELETE FROM mfholdings WHERE id = ?", [holdingId]);
  },
};
