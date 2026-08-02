import { WORKED_TECHNOLOGIES } from "../../data";
import { Icon } from "../common/Icon";

/**
 * Technologies section.
 *
 * @author Yubraj Sahoo
 */
export const Technologies = () => (
    <div className="technologies mt-4">
        <p className="text-primary fw-bold mb-3">
            Technologies I work with
        </p>

        <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
            {WORKED_TECHNOLOGIES.map((technology) => (
                <div
                    key={technology.name}
                    className="technology-item"
                >
                    <Icon
                        icon={technology.icon}
                        label={technology.name}
                        size={32}
                        className="technology-icon"
                    />
                </div>
            ))}
        </div>
    </div>
);