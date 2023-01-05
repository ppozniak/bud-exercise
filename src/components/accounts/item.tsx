import type { Account } from "../../../types";
import { formatCurrency } from "../../utils/currency";
import "./index.css";

type Props = {
  account: Account;
};

export const AccountItem = ({ account }: Props) => {
  const currency = account.balance.amount.currency;
  return (
    <li className="account">
      <div className="total">Total {currency}</div>
      <strong>{formatCurrency(account.balance.amount.value, currency)}</strong>
    </li>
  );
};
