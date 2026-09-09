import {Content} from './components/Content.tsx';
import {Statistics} from './components/Statistics.tsx';
import './About.css';

export const About = () => {
    return (
        <section id="about" className="main_section about-section">
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
