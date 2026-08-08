import {Content} from './Content.tsx';
import {Statistics} from './Statistics.tsx';
import './About.css';

export const About = () => {
    return (
        <section id="about" className="app-components main-component-container about-section">
            <div className="row align-items-center g-5">
                <div className="col-lg-6">
                    <Content/>
                </div>

                <div className="col-lg-6">
                    <Statistics/>
                </div>
            </div>
        </section>
    );
};
