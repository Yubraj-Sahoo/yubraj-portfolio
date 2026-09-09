import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { SkillType } from "../../../pages/skills/components/SkillType";
import { TECHNICAL_EXPERTISE } from "../../models/skills.ts";

// Mock the react-icons to prevent errors in the test environment
vi.mock("react-icons/fa", () => ({
    FaServer: () => <svg role="img" />,
    FaCode: () => <svg role="img" />,
    FaDatabase: () => <svg role="img" />,
    FaCloud: () => <svg role="img" />,
}));

describe("SkillType", () => {
    it("renders the skill type with icon and title", () => {
        const skillType = TECHNICAL_EXPERTISE.skillDetails[0];
        render(<SkillType {...skillType} />);

        expect(screen.getByText(skillType.type)).toBeInTheDocument();
        expect(screen.getByRole("img")).toBeInTheDocument();
    });

    it("renders the correct number of progress bars", () => {
        const skillType = TECHNICAL_EXPERTISE.skillDetails[0];
        render(<SkillType {...skillType} />);

        const progressBars = screen.getAllByRole("progressbar");
        expect(progressBars).toHaveLength(skillType.skills.length);
    });

    it("renders the progress bars with the correct labels", () => {
        const skillType = TECHNICAL_EXPERTISE.skillDetails[0];
        render(<SkillType {...skillType} />);

        skillType.skills.forEach((skill) => {
            expect(screen.getByLabelText(skill.name)).toBeInTheDocument();
        });
    });
});
