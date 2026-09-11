import type { Experience } from "../../../models";

interface ExperienceItemProps {
    experience: Experience;
    isLast: boolean;
}

export const ExperienceItem = ({ experience, isLast }: ExperienceItemProps) => {
    return (
        <div className="experience__item d-flex">
            <div className="experience__timeline-visual d-flex flex-column align-items-center">
                <div className="timeline-dot"></div>
                {!isLast && (
                    <div className="timeline-line"></div>
                )}
            </div>

            <div className="experience__content d-flex flex-column flex-md-row w-100 pb-5">
                <div className="experience__period">
                    {experience.period}
                </div>
                
                <div className="experience__details flex-grow-1">
                    <div className="d-flex justify-content-between align-items-baseline mb-1 flex-wrap">
                        <h3 className="experience__role m-0">{experience.role}</h3>
                        <span className="experience__duration">{experience.duration}</span>
                    </div>
                    <p className="experience__company mb-3">{experience.company}</p>
                    <ul className="experience__responsibilities m-0 p-0">
                        {experience.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
