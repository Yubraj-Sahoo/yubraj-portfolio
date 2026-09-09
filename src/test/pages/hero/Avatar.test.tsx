import {describe, expect, test} from "vitest";
import {render, screen} from "@testing-library/react";

import {Avatar} from "../../../pages/hero/components/Avatar";
import {MOCKED_APP_INFO} from "../../data/app.ts";

describe("Avatar", () => {
    test("renders avatar image", () => {
        render(<Avatar item={MOCKED_APP_INFO}/>);

        expect(
            screen.getByAltText("Avatar")
        ).toBeInTheDocument();
    });

    test("renders correct image source", () => {
        render(<Avatar item={MOCKED_APP_INFO}/>);

        expect(
            screen.getByAltText("Avatar")
        ).toHaveAttribute("src", MOCKED_APP_INFO.personal.avatar);
    });

    test("applies avatar-image class", () => {
        render(<Avatar item={MOCKED_APP_INFO}/>);

        expect(
            screen.getByAltText("Avatar")
        ).toHaveClass("avatar-image");
    });

    test("renders avatar inside avatar-container section", () => {
        const {container} = render(
            <Avatar item={MOCKED_APP_INFO}/>
        );

        const section = container.querySelector("section");

        expect(section).toBeInTheDocument();
        expect(section).toHaveClass("avatar-container");
    });

    test("renders only one avatar image", () => {
        render(<Avatar item={MOCKED_APP_INFO}/>);

        expect(
            screen.getAllByRole("img")
        ).toHaveLength(1);
    });

    test("image has alt text", () => {
        render(<Avatar item={MOCKED_APP_INFO}/>);

        expect(
            screen.getByRole("img", {
                name: "Avatar",
            })
        ).toBeInTheDocument();
    });
});
