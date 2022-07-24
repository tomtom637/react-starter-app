import { beforeEach, describe, expect } from "vitest";
import { render, screen, waitForElementToBeRemoved, fireEvent, waitFor } from "../../utils/test-utils";
import "@testing-library/jest-dom";
import People from "./People";
import { peopleData } from "../../mocks/handlers";

describe("People", () => {

  it("default", () => {
    expect(true).toBe(true);
  });

  beforeEach(() => {
    render(<People />);
  });

  it("should show 3 persons", async () => {
    await waitForElementToBeRemoved(() => screen.queryByText(/loading.../i));
    const people = screen.getAllByTestId("person-item");
    expect(people.length).toBe(3);
  });
});
