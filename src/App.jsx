import "./App.css";
import {Navbar} from "./components/Navbar";
import {Hero} from "./components/Hero"

function App() {
    return (<div className="bg-col-body text-light min-vh-100 d-flex flex-column">

        <header>
            <Navbar/>
        </header>

        <main className="main-content">
            <Hero/>
        </main>

    </div>);
}

export default App;