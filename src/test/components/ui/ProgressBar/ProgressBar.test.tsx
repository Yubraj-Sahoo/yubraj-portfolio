import { render, screen } from "@testing-library/react";
import { ProgressBar } from "../../../../components/ui";

describe("ProgressBar", () => {
    it("renders the progress bar with the correct value", () => {
        render(<ProgressBar value={50} />);
        const progressBar = screen.getByRole("progressbar");
        expect(progressBar).toHaveAttribute("aria-valuenow", "50");
        const progressBarInner = screen.getByTitle("50%");
        expect(progressBarInner.firstChild).toHaveStyle("width: 50%");
    });

    it("renders the label when provided", () => {
        render(<ProgressBar value={50} label="Test Progress" />);
        const label = screen.getByText("Test Progress");
        expect(label).toBeInTheDocument();
    });

    it("renders the value when showValue is true", () => {
        render(<ProgressBar value={50} showValue />);
        const value = screen.getByText("50%");
        expect(value).toBeInTheDocument();
    });

    it("does not render the label when not provided", () => {
        render(<ProgressBar value={50} />);
        const label = screen.queryByText("Test Progress");
        expect(label).not.toBeInTheDocument();
    });

    it("does not render the value when showValue is false", () => {
        render(<ProgressBar value={50} showValue={false} />);
        const value = screen.queryByText("50%");
        expect(value).not.toBeInTheDocument();
    });

    it("clamps the value to 0 when the value is less than 0", () => {
        render(<ProgressBar value={-10} />);
        const progressBar = screen.getByRole("progressbar");
        expect(progressBar).toHaveAttribute("aria-valuenow", "0");
        const progressBarInner = screen.getByTitle("0%");
        expect(progressBarInner.firstChild).toHaveStyle("width: 0%");
    });

    it("clamps the value to 100 when the value is greater than 100", () => {
        render(<ProgressBar value={110} />);
        const progressBar = screen.getByRole("progressbar");
        expect(progressBar).toHaveAttribute("aria-valuenow", "100");
        const progressBarInner = screen.getByTitle("100%");
        expect(progressBarInner.firstChild).toHaveStyle("width: 100%");
    });
});
