import { useState } from "react";
import "./App.css";
import NavbarV2 from "./components/navbar/Navbar";
import NavbarV1 from "./components/v1/navbar/Navbar";
import SettingsDialog from "./components/settings/SettingsDialog";
import LandscapeWarning from "./components/landscape/LandscapeWarning";

import HomeV2     from "./pages/home/Home";
import AboutV2    from "./pages/about/About";
import ProjectsV2 from "./pages/projects/Projects";

import HomeV1     from "./pages/v1/home/Home";
import AboutV1    from "./pages/v1/about/About";
import ProjectsV1 from "./pages/v1/projects/Projects";

function App() {
    const [version, setVersion] = useState(
        () => localStorage.getItem("portfolio-version") || "v2"
    );
    const [settingsOpen, setSettingsOpen] = useState(false);

    function handleVersionChange(v) {
        setVersion(v);
        localStorage.setItem("portfolio-version", v);
    }

    const Navbar   = version === "v1" ? NavbarV1   : NavbarV2;
    const Home     = version === "v1" ? HomeV1     : HomeV2;
    const About    = version === "v1" ? AboutV1    : AboutV2;
    const Projects = version === "v1" ? ProjectsV1 : ProjectsV2;

    return (
        <div className="main">
            <LandscapeWarning />
            <div id="navbar" className="navbar">
                <Navbar onOpenSettings={() => setSettingsOpen(true)} />
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

            <SettingsDialog
                open={settingsOpen}
                onClose={() => setSettingsOpen(false)}
                version={version}
                onVersionChange={handleVersionChange}
            />
        </div>
    );
}

export default App;
