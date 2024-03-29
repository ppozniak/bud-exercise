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
    <div>
      <h2 className="align-left h2">Your accounts</h2>

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
    </div>
  );
};
