import { useEffect, useState } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import styles from "./Navbar.module.css";
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
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className={styles.container} aria-label="Main navigation">
            <div className={styles.component}>
                <div className={styles.left}>
                    <img src={logo} alt="Austin Miranda logo" />
                    <Link to="home" spy={true} smooth={true} duration={500}>
                        Austin Miranda
                    </Link>
                </div>

                <div className={styles.rightMobile}>
                    <button
                        onClick={handleClick}
                        aria-expanded={menuOpen}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                        {menuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>

                <div className={`${styles.right} ${menuOpen ? styles.showMenu : ""}`}>
                    <Link activeClass={styles.active} to="home" spy={true} smooth={true} duration={500}>
                        Home
                    </Link>
                    <Link activeClass={styles.active} to="about" spy={true} smooth={true} duration={500}>
                        About Me
                    </Link>
                    <Link activeClass={styles.active} to="projects" spy={true} smooth={true} duration={500}>
                        Projects
                    </Link>
                </div>
            </div>
        </nav>
    );
}
