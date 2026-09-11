import './App.css'
import {Navbar} from "./components/layout/Navbar";
import {Hero} from "./pages/hero";
import {About} from "./pages/about";
import {Skills} from "./pages/skills";
function App() {

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
