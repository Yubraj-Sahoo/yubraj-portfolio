import {HeroContent} from "./HeroContent.tsx";
import {APP_INFO} from "../../data/app.ts";

export const Hero = () => {
    return (
        <>
            <section className={`app-components main-component-container`}>
                <HeroContent key={APP_INFO.name} item={APP_INFO}/>
            </section>
        </>
    );
};
