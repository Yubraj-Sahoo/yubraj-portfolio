import {describe, expect, test} from "vitest";
import {render, screen} from "@testing-library/react";

import {Technologies} from "../../../pages/hero/components/Technologies";
import {MOCKED_WORKED_TECHNOLOGIES} from "../../data/technologies.ts";

describe("Technologies", () => {
    test("renders section title", () => {
        render(<Technologies/>);

        expect(
            screen.getByText("Technologies I work with")
        ).toBeInTheDocument();
    });

    test("renders all technologies", () => {
        render(<Technologies/>);

        MOCKED_WORKED_TECHNOLOGIES.forEach((technology) => {
            expect(
                screen.getByLabelText(technology.name)
            ).toBeInTheDocument();
        });
    });

    test("renders correct number of technology icons", () => {
        render(<Technologies/>);

        expect(
            screen.getAllByRole("img")
        ).toHaveLength(MOCKED_WORKED_TECHNOLOGIES.length);
    });

    test("renders technology container", () => {
        const {container} = render(<Technologies/>);

        expect(
            container.querySelector(".technologies")
        ).toBeInTheDocument();
    });

    test("renders technology items", () => {
        const {container} = render(<Technologies/>);

        expect(
            container.querySelectorAll(".technology-item")
        ).toHaveLength(MOCKED_WORKED_TECHNOLOGIES.length);
    });

    test("applies technology-icon class to each icon", () => {
        render(<Technologies/>);

        const icons = screen.getAllByRole("img");

        icons.forEach((icon) => {
            expect(icon).toHaveClass("technology-icon");
        });
    });

    test("section title has expected classes", () => {
        render(<Technologies/>);

        expect(
            screen.getByText("Technologies I work with")
        ).toHaveClass("text-primary", "fw-bold", "mb-3");
    });

    test("technology wrapper uses flex layout", () => {
        const {container} = render(<Technologies/>);

        const wrapper = container.querySelector(
            ".d-flex.flex-wrap"
        );

        expect(wrapper).toBeInTheDocument();
    });
});
