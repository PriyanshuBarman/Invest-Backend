import { Router } from "express";
import { isAuthenticated } from "../../../middlewares/authMiddleware.js";
import { handleFullRedeem, handlePartialRedeem } from "../controllers/redemption.controller.js";
import {
  validateFullRedemption,
  validatePartialRedemption,
} from "../validators/redemption.validator.js";
export const redemptionRoutes = Router();

redemptionRoutes.delete("/:fundCode?", isAuthenticated, validateFullRedemption, handleFullRedeem);

redemptionRoutes.put(
  "/:fundCode?",
  isAuthenticated,
  validatePartialRedemption,
  handlePartialRedeem
);
