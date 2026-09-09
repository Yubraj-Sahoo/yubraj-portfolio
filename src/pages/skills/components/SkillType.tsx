import type {IconType} from "react-icons";
import type {Skill} from "../../../models";
import {Icon} from "../../../components/ui";
import {ProgressBar} from "../../../components/ui";

interface SkillTypeProps {
    type: string;
    icon: IconType;
    skills: Skill[];
}

/**
 * Displays a category of technical skills.
 *
 * @param type - The skill category.
 * @param icon - The React icon associated with the category.
 * @param skills - The skills belonging to the category.
 */
export const SkillType = ({
                              type,
                              icon,
                              skills,
                          }: SkillTypeProps) => {
    return (
        <article className="skill-type">
            <div className="d-flex flex-row align-items-center mb-3 gap-2">
                <Icon
                    icon={icon}
                    size={22}
                    color="var(--color-button-primary)"
                />

                <h3 className="mb-0">
                    {type}
                </h3>
            </div>

            <div className="d-flex flex-column gap-1">
                {skills.map((skill) => (
                    <ProgressBar
                        key={skill.name}
                        label={skill.name}
                        value={skill.level}
                        showValue={false}
                    />
                ))}
            </div>
        </article>
    );
};
