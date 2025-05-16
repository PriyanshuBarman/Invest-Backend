import { ApiError } from "../../../utils/ApiError";

export const validatePurchase = (req, res, next) => {
  const { symbol, stockName, purchasePrice, purchaseQty } = req.body;

  const requiredFields = { symbol, stockName, purchasePrice, purchaseQty };

  for (const [key, value] of Object.entries(requiredFields)) {
    if (!value) throw new ApiError(400, `${key} required`);
  }

  if (isNaN(purchasePrice) || purchasePrice <= 0) throw new ApiError(400, "Invalid purchasePrice");

  if (isNaN(purchaseQty) || purchaseQty <= 0 || !Number.isInteger(purchaseQty))
    throw new ApiError(400, "Invalid purchaseQty");

  next();
};
