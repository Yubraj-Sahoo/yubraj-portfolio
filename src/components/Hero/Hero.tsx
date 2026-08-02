import {HeroContent} from "./HeroContent.tsx";
import {APP_INFO} from "../../data";

import './Hero.css'
import {Avatar} from "./Avatar.tsx";
import {Technologies} from "./Technologies.tsx";

export const Hero = () => {
    return (
        <>
            <section
                className={`app-components main-component-container container-fluid d-flex  flex-column flex-lg-row justify-content-between align-items-center`}>
                <div className={`px-xl-5`}>
                    <HeroContent key={APP_INFO.name} item={APP_INFO}/>
                    <Technologies/>
                </div>
                <div>
                    <Avatar key={APP_INFO.name} item={APP_INFO}/>
                </div>
            </section>
        </>
    );
};
