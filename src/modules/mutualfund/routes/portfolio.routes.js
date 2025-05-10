import { Router } from "express";
import { isAuthenticated } from "../../../middlewares/authMiddleware.js";

import {
  fetchFund,
  fetchOverallPortfolio,
  fetchPortfolio,
} from "../controllers/portfolio.controller.js";
import { validateQuery } from "../validators/query.validator.js";

export const portfolioRoutes = Router();

portfolioRoutes.get("/", isAuthenticated, validateQuery, fetchPortfolio);
portfolioRoutes.get("/overall", isAuthenticated, fetchOverallPortfolio);
portfolioRoutes.get("/:fundCode?", isAuthenticated, fetchFund);
