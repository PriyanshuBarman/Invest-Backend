import { Router } from "express";
import { login, logout, register } from "../controllers/auth.controller.js";
import { signinWithGoogle } from "../controllers/google.controller.js";
import { loginValidator, registerValidator } from "../validators/auth.validator.js";

export const authRoutes = Router();

authRoutes.post("/google", signinWithGoogle);

authRoutes.post("/register", registerValidator, register);
authRoutes.post("/login", loginValidator, login);
authRoutes.get("/logout", logout);
