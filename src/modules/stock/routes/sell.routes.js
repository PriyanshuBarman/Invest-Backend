import { Router } from "express";
import { isAuthenticated } from "../../../middlewares/authMiddleware.js";
import { handleSell, handleSellAllQty } from "../controllers/sell.controller.js";
import { validateSellAllQty, validateSellSomeQty } from "../validators/sell.validator.js";

export const sellRoutes = Router();

sellRoutes.put("/", isAuthenticated, validateSellSomeQty, handleSell);
sellRoutes.delete("/", isAuthenticated, validateSellAllQty, handleSellAllQty);
