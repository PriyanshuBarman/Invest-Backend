export const validatePurchase = (req, res, next) => {
  const { symbol, stockName, purchasePrice, purchaseQty } = req.body;

  const requiredFields = { symbol, stockName, purchasePrice, purchaseQty };
  for (const [key, value] of Object.entries(requiredFields)) {
    if (!value) {
      return res.status(400).json({ success: false, message: `${key} required` });
    }
  }

  if (isNaN(purchasePrice) || purchasePrice <= 0) {
    return res.status(400).json({ success: false, message: "Invalid purchase price" });
  }
  if (isNaN(purchaseQty) || purchaseQty <= 0 || !Number.isInteger(purchaseQty)) {
    return res.status(400).json({ success: false, message: "Invalid purchase qty" });
  }

  next();
};
