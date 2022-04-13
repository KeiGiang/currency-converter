import { render, screen } from "@testing-library/react";
import { withProvider } from "utils/test-utils";
import { ExchangeRate } from "../ExchangeRate";

test("renders title", () => {
  render(
    withProvider(<ExchangeRate />)
  );
  const linkElement = screen.getByText(/exchange rates/i);
  expect(linkElement).toBeInTheDocument();
});
