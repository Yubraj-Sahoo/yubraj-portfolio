import { LINKS } from "../../constants/hero-links.js";
import { IconCard } from "../common/index.js";

export const SocialLinks = () => {
    return (
        <div className="mt-5 w-100">

            <h5 className="text-center text-primary-emphasis mb-4">
                Connect With Me
            </h5>

            <div className="d-flex justify-content-center flex-wrap gap-3">
                {LINKS.map((link) => (
                    <IconCard
                        key={link.name}
                        icon={link.icon}
                        title={link.name}
                        href={link.url}
                    />
                ))}
            </div>

        </div>
    );
};