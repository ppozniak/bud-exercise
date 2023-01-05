import * as Tabs from "@radix-ui/react-tabs";
import { Transaction } from "../../../types";
import { fetcher } from "../../utils/fetcher";
import "./index.css";
import useSWR from "swr";
import { isExpense, isIncome } from "./utils";
import { TransactionsTable } from "./list";
import { Loading } from "../loading";
import { ErrorMessage } from "../error-message";

export const TransactionHistory = () => {
  const { data, isLoading, error } = useSWR<Transaction[]>(
    "/api/transactions",
    fetcher,
    { shouldRetryOnError: false }
  );

  const expenses = data?.filter(isExpense) || [];
  const income = data?.filter(isIncome) || [];

  // @TODO: Ideally we would want to lazy fetch expenses/income based off which tab is active
  return (
    <div>
      <h2 className="align-left h2">Transaction History</h2>
      <Tabs.Root defaultValue="expenses" className="flow">
        <Tabs.List className="tabs__list" aria-label="Filter your transactions">
          <Tabs.Trigger value="expenses">Expenses</Tabs.Trigger>
          <Tabs.Trigger value="income">Income</Tabs.Trigger>
        </Tabs.List>

        {!!error && !isLoading && <ErrorMessage error={error} />}

        {!isLoading ? (
          <>
            <Tabs.Content className="TabsContent" value="expenses">
              <TransactionsTable transactions={expenses} label="Expenses" />
            </Tabs.Content>
            <Tabs.Content className="TabsContent" value="income">
              <TransactionsTable transactions={income} label="Income" />
            </Tabs.Content>
          </>
        ) : (
          <Loading />
        )}
      </Tabs.Root>
    </div>
  );
};
