import { rest } from "msw";
import userEvent from "@testing-library/user-event";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "../../test-utils";
import { server } from "../../../jest.setup";
import { TransactionHistory } from ".";

describe("<TransactionHistory />", () => {
  test("loading state", async () => {
    render(<TransactionHistory />);

    const loadingText = screen.getByText("Loading...");
    expect(loadingText).toBeInTheDocument();

    await waitForElementToBeRemoved(loadingText);
  });

  test("error state", async () => {
    render(<TransactionHistory />);

    server.use(
      rest.get("/api/transactions", (req, res, ctx) =>
        res(ctx.status(500), ctx.json([]))
      )
    );

    await waitFor(() => {
      expect(
        screen.getByText("Request failed with status code 500")
      ).toBeInTheDocument();
    });
  });

  test("the expenses tab should be shown by default", () => {
    render(<TransactionHistory />);

    expect(screen.getByText("Transaction History")).toBeInTheDocument();

    const expensesTabTrigger = screen.getByRole("tab", {
      name: "Expenses",
    });

    expect(expensesTabTrigger).toHaveAttribute("data-state", "active");
  });

  test("changing between the expenses and income tabs should show different transactions", async () => {
    const user = userEvent.setup();

    render(<TransactionHistory />);

    const expensesTabTrigger = screen.getByRole("tab", {
      name: "Expenses",
    });
    const incomeTabTrigger = screen.getByRole("tab", {
      name: "Income",
    });

    const expensesTable = await screen.findByRole("table", {
      name: "Expenses",
    });
    const incomeTable = screen.queryByRole("table", {
      name: "Income",
    });

    expect(expensesTable).toBeInTheDocument();
    expect(incomeTable).not.toBeInTheDocument();

    await user.click(incomeTabTrigger);

    expect(incomeTabTrigger).toHaveAttribute("data-state", "active");
    expect(expensesTabTrigger).toHaveAttribute("data-state", "inactive");
  });
});
