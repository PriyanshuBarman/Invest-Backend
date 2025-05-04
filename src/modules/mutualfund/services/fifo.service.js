import { holdingRepository } from "../repositories/holding.repository.js";

export const fifoRedemption = async (userId, fundCode, redemptionUnits) => {
  const holdings = await holdingRepository.get(userId, fundCode);

  let remainingUnits = redemptionUnits;
  let costBasis = 0;
  for (const holding of holdings) {
    if (remainingUnits === 0) break;

    const holdingUnits = parseFloat(holding.units);
    const holdingNav = parseFloat(holding.purchase_nav);

    if (remainingUnits >= holdingUnits) {
      costBasis += holding.amount;
      remainingUnits -= holdingUnits;
      await holdingRepository.deleteById(holding.id);
    } else {
      const reductionAmount = remainingUnits * holdingNav;

      const updatedHoldingUnits = holdingUnits - remainingUnits;
      const updatedHoldingAmt = holding.amount - reductionAmount;

      await holdingRepository.update(holding.id, updatedHoldingUnits, updatedHoldingAmt);

      costBasis += remainingUnits * holdingNav;
      remainingUnits = 0;
    }
  }
  return Math.round(costBasis);
};
