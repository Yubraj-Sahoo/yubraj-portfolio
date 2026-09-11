export interface ExperienceContent {
    eyebrow: string;
    title: string;
    experiences: Experience[];
}

export interface Experience {
    period: string;
    role: string;
    company: string;
    duration: string;
    responsibilities: string[];
}
