import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "../../test-utils";
import { rest } from "msw";
import { server } from "../../../jest.setup";
import { Accounts } from "./index";

describe("<Accounts />", () => {
  test("loading state", async () => {
    render(<Accounts />);

    expect(screen.getByText("Getting your accounts")).toBeInTheDocument();

    await waitForElementToBeRemoved(screen.getByText("Getting your accounts"));
  });

  test("error state", async () => {
    server.use(
      rest.get("/api/accounts", (req, res, ctx) =>
        res(ctx.status(500), ctx.json([]))
      )
    );

    render(<Accounts />);

    await waitFor(() => {
      expect(
        screen.getByText("Request failed with status code 500")
      ).toBeInTheDocument();
    });
  });
});
