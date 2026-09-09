import {describe, expect, test} from "vitest";
import {render, screen} from "@testing-library/react";

import {HeroContent} from "../../../pages/hero/components/HeroContent";
import {MOCKED_APP_INFO} from "../../data/app";

describe("HeroContent", () => {
    test("renders greeting", () => {
        render(<HeroContent item={MOCKED_APP_INFO}/>);

        expect(
            screen.getByText(MOCKED_APP_INFO.application.greetings)
        ).toBeInTheDocument();
    });

    test("renders name", () => {
        render(<HeroContent item={MOCKED_APP_INFO}/>);

        expect(
            screen.getByRole("heading", {
                level: 1,
                name: MOCKED_APP_INFO.personal.name,
            })
        ).toBeInTheDocument();
    });

    test("renders role", () => {
        render(<HeroContent item={MOCKED_APP_INFO}/>);

        expect(
            screen.getByRole("heading", {
                level: 4,
                name: MOCKED_APP_INFO.professional.role,
            })
        ).toBeInTheDocument();
    });

    test("renders experience", () => {
        render(<HeroContent item={MOCKED_APP_INFO}/>);

        expect(
            screen.getByText(MOCKED_APP_INFO.professional.experience)
        ).toBeInTheDocument();
    });

    test("renders tagline", () => {
        render(<HeroContent item={MOCKED_APP_INFO}/>);

        expect(
            screen.getByText(MOCKED_APP_INFO.content.tagline)
        ).toBeInTheDocument();
    });

    test("applies hero-name class", () => {
        render(<HeroContent item={MOCKED_APP_INFO}/>);

        expect(
            screen.getByRole("heading", {
                level: 1,
            })
        ).toHaveClass("hero-name");
    });

    test("applies hero-role class", () => {
        render(<HeroContent item={MOCKED_APP_INFO}/>);

        expect(
            screen.getByRole("heading", {
                level: 4,
            })
        ).toHaveClass("hero-role");
    });

    test("applies hero-tagline class", () => {
        render(<HeroContent item={MOCKED_APP_INFO}/>);

        expect(
            screen.getByText(MOCKED_APP_INFO.content.tagline)
        ).toHaveClass("hero-tagline");
    });
});
