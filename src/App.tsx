import './App.css'
import {Navbar} from "./components/layout/Navbar";
import {Hero} from "./pages/hero";
import {About} from "./pages/about";
import {Skills} from "./pages/skills";
import {useHealth} from "./contexts/HealthContext.tsx";

function App() {
    const { isInitialLoading } = useHealth();

    if (isInitialLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className={`app-container d-flex flex-column`}>
            <header>
                <Navbar/>
            </header>
            <main className={`main-container d-flex flex-column`}>
                <Hero/>
                <About/>
                <Skills/>
            </main>
        </div>
    )
}

export default App
