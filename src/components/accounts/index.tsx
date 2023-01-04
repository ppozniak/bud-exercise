import { AccountItem } from "./item";
import useSWR from "swr";

import { fetcher } from "../../utils/fetcher";
import { Account } from "../../../types";
import "./index.css";
import { Loading } from "../loading";

export const Accounts = () => {
  const { data, isLoading } = useSWR<Account[]>("/api/accounts", fetcher);

  return (
    <>
      <h1 className="align-left">Your accounts</h1>

      {!isLoading ? (
        <ul className="accounts">
          {data?.map((account) => (
            <AccountItem account={account} key={account.account_id} />
          ))}
        </ul>
      ) : (
        <Loading message="Getting your accounts" />
      )}
    </>
  );
};
