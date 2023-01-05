import type { Transaction } from "../../../../types";
import { formatCurrency } from "../../../utils/currency";
import { Avatar } from "../avatar";
import { format } from "date-fns";
import { capitalize, replace } from "lodash";

type Props = {
  transaction: Transaction;
};

export const TransactionRowItem = ({ transaction }: Props) => {
  const currency = transaction.amount.currency_iso;
  const date = new Date(transaction.date);
  const category = replace(capitalize(transaction.category), "_", " ");
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
      <td>{format(date, "dd MMMM y")}</td>
      <td className="transaction-amount">
        {formatCurrency(transaction.amount.value, currency)}
      </td>
    </tr>
  );
};
