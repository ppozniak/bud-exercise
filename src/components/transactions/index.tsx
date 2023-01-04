import * as Tabs from "@radix-ui/react-tabs";
import { Transaction } from "../../../types";
import { fetcher } from "../../utils/fetcher";
import "./index.css";
import useSWR from "swr";
import { isExpense, isIncome } from "./utils";
import TransactionsTable from "./list";

export const TransactionHistory = () => {
  const { data } = useSWR<Transaction[]>("/api/transactions", fetcher);

  const expenses = data?.filter(isExpense) || [];
  const income = data?.filter(isIncome) || [];

  return (
    <>
      <h1 className="align-left">Transaction History</h1>
      <Tabs.Root defaultValue="expenses" className="flow">
        <Tabs.List className="tabs__list" aria-label="Filter your transactions">
          <Tabs.Trigger value="expenses">Expenses</Tabs.Trigger>
          <Tabs.Trigger value="income">Income</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content className="TabsContent" value="expenses">
          <TransactionsTable transactions={expenses} label="Expenses" />
        </Tabs.Content>

        <Tabs.Content className="TabsContent" value="income">
          <TransactionsTable transactions={income} label="Income" />
        </Tabs.Content>
      </Tabs.Root>
    </>
  );
};
