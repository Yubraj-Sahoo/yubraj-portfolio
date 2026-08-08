import type {SkillContent} from "../types";

/**
 * Skills and technical expertise content.
 */
export const TECHNICAL_EXPERTISE: SkillContent = {
    eyebrow: "MY SKILLS",
    title: "Technical Expertise",
    icon: "code",
    skillDetails: [
        {
            type: "Backend",
            skills: [
                {
                    name: "Java",
                    level: 90
                },
                {
                    name: "Spring Boot",
                    level: 88
                },
                {
                    name: "Spring Security",
                    level: 85
                },
                {
                    name: "Hibernate",
                    level: 85
                },
                {
                    name: "Microservices",
                    level: 82
                },
                {
                    name: "REST APIs",
                    level: 90
                }
            ]
        },
        {
            type: "Frontend",
            skills: [
                {
                    name: "React",
                    level: 80
                },
                {
                    name: "JavaScript",
                    level: 82
                },
                {
                    name: "HTML5",
                    level: 90
                },
                {
                    name: "CSS3",
                    level: 85
                },
                {
                    name: "Bootstrap",
                    level: 85
                }
            ]
        },
        {
            type: "Database",
            skills: [
                {
                    name: "MySQL",
                    level: 90
                },
                {
                    name: "PostgreSQL",
                    level: 80
                },
                {
                    name: "MongoDB",
                    level: 70
                },
                {
                    name: "Redis",
                    level: 75
                }
            ]
        },
        {
            type: "DevOps & Cloud",
            skills: [
                {
                    name: "Docker",
                    level: 80
                },
                {
                    name: "AWS",
                    level: 75
                },
                {
                    name: "Git",
                    level: 90
                },
                {
                    name: "GitHub Actions",
                    level: 75
                }
            ]
        }
    ]
};