import { Router } from "express";
import { isAuthenticated } from "../../../middlewares/authMiddleware.js";
import {
  handleFullRedeem,
  handleRedeem,
} from "../controllers/redemption.controller.js";
export const redemptionRoutes = Router();

redemptionRoutes.put("/:fundCode?", isAuthenticated, handleRedeem);
redemptionRoutes.delete("/:fundCode?", isAuthenticated, handleFullRedeem);
