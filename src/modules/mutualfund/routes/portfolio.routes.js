import { Router } from "express";
import { isAuthenticated } from "../../../middlewares/authMiddleware.js";
import { getFund, getPortfolio, getPortfolioSummary } from "../controllers/portfolio.controller.js";
import { validateQuery } from "../validators/query.validator.js";

export const portfolioRoutes = Router();

portfolioRoutes.get("/summary", isAuthenticated, getPortfolioSummary);

portfolioRoutes.get("/", isAuthenticated, validateQuery, getPortfolio);

portfolioRoutes.get("/:fundCode?", isAuthenticated, getFund);
