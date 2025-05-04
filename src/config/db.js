import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

db.getConnection()
  .then((connection) => {
    console.log("✅ Connected to MySQL");
    connection.release();
  })
  .catch((error) => {
    console.error("❌Error connecting to MySQL:", error.message);
    process.exit(1);
  });
