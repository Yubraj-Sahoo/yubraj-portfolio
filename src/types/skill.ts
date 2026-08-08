import type {IconType} from "react-icons";

/**
 * Represents the content for the skills section.
 */
export interface SkillContent {
    /** A small text displayed above the title. */
    eyebrow: string;
    /** The main title of the skills section. */
    title: string;
    /** An array of skill types and their details. */
    skillDetails: SkillType[];
}

/**
 * Represents a category of skills.
 */
export interface SkillType {
    /** The type or category of the skills. */
    type: string;
    /** The icon associated with the skills section. */
    icon: IconType;
    /** An array of skills belonging to this type. */
    skills: Skill[];
}

/**
 * Represents a single skill.
 */
export interface Skill {
    /** The name of the skill. */
    name: string;
    /** The proficiency level of the skill. */
    level: number;
}
