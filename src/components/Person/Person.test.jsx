import { beforeEach, describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { rest } from "msw";
import Person from "./Person";

describe("Person", () => {

  it("default", () => {
    expect(true).toBe(true);
  });

  //test("should show something is in the page", () => {
  //  expect(screen.queryByText("Something")).toBeDefined();
  //});

  //test("should not show something_else in the page", () => {
  //  expect(screen.queryByText("something_else")).toBeNull();
  //});

  //test("should show the another_thing on click", () => {
  //  const button = screen.queryByText("Show");
  //  fireEvent.click(button);
  //  expect(screen.queryByText("another_thing")).toBeDefined();
  //});
});
