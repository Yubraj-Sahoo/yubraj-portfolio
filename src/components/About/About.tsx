import {Content} from "./Content.tsx";
import {Statistics} from "./Statistics.tsx";

export const About = () => {
    return (
        <>
            <div
                className={`app-components main-component-container`}
            >
                <h4 className={`text-primary`}>ABOUT ME</h4>
                <div className={`d-flex  flex-column flex-lg-row justify-content-between align-items-center`}>
                    <Content/>
                    <Statistics/>
                </div>
            </div>
        </>
    );
};
