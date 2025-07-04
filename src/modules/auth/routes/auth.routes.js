import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";
import { googleAuth } from "../controllers/google.controller.js";
import { loginValidator, registerValidator } from "../validators/auth.validator.js";

export const authRoutes = Router();

authRoutes.post("/google", googleAuth);

authRoutes.post("/register", registerValidator, authController.register);
authRoutes.post("/login", loginValidator, authController.login);
authRoutes.get("/logout", authController.logout);
