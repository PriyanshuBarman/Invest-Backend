import jwt from "jsonwebtoken";
export const isAuthenticated = (req, res, next) => {
  const token = req.cookies.token;

  if (!token)
    return res.status(401).json({ success: false, message: "Unauthorized" });

  try {
    const validUser = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: validUser.id };
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};
