import { apiError } from "../../../utils/apiError.js";

export const validateInvestment = (req, res, next) => {
  const { investmentAmt, fundCode, fundName, purchaseNav, fundType } = req.body;

  const requiredFields = {
    investmentAmt,
    fundCode,
    fundName,
    purchaseNav,
    fundType,
  };

  for (const [key, value] of Object.entries(requiredFields)) {
    if (!value) throw new apiError(400, `${key} required`);
  }

  if (!investmentAmt || isNaN(investmentAmt) || investmentAmt <= 0)
    throw new apiError(400, "Invalid investmentAmt");

  next();
};
