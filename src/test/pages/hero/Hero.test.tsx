import {beforeEach, describe, expect, test, vi} from "vitest";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// MUST come before Hero import
vi.mock("../../../api/v1/services/resume", () => ({
    downloadResume: vi.fn(),
}));

import {Hero} from "../../../pages/hero";
import {downloadResume} from "../../../api/v1/services/resume";
import {APP_INFO} from "../../../data";

describe("Hero", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test("renders hero content", () => {
        render(<Hero/>);

        expect(
            screen.getByText(APP_INFO.personal.name)
        ).toBeInTheDocument();
    });

    test("renders avatar", () => {
        render(<Hero/>);

        expect(
            screen.getByAltText("Avatar")
        ).toBeInTheDocument();
    });

    test("renders technologies heading", () => {
        render(<Hero/>);

        expect(
            screen.getByText("Technologies I work with")
        ).toBeInTheDocument();
    });

    test("renders download resume button", () => {
        render(<Hero/>);

        expect(
            screen.getByRole("button", {
                name: /download resume/i,
            })
        ).toBeInTheDocument();
    });

    test("calls downloadResume when clicked", async () => {
        const user = userEvent.setup();

        render(<Hero/>);

        await user.click(
            screen.getByRole("button", {
                name: /download resume/i,
            })
        );

        expect(downloadResume).toHaveBeenCalledTimes(1);
    });

    test("renders hero section", () => {
        const {container} = render(<Hero/>);

        expect(
            container.querySelector("section")
        ).toBeInTheDocument();
    });
});
