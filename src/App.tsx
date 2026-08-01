import './App.css'
import {Navbar} from "./components/Navbar";
import {Hero} from "./components/Hero";

function App() {

    return (
        <div className={`app-container d-flex flex-column`}>
            <header>
                <Navbar/>
            </header>
            <main className={`main-container d-flex flex-column`}>
                <Hero/>
            </main>
        </div>
    )
}

export default App
