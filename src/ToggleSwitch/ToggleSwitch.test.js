import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToggleSwitch from "./index";

describe("ToggleSwitch", () => {
  it("renders without crashing", () => {
    render(<ToggleSwitch />);
  });

  it("sets initial checked to true when initialChecked prop is true", () => {
    render(<ToggleSwitch initialChecked={true} />);
    expect(screen.getByTestId("slider")).toHaveStyle(
      "background-color: #2196f3;"
    );
  });

  it("sets initial checked to false when initialChecked prop is false", () => {
    render(<ToggleSwitch initialChecked={false} />);
    expect(screen.getByTestId("slider")).toHaveStyle("background-color: #ccc");
  });

  it("renders rounded toggle switch when rounded prop is true", () => {
    render(<ToggleSwitch round={true} />);
    expect(screen.getByTestId("slider")).toHaveClass("round");
  });

  it("sets background color from given backgroundColor prop", async () => {
    render(<ToggleSwitch backgroundColor="green" />);
    const input = screen.getByTestId("switch");
    userEvent.click(input);
    expect(screen.getByTestId("slider")).toHaveStyle("background-color: green");
  });
});
