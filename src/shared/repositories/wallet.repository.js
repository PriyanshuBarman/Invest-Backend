import { db } from "../../config/db.js";

export const walletRepository = {
  check: async (userId) => {
    const [user] = await db.execute("SELECT balance FROM user WHERE id = ?", [
      userId,
    ]);
    return user.length ? user[0].balance : null;
  },

  credit: async (userId, amount) => {
    amount = Math.abs(amount);
    await db.execute("UPDATE user SET balance = balance + ? WHERE id = ?", [
      amount,
      userId,
    ]);
  },

  debit: async (userId, amount) => {
    amount = Math.abs(amount);
    await db.execute("UPDATE user SET balance = balance - ? WHERE id = ?", [
      amount,
      userId,
    ]);
  },
};
