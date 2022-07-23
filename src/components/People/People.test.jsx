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

  it("should show at least one person", async () => {
    await waitForElementToBeRemoved(() => screen.queryByText(/loading.../i));
    const people = screen.getAllByTestId("person-item");
    expect(people.length).toBeGreaterThan(0);
  });

  // it("should show at least one person", async () => {
  //   await waitFor(() => {
  //     const people = screen.getAllByTestId("person-item");
  //     expect(people.length).toBeGreaterThan(0);
  //   }, { timeout: 3000 });
  // });

  //   it("should show more than 0 people", async () => {
  //     const people = await screen.findAllByTestId("person-item");
  //     expect(people.length).toBeGreaterThan(0);
  //   });
});
