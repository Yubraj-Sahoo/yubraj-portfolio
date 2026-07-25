import {TECHNOLOGIES} from "../../constants/hero-technologies.js";
import {IconCard} from "../common/index.js";

export const Technologies = () => {
    return (
        <div className="mt-5 w-100">

            <h5 className="text-center text-primary-emphasis mb-4">
                Technologies I Work With
            </h5>

            <div className="d-flex justify-content-center flex-wrap gap-3">
                {TECHNOLOGIES.map((tech) => (
                    <IconCard
                        key={tech.name}
                        icon={tech.icon}
                        title={tech.name}
                    />
                ))}
            </div>

        </div>
    );
};