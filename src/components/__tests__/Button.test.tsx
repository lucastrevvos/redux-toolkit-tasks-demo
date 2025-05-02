import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../Button";

test("renderiza botão com texto e dispara click", () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Clique aqui</Button>);

  const button = screen.getByText("Clique aqui");
  expect(button).toBeInTheDocument();

  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
