import { Router } from "express";
import { investmentRoutes } from "./investment.routes.js";
import { redemptionRoutes } from "./redemption.routes.js";
import { tnxRoutes } from "./tnx.routes.js";
import { portfolioRoutes } from "./portfolio.routes.js";

export const mutualFundRoutes = Router();

mutualFundRoutes.use("/invest", investmentRoutes);
mutualFundRoutes.use("/redeem", redemptionRoutes);
mutualFundRoutes.use("/tnx", tnxRoutes);
mutualFundRoutes.use("/portfolio", portfolioRoutes);
