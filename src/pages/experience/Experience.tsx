import {PROFESSIONAL_JOURNEY} from "../../models";
import './Experience.css';
import {ExperienceItem} from "./components/ExperienceItem";

export const Experience = () => {
    return (
        <section id="experience" className="main_section experience-section">
            <p className="section__eyebrow">{PROFESSIONAL_JOURNEY.eyebrow}</p>
            <h2 className="section__title">{PROFESSIONAL_JOURNEY.title}</h2>
            <span className="section__title-line" aria-hidden="true"/>

            <div className="experience__timeline mt-4 mt-md-5">
                {PROFESSIONAL_JOURNEY.experiences.map((exp, index) => (
                    <ExperienceItem
                        key={index}
                        experience={exp}
                        isLast={index === PROFESSIONAL_JOURNEY.experiences.length - 1}
                    />
                ))}
            </div>
        </section>
    );
};
