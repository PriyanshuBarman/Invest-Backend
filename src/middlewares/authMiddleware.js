import jwt from "jsonwebtoken";
import { apiError } from "../utils/apiError.js";

export const isAuthenticated = (req, res, next) => {
  const token = req.cookies.token;

  if (!token)
    throw new apiError(401, "Unauthorized! Please log in to get access.");

  try {
    const validUser = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: validUser.id };
    return next();
  } catch (error) {
    return next(new apiError(401, "Unauthorized: Invalid token"));
  }
};
