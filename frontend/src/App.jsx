import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Projects from "./components/pages/projects/Projects";

function App() {
    return (
        <>
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
        </>
    );
}

export default App;
