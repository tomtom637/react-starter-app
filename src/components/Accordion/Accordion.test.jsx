import { beforeEach, describe, expect } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom";
import Accordion from './Accordion';

describe("Accordion", () => {
  beforeEach(() => {
    render(<Accordion title="Testing"><h4>Content</h4></Accordion>);
  });

  it("should show the title all the time", () => {
    expect(screen.getByText(/testing/i)).toBeInTheDocument();
  });

  it("should not show the content at the start", () => {
    expect(screen.queryByText(/content/i)).not.toBeInTheDocument();
  });

  it("should show the content on accordion click", async () => {
    const button = screen.getByText("Show");
    fireEvent.click(button);
    expect(await screen.findByText(/content/i)).toBeInTheDocument();
  });

  it("should hide the content in the accordion after two clicks", async () => {
    fireEvent.click(screen.getByText(/show/i));
    fireEvent.click(screen.getByText(/hide/i));
    await waitFor(() => {
      expect(screen.queryByText(/content/i)).not.toBeInTheDocument();
    }, { timeout: 300 });
  });
});
