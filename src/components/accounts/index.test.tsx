import { render, screen, waitFor } from "@testing-library/react";
import { Accounts } from "./index";

describe("<Accounts />", () => {
  test("loading state", () => {
    render(<Accounts />);

    expect(screen.getByText("Getting your accounts")).toBeInTheDocument();

    waitFor(() => {
      expect(screen.getByText("Getting your accounts")).not.toBeInTheDocument();
    });
  });
});
