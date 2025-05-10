import { apiError } from "../../../utils/apiError.js";

export const registerValidator = (req, res, next) => {
  let { name, email, password } = req.body;

  name = name.trim();
  email = email.trim().toLowerCase();

  if (!name) throw new apiError(400, "Name required");
  if (!email) throw new apiError(400, "Email required");

  if (!password) throw new apiError(400, "Password required");

  if (password.includes(" "))
    throw new apiError(400, "Password should not contain spaces");

  req.body.name = name;
  req.body.email = email;
  req.body.password = password;

  next();
};

export const loginValidator = (req, res, next) => {
  let { email, password } = req.body;
  console.log(email, password);

  email = email.trim();
  email = email.trim().toLowerCase();

  if (!email) throw new apiError(400, "Email required");

  if (!password) throw new apiError(400, "Password required");

  if (password.includes(" "))
    throw new apiError(400, "Password should not contain spaces");

  req.body.email = email;
  req.body.password = password;

  next();
};
