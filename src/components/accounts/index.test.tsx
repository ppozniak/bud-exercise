import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { server } from "../../../jest.setup";
import { Accounts } from "./index";

describe("<Accounts />", () => {
  test("loading state", () => {
    render(<Accounts />);

    expect(screen.getByText("Getting your accounts")).toBeInTheDocument();

    waitFor(() => {
      expect(screen.getByText("Getting your accounts")).not.toBeInTheDocument();
    });
  });

  test("error state", () => {
    render(<Accounts />);

    server.use(
      rest.get("/api/transactions", (req, res, ctx) =>
        res(ctx.status(500), ctx.json([]))
      )
    );

    waitFor(() => {
      expect(screen.getByText("Internal error")).toBeInTheDocument();
    });
  });
});
