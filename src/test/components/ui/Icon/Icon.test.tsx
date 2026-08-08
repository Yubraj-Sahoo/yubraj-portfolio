import {describe, test, expect, vi} from "vitest";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {FaGithub} from "react-icons/fa";

import {Icon} from "../../../../components/ui";

describe("Icon Component", () => {
    test("renders icon", () => {
        render(<Icon icon={FaGithub} label="GitHub"/>);

        expect(screen.getByLabelText("GitHub")).toBeInTheDocument();
    });

    test("renders with default role when onClick is not provided", () => {
        render(<Icon icon={FaGithub} label="GitHub"/>);

        expect(screen.getByRole("img")).toBeInTheDocument();
    });

    test("renders as button when onClick is provided", () => {
        render(
            <Icon
                icon={FaGithub}
                label="GitHub"
                onClick={() => {
                }}
            />
        );

        const icon = screen.getByRole("button");

        expect(icon).toBeInTheDocument();
        expect(icon).toHaveAttribute("tabindex", "0");
    });

    test("calls onClick", async () => {
        const user = userEvent.setup();
        const handleClick = vi.fn();

        render(
            <Icon
                icon={FaGithub}
                label="GitHub"
                onClick={handleClick}
            />
        );

        await user.click(screen.getByRole("button"));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test("applies custom class", () => {
        render(
            <Icon
                icon={FaGithub}
                label="GitHub"
                className="custom-icon"
            />
        );

        expect(screen.getByLabelText("GitHub"))
            .toHaveClass("custom-icon");
    });

    test("applies custom color", () => {
        render(
            <Icon
                icon={FaGithub}
                label="GitHub"
                color="red"
            />
        );

        expect(screen.getByLabelText("GitHub"))
            .toHaveAttribute("color", "red");
    });

    test("applies custom size", () => {
        render(
            <Icon
                icon={FaGithub}
                label="GitHub"
                size={40}
            />
        );

        expect(screen.getByLabelText("GitHub"))
            .toHaveAttribute("height", "40");
    });
});
