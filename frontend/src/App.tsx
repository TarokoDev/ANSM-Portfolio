import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home"
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";

function App() {
    return (
        <div className="main">
            <div id="navbar" className="navbar">
                <Navbar />
            </div>
            <div id="home" className="home">
                <Home />
            </div>
            <div id="about" className="about">
                <About />
            </div>
            <div id="projects" className="projects">
                <Projects />
            </div>
        </div>
    );
}

export default App;
