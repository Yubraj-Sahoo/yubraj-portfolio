import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {Button} from "../../../../components/ui";

describe("Button Component", () => {

    test("renders children", () => {
        render(<Button>Click Me</Button>);

        expect(
            screen.getByRole("button", {
                name: /click me/i,
            })
        ).toBeInTheDocument();
    });

    test("renders anchor when href is provided", () => {
        render(
            <Button href="https://google.com">
                Google
            </Button>
        );

        const link = screen.getByRole("link");

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute(
            "href",
            "https://google.com"
        );
    });

    test("calls onClick", async () => {
        const user = userEvent.setup();

        const onClick = vi.fn();

        render(
            <Button onClick={onClick}>
                Save
            </Button>
        );

        await user.click(
            screen.getByRole("button")
        );

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    test("is disabled", () => {
        render(
            <Button disabled>
                Save
            </Button>
        );

        expect(
            screen.getByRole("button")
        ).toBeDisabled();
    });

    test("renders submit button", () => {
        render(
            <Button type="submit">
                Submit
            </Button>
        );

        expect(
            screen.getByRole("button")
        ).toHaveAttribute("type", "submit");
    });

    test("applies variant class", () => {
        render(
            <Button variant="secondary">
                Test
            </Button>
        );

        expect(
            screen.getByRole("button")
        ).toHaveClass("app-btn-secondary");
    });

    test("applies outlined class", () => {
        render(
            <Button outlined>
                Test
            </Button>
        );

        expect(
            screen.getByRole("button")
        ).toHaveClass("app-btn-outlined");
    });

    test("applies radius class", () => {
        render(
            <Button radius="circle-2">
                Test
            </Button>
        );

        expect(
            screen.getByRole("button")
        ).toHaveClass("app-btn-radius-circle-2");
    });

    test("applies size class", () => {
        render(
            <Button size="lg">
                Test
            </Button>
        );

        expect(
            screen.getByRole("button")
        ).toHaveClass("app-btn-lg");
    });

    test("applies custom class", () => {
        render(
            <Button className="custom-btn">
                Test
            </Button>
        );

        expect(
            screen.getByRole("button")
        ).toHaveClass("custom-btn");
    });

});
