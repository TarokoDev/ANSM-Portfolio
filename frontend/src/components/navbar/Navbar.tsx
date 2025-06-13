import React, { useEffect, useState } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import logo from "./logo_black.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
    useEffect(() => {
        Events.scrollEvent.register("begin", function () {});

        Events.scrollEvent.register("end", function () {});

        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove("begin");
            Events.scrollEvent.remove("end");
        };
    }, []);

    const [menuOpen, setMenuOpen] = useState(false);

    function handleClick() {
        setMenuOpen(!menuOpen)
    }

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="fixed w-full flex justify-center p-2 z-50">
            <div className="bg-white shadow rounded-lg h-full w-full flex items-center justify-between p-2">
                <div className="flex items-center ml-2">
                    <img src={logo} alt="Austin Miranda logo" className="h-12" />
                    <Link to="home" spy={true} smooth={true} duration={500} className="ml-2 cursor-pointer">
                        Austin Miranda
                    </Link>
                </div>

                <div className="md:hidden mr-2">
                    <button onClick={handleClick}>
                        {menuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>

                <div
                    className={`${menuOpen ? "flex" : "hidden"} flex-col absolute top-16 left-0 right-0 bg-white shadow m-2 rounded-lg md:flex md:static md:flex-row md:bg-transparent md:shadow-none md:m-0 md:items-center md:gap-5`}
                >
                    <Link
                        activeClass="text-red-500"
                        className="px-2 py-1 cursor-pointer"
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={closeMenu}
                    >
                        Home
                    </Link>
                    <Link
                        activeClass="text-red-500"
                        className="px-2 py-1 cursor-pointer"
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={closeMenu}
                    >
                        About Me
                    </Link>
                    <Link
                        activeClass="text-red-500"
                        className="px-2 py-1 cursor-pointer"
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick={closeMenu}
                    >
                        Projects
                    </Link>
                </div>
            </div>
        </div>
    );
}
