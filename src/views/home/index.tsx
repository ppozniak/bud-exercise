import { Accounts } from "../../components/accounts";
import { TransactionHistory } from "../../components/transactions";

export const Home = () => (
  <div className="flow-xxl page">
    <Accounts />
    <TransactionHistory />
  </div>
);
