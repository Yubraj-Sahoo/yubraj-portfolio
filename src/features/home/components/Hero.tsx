import {HeroContent} from "./HeroContent.tsx";
import {APP_INFO, HERO_ACTIONS} from "../../../data";

import './Hero.css'
import {Avatar} from "./Avatar.tsx";
import {Technologies} from "./Technologies.tsx";
import {Button} from "../../../components/ui";
import {downloadResume} from "../../../services/resume.ts";

export const Hero = () => {
    return (
        <section id="home" className="main_section hero-section">
            <div className="row align-items-center g-4 g-xl-5">
                <div className="col-lg-6 order-2 order-lg-1 hero-section__content">
                    <HeroContent key={APP_INFO.personal.name} item={APP_INFO}/>
                    <div className="hero-section__actions">
                        <Button radius="circle-1" onClick={downloadResume}>
                            {HERO_ACTIONS.resumeLabel}
                        </Button>
                        <Button href={HERO_ACTIONS.contactHref} variant="ghost" outlined radius="circle-1">
                            {HERO_ACTIONS.contactLabel}
                        </Button>
                    </div>
                    <Technologies/>
                </div>
                <div className="col-lg-6 order-1 order-lg-2">
                    <Avatar key={APP_INFO.personal.name} item={APP_INFO}/>
                </div>
            </div>
        </section>
    );
};
