// component.jsx
export const component = name => `
import style from "./${name}.module.scss";

export default function ${name} (props) {
  return (
    <div className={style.${name}}>Hello 👋, I am a ${name} component.</div>
  );
};
`;

// component.module.styles.scss
export const styles = name => `.${name} {}`;

// component.test.tsx
export const test = name => `import { beforeEach, describe, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ${name} from "./${name}";

describe("${name}", () => {
  beforeEach(() => {
    render(<${name} />);
  });

  //it("should show something is in the page", () => {
  //  expect(screen.getByText("Something")).toBeInTheDocument();
  //});

  //it("should not show something_else in the page", () => {
  //  expect(screen.getByText("something_else"))not().toBeInTheDocument();
  //});

  //it("should show the another_thing on click", await () => {
  //  const button = screen.getByText("Show");
  //  await fireEvent.click(button);
  //  expect(await screen.findByText("another_thing")).toBeInTheDocument();
  //});
});
`;