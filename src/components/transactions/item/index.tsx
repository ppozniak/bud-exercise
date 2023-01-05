import type { Transaction } from "../../../../types";
import { formatCurrency } from "../../../utils/currency";
import { Avatar } from "../avatar";
import { format } from "date-fns";

type Props = {
  transaction: Transaction;
};

export const TransactionRowItem = ({ transaction }: Props) => {
  const currency = transaction.amount.currency_iso;
  const date = new Date(transaction.date);
  return (
    <tr>
      <td>
        <div className="transaction-detail">
          <Avatar name={transaction.description} />
          <div className="transaction-description">
            {transaction.description}
            <div className="transaction-category">{transaction.category}</div>
          </div>
        </div>
      </td>
      <td>
        <div>{format(date, "dd MMMM y")}</div>
      </td>
      <td className="transaction-amount">
        <div className="amount">
          {formatCurrency(transaction.amount.value, currency)}
        </div>
      </td>
    </tr>
  );
};
