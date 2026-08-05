import {describe, expect, test, vi} from "vitest";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {NavItem} from "../../../components/Navbar/NavItem";
import type {NavLink} from "../../../types";

describe("NavItem", () => {
    const mockItem: NavLink = {
        id: "home",
        label: "Home",
        href: "#home",
    };

    test("renders the navigation label", () => {
        render(
            <NavItem
                item={mockItem}
                active={false}
                onClick={vi.fn()}
            />
        );

        expect(screen.getByText("Home")).toBeInTheDocument();
    });

    test("renders the correct href", () => {
        render(
            <NavItem
                item={mockItem}
                active={false}
                onClick={vi.fn()}
            />
        );

        expect(screen.getByRole("link"))
            .toHaveAttribute("href", "#home");
    });

    test("applies active class when active is true", () => {
        render(
            <NavItem
                item={mockItem}
                active={true}
                onClick={vi.fn()}
            />
        );

        expect(screen.getByRole("link"))
            .toHaveClass("active");
    });

    test("does not apply active class when active is false", () => {
        render(
            <NavItem
                item={mockItem}
                active={false}
                onClick={vi.fn()}
            />
        );

        expect(screen.getByRole("link"))
            .not.toHaveClass("active");
    });

    test("sets aria-current to page when active", () => {
        render(
            <NavItem
                item={mockItem}
                active={true}
                onClick={vi.fn()}
            />
        );

        expect(screen.getByRole("link"))
            .toHaveAttribute("aria-current", "page");
    });

    test("does not set aria-current when inactive", () => {
        render(
            <NavItem
                item={mockItem}
                active={false}
                onClick={vi.fn()}
            />
        );

        expect(screen.getByRole("link"))
            .not.toHaveAttribute("aria-current");
    });

    test("calls onClick when clicked", async () => {
        const user = userEvent.setup();
        const handleClick = vi.fn();

        render(
            <NavItem
                item={mockItem}
                active={false}
                onClick={handleClick}
            />
        );

        await user.click(screen.getByRole("link"));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test("renders inside a list item", () => {
        const {container} = render(
            <NavItem
                item={mockItem}
                active={false}
                onClick={vi.fn()}
            />
        );

        expect(container.querySelector("li"))
            .toHaveClass("nav-item");
    });
});