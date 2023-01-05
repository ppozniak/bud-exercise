import { render, screen } from "./test-utils";
import App from "./app";

describe("<App />", () => {
  it("App renders without crashing", () => {
    render(<App />);

    expect(screen.getByText("Your accounts")).toBeInTheDocument();
  });
});
