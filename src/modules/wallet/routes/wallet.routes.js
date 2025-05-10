import { Router } from "express";
import { checkBalance, deposit } from "../controllers/wallet.controller.js";
import { isAuthenticated } from "../../../middlewares/authMiddleware.js";
import { fetchAllTransactions } from "../controllers/transaction.controller.js";

export const walletRoutes = Router();

walletRoutes.get("/balance", isAuthenticated, checkBalance);
walletRoutes.put("/deposit", isAuthenticated, deposit);
walletRoutes.get("/tnx", isAuthenticated, fetchAllTransactions);
