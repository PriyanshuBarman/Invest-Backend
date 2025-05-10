import "dotenv/config";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import { errorHandler } from "./src/middlewares/errorHandler.js";
import { notFoundHandler } from "./src/middlewares/notFoundHandler.js";
import { authRoutes } from "./src/modules/auth/routes/auth.routes.js";
import { mutualFundRoutes } from "./src/modules/mutualfund/routes/index.routes.js";
import { stockRoutes } from "./src/modules/stock/routes/index.routes.js";
import { userRoutes } from "./src/modules/user/routes/user.routes.js";
import { walletRoutes } from "./src/modules/wallet/routes/wallet.routes.js";

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/wallet", walletRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/mf", mutualFundRoutes);
app.use("/api/v1/stock", stockRoutes);

app.all("*", notFoundHandler);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
