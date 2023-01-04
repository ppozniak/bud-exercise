import { AccountItem } from "./item";
import useSWR from "swr";

import { fetcher } from "../../utils/fetcher";
import { Account } from "../../../types";
import "./index.css";

export const Accounts = () => {
  const { data } = useSWR<Account[]>("/api/accounts", fetcher);

  return (
    <>
      <h1 className="align-left">Your accounts</h1>
      <div className="accounts">
        {/* @TODO: Probably should be a list of items */}
        {data?.map((account) => (
          <AccountItem account={account} key={account.account_id} />
        ))}
      </div>
    </>
  );
};
