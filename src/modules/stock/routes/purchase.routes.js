import { Router } from "express";
import { isAuthenticated } from "../../../middlewares/authMiddleware.js";
import { handlePurchase } from "../controllers/purchase.controller.js";

export const purchaseRoutes = Router();

purchaseRoutes.post("/", isAuthenticated, handlePurchase);
