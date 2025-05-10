import { Router } from "express";
import {
  fetchFundTnx,
  fetchPortfolioTnx,
} from "../controllers/transaction.controller.js";
import { isAuthenticated } from "../../../middlewares/authMiddleware.js";

export const tnxRoutes = Router();

tnxRoutes.get("/", isAuthenticated, fetchPortfolioTnx);
tnxRoutes.get("/:fundCode", isAuthenticated, fetchFundTnx);
