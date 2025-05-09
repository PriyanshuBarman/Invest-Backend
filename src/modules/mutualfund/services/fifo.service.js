import { holdingRepository } from "../repositories/holding.repository.js";

export const fifoRedemption = async (userId, fundCode, redemptionUnits) => {
console.log("♾️");

  const holdings = await holdingRepository.get(userId, fundCode);
console.log("♾️");


  let remainingUnits = redemptionUnits;
  let costBasis = 0;
  for (const holding of holdings) {
    if (remainingUnits === 0) break;

    const holdingUnits = parseFloat(holding.units);
    const holdingNav = parseFloat(holding.purchaseNav);

    if (remainingUnits >= holdingUnits) {
      costBasis += holding.amount;
      remainingUnits -= holdingUnits;
      
      console.log("♾️");
      await holdingRepository.deleteById(holding.id);
    } else {
      const reductionAmount = remainingUnits * holdingNav;
      
      const updatedHoldingUnits = holdingUnits - remainingUnits;
      const updatedHoldingAmt = holding.amount - reductionAmount;
      
      console.log("♾️");
      await holdingRepository.update(holding.id, updatedHoldingUnits, updatedHoldingAmt);
      console.log("♾️");

      costBasis += remainingUnits * holdingNav;
      remainingUnits = 0;
    }
  }
  return Math.round(costBasis);
};
