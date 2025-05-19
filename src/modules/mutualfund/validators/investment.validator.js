import { ApiError } from "../../../utils/ApiError.utils.js";

export const validateInvestment = (req, res, next) => {
  const { investmentAmt, fundCode, fundName, purchaseNav, fundType } = req.body;

  const requiredFields = [
    "investmentAmt",
    "fundCode",
    "fundName",
    "purchaseNav",
    "fundType",
  ];

  for (const field of requiredFields) {
    if (!req.body[field] || req.body[field] == "") {
      throw new ApiError(400, `${field} is required`);
    }
  }

  if (!investmentAmt || isNaN(investmentAmt) || investmentAmt <= 0)
    throw new ApiError(400, "Invalid investmentAmt");

  next();
};
