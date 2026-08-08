import './App.css'
import {Navbar} from "./components/layout/Navbar";
import {Hero} from "./features/home";
import {About} from "./features/about";

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
