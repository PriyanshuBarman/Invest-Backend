import { Router } from "express";
import { isAuthenticated } from "../../../middlewares/authMiddleware.js";
import { getAllTnx } from "../controllers/transaction.controller.js";

export const tnxRoutes = Router();

tnxRoutes.get("/", isAuthenticated, getAllTnx);
