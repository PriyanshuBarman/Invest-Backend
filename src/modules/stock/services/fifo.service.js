import { holdingRepository } from "../repositories/holding.repository.js";

export const fifoRedemption = async (userId, symbol, sellQty) => {
  const holdings = await holdingRepository.get(userId, symbol);

  let remainingUnits = sellQty;
  let costBasis = 0;

  for (const holding of holdings) {
    if (remainingUnits === 0) break;

    const holdingUnits = parseFloat(holding.units);
    const holdingQty = parseFloat(holding.purchase_price);

    if (remainingUnits >= holdingUnits) {
      costBasis += holding.amount;
      remainingUnits -= holdingUnits;
      await holdingRepository.deleteById(holding.id);
    } else {
      const reductionAmount = remainingUnits * holdingQty;

      const updatedHoldingQty = holdingUnits - remainingUnits;
      const updatedInvestedAmt = holding.amount - reductionAmount;
      await holdingRepository.update(holding.id, updatedHoldingQty, updatedInvestedAmt);

      costBasis += remainingUnits * holdingQty;
      remainingUnits = 0;
    }
  }

  return Math.round(costBasis);
};
