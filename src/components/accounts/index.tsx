import { AccountItem } from "./item";
import useSWR from "swr";

import { fetcher } from "../../utils/fetcher";
import { Account } from "../../../types";
import "./index.css";
import { Loading } from "../loading";
import { ErrorMessage } from "../error-message";

export const Accounts = () => {
  const { data, isLoading, error } = useSWR<Account[]>(
    "/api/accounts",
    fetcher,
    {
      shouldRetryOnError: false,
    }
  );

  return (
    <>
      <h1 className="align-left">Your accounts</h1>

      {!!error && !isLoading && <ErrorMessage error={error} />}

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
