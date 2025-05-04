import { db } from "../../../config/db.js";
export const userRepository = {
  findByEmail: async (email) => {
    const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
    return rows[0] || null;
  },
  create: async ({name, email, hashPassword = null , picture = null}) => {
    const [newUser] = await db.execute("INSERT INTO users (name,email,password,avatar) VALUES (?,?,?,?)", [
      name,
      email,
      hashPassword,
      picture
    ]);
    return newUser;
  },
  getAll: async () => {
    const [users] = await db.execute("SELECT * FROM users");
    return users;
  },
  findById: async (user_id) => {
    const [user] = await db.execute("SELECT * FROM users WHERE id = ?", [user_id]);
    return user[0];
  },
};

// const { password, ...userWithoutPassword } = user[0];
// return userWithoutPassword;
