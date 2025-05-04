export const validateInvestment = (req, res, next) => {
  const { investmentAmt, fundCode, fundName, purchaseNav, fundType } = req.body;

  const requiredFields = { investmentAmt, fundCode, fundName, purchaseNav, fundType };
  for (const [key, value] of Object.entries(requiredFields)) {
    if (!value) {
      return res.status(400).json({ success: false, message: `${key} required` });
    }
  }
  if (!investmentAmt || isNaN(investmentAmt) || investmentAmt <= 0) {
    return res.status(400).json({ success: false, message: "Invalid deposit investmentAmt" });
  }
  next();
};
