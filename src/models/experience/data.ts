import type {ExperienceContent} from "./types";

export const PROFESSIONAL_JOURNEY: ExperienceContent = {
    eyebrow: "EXPERIENCE",
    title: "My Professional Journey",
    experiences: [
        {
            period: "Jun 2023 - Present",
            role: "Software Developer",
            company: "Indian Eagle",
            duration: "3+ yrs",
            responsibilities: [
                "Developing and maintaining backend services for a high-traffic OTA (Online Travel Agency) flight booking platform.",
                "Working with various core and advanced Java technologies to build scalable, robust applications.",
                "Designing and implementing RESTful APIs for seamless integration with frontend services and third-party flight systems.",
                "Optimized application performance and database queries, utilizing monitoring tools like Prometheus and Grafana to track metrics and identify bottlenecks.",
            ]
        },
        {
            period: "Mar 2023 - Jun 2023",
            role: "Java Mentor",
            company: "Naresh IT",
            duration: "3 mos",
            responsibilities: [
                "Mentored students in core and advanced Java concepts.",
                "Assisted in debugging and resolving coding issues.",
                "Guided students in building hands-on projects."
            ]
        }
    ]
};
