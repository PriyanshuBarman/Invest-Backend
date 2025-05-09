export const validateQuery = (req, res, next) => {
  const { sort_by, order_by, fundType } = req.query;

  const validSortOptions = ["investment", "mv", "pnl", "roi"];
  const validOrderOptions = ["asc", "desc"];
  const validFundTypes = ["equity", "debt", "hybrid", "other"];

  if (sort_by && !validSortOptions.includes(sort_by)) {
    return res.status(400).json({ success: false, message: "Invalid sort_by value", validSortOptions });
  }
  if (order_by && !validOrderOptions.includes(order_by)) {
    return res.status(400).json({ success: false, message: "Invalid order_by value", validOrderOptions });
  }
  if (fundType && !validFundTypes.includes(fundType)) {
    return res.status(400).json({ success: false, message: "Invalid fundType value", validFundTypes });
  }

  next();
};
