import './App.css'
import {Navbar} from "./components/Navbar";
import {Hero} from "./components/Hero";
import {About} from "./components/About";

function App() {

    return (
        <div className={`app-container d-flex flex-column`}>
            <header>
                <Navbar/>
            </header>
            <main className={`main-container d-flex flex-column`}>
                <Hero/>
                <About/>
            </main>
        </div>
    )
}

export default App
