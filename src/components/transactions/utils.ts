import { Transaction } from "../../../types";

// @TODO: Move to global utils
export const isExpense = (transaction: Transaction) =>
  transaction.amount.value < 0;

export const isIncome = (transaction: Transaction) =>
  transaction.amount.value > 0;
