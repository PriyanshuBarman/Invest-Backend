import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import { authRoutes } from "./src/modules/auth/routes/auth.routes.js";

import { userRoutes } from "./src/modules/user/routes/user.routes.js";
import { walletRoutes } from "./src/modules/wallet/routes/wallet.routes.js";
import { mutualFundRoutes } from "./src/modules/mutualfund/routes/index.routes.js";
import { stockRoutes } from "./src/modules/stock/routes/index.routes.js";
import axios from "axios";

const app = express();

const allowedOrigins = ["https://www.amfiindia.com/", process.env.FRONTEND_URL];
// app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/wallet", walletRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/mf", mutualFundRoutes);
app.use("/api/v1/stock", stockRoutes);

app.get("/api/nfo", async (req, res) => {
  try {
    const response = await axios.get("https://www.amfiindia.com/new-fund-offer");
    console.log(response);
    res.send(response.data); // Send the HTML content back to your React app
  } catch (error) {
    console.error("Error fetching from AMFI India:", error);
    res.status(500).send("Error fetching data");
  }
});

app.get("/greet", (req, res) => {
  return res.status(200).json({ message: "Hello World" });
});

app.all("*", (req, res, next) => {
  // return res.status(404).json({ statusCode: 404, message: `Can't find ${req.originalUrl} on this server!` });
  const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  err.statusCode = 390;
  next(err);
});

app.use((error, req, res, next) => {
  let statusCode = error.statusCode || 500;
  return res.status(statusCode).json({ success: false, message: error.message });
});

app.listen(process.env.PORT, () => {
  console.log("Running");
});
