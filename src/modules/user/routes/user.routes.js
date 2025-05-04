import { Router } from "express";
import { isAuthenticated } from "../../../middlewares/isAuthenticated.js";
import { getUser } from "../controllers/user.controller.js";

export const userRoutes = Router();

// userRoutes.get("/user",isAuthenticated, getAllUser);

userRoutes.get("/",isAuthenticated, getUser);
