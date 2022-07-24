import { beforeEach, describe, expect } from "vitest";
import { render, screen, waitForElementToBeRemoved, fireEvent, waitFor } from "../../utils/test-utils";
import "@testing-library/jest-dom";
import Home from "./Home";
import { peopleData } from "../../mocks/handlers";

// HELPER FUNCTIONS
const fillTheFields = (name, eyes) => {
  const nameInput = screen.getByPlaceholderText(/enter a name/i);
  const eyeInput = screen.getByPlaceholderText(/enter an eye color/i);
  fireEvent.change(nameInput, { target: { value: name } });
  fireEvent.change(eyeInput, { target: { value: eyes } });
};

const submitTheForm = () => {
  const submitButton = screen.getByText(/add new person/i);
  fireEvent.submit(submitButton);
};

// TEST SUITE
describe("Home Add a person", () => {

  beforeEach(() => {
    render(<Home />);
  });

  it("should be able to add and remove a person", async () => {
    // add robert
    await waitForElementToBeRemoved(() => screen.getByText(/loading.../i));
    fillTheFields("robert", "blue");
    submitTheForm();
    const robert = await screen.findByText(/robert has blue eyes/i);
    expect(robert).toBeInTheDocument();

    // remove robert
    const deleteButtons = screen.getAllByText(/delete/i);
    fireEvent.click(deleteButtons[0]);
    await waitForElementToBeRemoved(robert);
    expect(screen.queryByText(/robert has blue eyes/i)).toBeNull();
  });
});
