import { Router } from "express";
import { isAuthenticated } from "../../../middlewares/authMiddleware.js";
import { getFundTnx, getPortfolioTnx } from "../controllers/transaction.controller.js";

export const tnxRoutes = Router();

tnxRoutes.get("/", isAuthenticated, getPortfolioTnx);
tnxRoutes.get("/:fundCode", isAuthenticated, getFundTnx);
