import './App.css'
import {Navbar} from "./components/layout/Navbar";
import {Hero} from "./pages/hero";
import {About} from "./pages/about";
import {Skills} from "./pages/skills";
import {Experience} from "./pages/experience";
import {APP_INFO} from "./models";

function App() {

    return (
        <div className={`app-container d-flex flex-column`}>
            <header>
                <Navbar/>
            </header>
            <main className={`main-container d-flex flex-column`}>
                {APP_INFO.config.enableHero && <Hero/>}
                {APP_INFO.config.enableAbout && <About/>}
                {APP_INFO.config.enableSkills && <Skills/>}
                {APP_INFO.config.enableExperience && <Experience/>}
            </main>
        </div>
    )
}

export default App
