import { Router } from "express";
import { isAuthenticated } from "../../../middlewares/authMiddleware.js";
import {
  handleSell,
  handleSellAllQty,
} from "../controllers/sell.controller.js";
export const sellRoutes = Router();

sellRoutes.put("/:symbol?", isAuthenticated, handleSell);
sellRoutes.delete("/:symbol?", isAuthenticated, handleSellAllQty);
