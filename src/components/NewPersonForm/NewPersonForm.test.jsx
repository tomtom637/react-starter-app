import { beforeEach, describe, expect } from "vitest";
import { render, screen, fireEvent } from "../../utils/test-utils";
import "@testing-library/jest-dom";
import NewPersonForm from "./NewPersonForm";

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
describe("NewPersonForm", () => {

  beforeEach(() => {
    render(<NewPersonForm />);
  });

  it("should show the placeholder in both the name and the eye input", () => {
    const nameInput = screen.getByPlaceholderText(/enter a name/i);
    const eyeInput = screen.getByPlaceholderText(/enter an eye color/i);
    expect(nameInput).toBeInTheDocument();
    expect(eyeInput).toBeInTheDocument();
  });

  it("should show the error message if one of name or eye input or both are empty", () => {
    fillTheFields("", "");
    submitTheForm();
    const errorMessage = screen.getByText(/please fill in all fields/i);
    expect(errorMessage).toBeInTheDocument();

    fillTheFields("", "blue");
    submitTheForm();
    expect(errorMessage).toBeInTheDocument();

    fillTheFields("John", "");
    submitTheForm();
    expect(errorMessage).toBeInTheDocument();
  });

  it("should reset the inputs when the form is correctly submitted", async () => {
    const nameInput = screen.getByPlaceholderText(/enter a name/i);
    const eyeInput = screen.getByPlaceholderText(/enter an eye color/i);
    fillTheFields("robert", "blue");
    submitTheForm();
    expect(nameInput.value).toBe("");
    expect(eyeInput.value).toBe("");
  });
});
