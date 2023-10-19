import { render, screen } from "@testing-library/react";
import Intro from "../components/intro";

test('Should have the word "Next.js" in the component', () => {
  render(<Intro />);
  const myElement = screen.getByText("Next.js");
  expect(myElement).toBeInTheDocument();
});