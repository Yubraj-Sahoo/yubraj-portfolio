import {TECHNICAL_EXPERTISE} from "../../../data";
import {SkillType} from "./SkillType.tsx";

export const Skills = () => {
    return (
        <section id={`skills`} className={`main_section`}>
            <p className={`section__eyebrow`}>
                {TECHNICAL_EXPERTISE.eyebrow}
            </p>

            <h2 className={`section__title`}>
                {TECHNICAL_EXPERTISE.title}
            </h2>

            <span
                className={`section__title-line`}
                aria-hidden="true"
            />

            <div className={`skills__container d-flex flex-row flex-wrap gap-2 justify-content-between`}>
                {TECHNICAL_EXPERTISE.skillDetails.map((skillType) => (
                    <SkillType
                        key={skillType.type}
                        type={skillType.type}
                        icon={skillType.icon}
                        skills={skillType.skills}
                    />
                ))}
            </div>
        </section>
    );
};