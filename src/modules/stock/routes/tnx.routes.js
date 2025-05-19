import { Router } from "express";
import { getStockTnx, getPortfolioTnx } from "../controllers/transaction.controller.js";
import { isAuthenticated } from "../../../middlewares/authMiddleware.js";

export const tnxRoutes = Router();

tnxRoutes.get("/", isAuthenticated, getPortfolioTnx);
tnxRoutes.get("/:symbol", isAuthenticated, getStockTnx);
