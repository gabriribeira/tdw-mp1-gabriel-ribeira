import React from "react";
import { render } from "@testing-library/react";
import Header from "../components/header";

test("Header component snapshot", () => {
  const { container } = render(<Header />);
  expect(container).toMatchSnapshot();
});
