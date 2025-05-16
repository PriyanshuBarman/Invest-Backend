import { Router } from "express";
import { isAuthenticated } from "../../../middlewares/authMiddleware.js";
import { getBalance, deposit } from "../controllers/wallet.controller.js";

export const balanceRoutes = Router();

balanceRoutes.get("/balance", isAuthenticated, getBalance);
balanceRoutes.put("/deposit", isAuthenticated, deposit);
