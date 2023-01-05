import { render, screen, waitFor } from "../../test-utils";
import { rest } from "msw";
import { TransactionHistory } from ".";
import { server } from "../../../jest.setup";

describe("<TransactionHistory />", () => {
  test("loading state", () => {
    render(<TransactionHistory />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    waitFor(() => {
      expect(screen.getByText("Loading...")).not.toBeInTheDocument();
    });
  });

  test("error state", () => {
    render(<TransactionHistory />);

    server.use(
      rest.get("/api/transactions", (req, res, ctx) =>
        res(ctx.status(500), ctx.json([]))
      )
    );

    waitFor(() => {
      expect(screen.getByText("Internal error")).toBeInTheDocument();
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

  test.skip("changing between the expenses and income tabs should show different transactions", () => {
    render(<TransactionHistory />);

    const expensesTabTrigger = screen.getByRole("tab", {
      name: "Expenses",
    });
    const incomeTabTrigger = screen.getByRole("tab", {
      name: "Income",
    });
    const expensesTable = screen.getByRole("table", {
      name: "Expenses",
    });
    const incomeTable = screen.queryByRole("table", {
      name: "Income",
    });

    expect(expensesTable).toBeInTheDocument();
    expect(incomeTable).not.toBeInTheDocument();

    expect(screen.getByText("-20.25")).toBeInTheDocument();

    incomeTabTrigger.click();

    expect(incomeTabTrigger).toHaveAttribute("data-state", "active");
    expect(expensesTabTrigger).toHaveAttribute("data-state", "inactive");
    expect(screen.queryByText("-20.25")).not.toBeInTheDocument();
  });
});
