import { db } from "../../../config/db.js";
export const userRepository = {
  findByEmail: async (email) => {
    const [rows] = await db.execute("SELECT * FROM user WHERE email = ?", [
      email,
    ]);
    return rows[0] || null;
  },
  create: async ({ name, email, hashPassword = null, picture = null }) => {
    const [newUser] = await db.execute(
      "INSERT INTO user (name,email,password,avatar) VALUES (?,?,?,?)",
      [name, email, hashPassword, picture]
    );
    return newUser;
  },
  getAll: async () => {
    const [users] = await db.execute("SELECT * FROM user");
    return users;
  },
  findById: async (userId) => {
    const [user] = await db.execute("SELECT * FROM user WHERE id = ?", [
      userId,
    ]);
    return user[0];
  },
};


