import { HeroContent } from "./HeroContent.jsx";
import { Technologies } from "./Technologies.jsx";
import { Profile } from "./Profile.jsx";
import {SocialLinks} from "./SocialLinks.jsx";

import "./Hero.css";

export const Hero = () => {
    return (
        <section
            className="
                container-fluid
                col-main-components
                rounded-4
                py-5
                px-4
                d-flex
                flex-column-reverse
                flex-lg-row
                align-items-center
                justify-content-between
                gap-5
            "
        >
            {/* Left Section */}
            <div
                className="
                    flex-grow-1
                    d-flex
                    flex-column
                    align-items-center
                    align-items-lg-start
                "
            >
                <HeroContent />

                <Technologies />

                <SocialLinks />
            </div>

            {/* Right Section */}
            <div
                className="
                    d-flex
                    justify-content-center
                    align-items-center
                "
            >
                <Profile />
            </div>
        </section>
    );
};