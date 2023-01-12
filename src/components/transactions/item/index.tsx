import type { Transaction } from "../../../../types";
import { formatCurrency } from "../../../utils/currency";
import { Avatar } from "../avatar";
import { capitalize } from "../../../utils/string";

type Props = {
  transaction: Transaction;
};

export const TransactionRowItem = ({ transaction }: Props) => {
  const currency = transaction.amount.currency_iso;
  // e.g 24 January 2022
  const category = capitalize(transaction.category).replace('_', ' ')
  const date = new Date(transaction.date).toLocaleDateString('en-gb', {
    day: '2-digit',
    year: "numeric",
    month: 'long'
  });

  return (
    <tr>
      <td>
        <div className="transaction-detail">
          <Avatar name={transaction.description} />
          <div className="transaction-description">
            {transaction.description}
            <div className="transaction-category">{category}</div>
          </div>
        </div>
      </td>
      <td>{date}</td>
      <td className="transaction-amount">
        {formatCurrency(transaction.amount.value, currency)}
      </td>
    </tr>
  );
};
