import { Transaction } from "../../../../types";
import { TransactionRowItem } from "../item";

interface IProps {
  transactions: Transaction[];
  label: string;
}

export const TransactionsTable = ({ transactions, label }: IProps) => {
  if (!transactions.length) return null;
  
  return (
    <table className="transactions-table" aria-label={label}>
      <thead>
        <tr>
          <th>Description</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <TransactionRowItem transaction={transaction} key={transaction.id} />
        ))}
      </tbody>
    </table>
  );
};
