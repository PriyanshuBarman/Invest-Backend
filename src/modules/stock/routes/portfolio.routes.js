import { Router } from "express";
import { isAuthenticated } from "../../../middlewares/authMiddleware.js";
import { getPortfolio, getStock, getUserPortfolio } from "../controllers/portfolio.controller.js";
import { validateQuery } from "../validators/query.validator.js";

export const portfolioRoutes = Router();

portfolioRoutes.get("/", isAuthenticated, validateQuery, getPortfolio);
portfolioRoutes.get("/summary", isAuthenticated, getUserPortfolio);
portfolioRoutes.get("/:symbol?", isAuthenticated, getStock);
