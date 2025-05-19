import { tnxRepo } from "../../../shared/repositories/tnx.repository.js";
import { walletRepo } from "../../../shared/repositories/wallet.repository.js";

export const fetchBalance = async (userId) => {
  return await walletRepo.check(userId);
};

export const depositBalance = async (userId, amount) => {
  await walletRepo.credit(userId, amount);
  await tnxRepo.create({
    userId,
    amount,
    tnxType: "DEPOSIT",
  });
};
