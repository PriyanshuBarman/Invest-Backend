import { Router } from "express";
import { fetchFundTnx, fetchPortfolioTnx } from "../controllers/transaction.controller.js";
import { isAuthenticated } from "../../../middlewares/isAuthenticated.js";

export const tnxRoutes = Router();

tnxRoutes.get("/", isAuthenticated, fetchPortfolioTnx);
tnxRoutes.get("/:fund_code", isAuthenticated, fetchFundTnx);
