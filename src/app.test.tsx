import { render, screen } from "@testing-library/react";
import App from "./app";

// @TODO: Fix annoying 'act' error
it.skip("App renders without crashing", () => {
  render(<App />);

  expect(true).toBeTruthy();

  expect(screen.getByText("Your accounts")).toBeInTheDocument();
});
