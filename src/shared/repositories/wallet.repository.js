import { db } from "../../config/db.js";

export const walletRepository = {
  check: async (userId) => {
    console.log("walletrepo",userId)
    const [user] = await db.execute("SELECT balance FROM users WHERE id = ?", [
      userId,
    ]);
    console.log("end")
    return user.length ? user[0].balance : null;
  },

  credit: async (userId, amount) => {
    amount = Math.abs(amount);
    await db.execute("UPDATE users SET balance = balance + ? WHERE id = ?", [
      amount,
      userId,
    ]);
  },
  
  debit: async (userId, amount) => {
    amount = Math.abs(amount);
    await db.execute("UPDATE users SET balance = balance - ? WHERE id = ?", [
      amount,
      userId,
    ]);
  },
};
