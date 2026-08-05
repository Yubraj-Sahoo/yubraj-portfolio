import {HeroContent} from "./HeroContent.tsx";
import {APP_INFO} from "../../data";

import './Hero.css'
import {Avatar} from "./Avatar.tsx";
import {Technologies} from "./Technologies.tsx";
import {Button} from "../common/Button";
import {downloadResume} from "../../api/resumeApi.ts";

export const Hero = () => {
    return (
        <>
            <section
                className={`app-components main-component-container d-flex  flex-column-reverse flex-lg-row justify-content-between align-items-center`}>
                <div className={`px-xl-5`}>
                    <HeroContent key={APP_INFO.name} item={APP_INFO}/>
                    <Button
                        key={`resume`}
                        radius={`circle-2`}
                        children={"Download Resume"}
                        onClick={downloadResume}
                    />
                    <Technologies/>
                </div>
                <div>
                    <Avatar key={APP_INFO.name} item={APP_INFO}/>
                </div>
            </section>
        </>
    );
};
