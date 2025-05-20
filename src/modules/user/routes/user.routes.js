import { Router } from "express";
import { isAuthenticated } from "../../../middlewares/authMiddleware.js";
import { getUser } from "../controllers/user.controller.js";

export const userRoutes = Router();

userRoutes.get("/", isAuthenticated, getUser);
