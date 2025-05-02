import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import Home from "../../pages/Home";

//@ts-expect-error
function renderWithProvider(ui: JSX.Element) {
  return render(<Provider store={store}>{ui}</Provider>);
}

test("adiciona nova tarefa na lista", () => {
  renderWithProvider(<Home />);

  const input = screen.getByPlaceholderText("Digite uma tarefa");
  const button = screen.getByText("Adicionar");

  fireEvent.change(input, { target: { value: "Estudar Redux" } });
  fireEvent.click(button);

  expect(screen.getByText("Estudar Redux")).toBeInTheDocument();
});
