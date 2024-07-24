import React, {useEffect, useState} from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import styles from "./Navbar.module.css";
import logo from "./logo_black.png"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
    
    useEffect(() => {
        Events.scrollEvent.register("begin", function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register("end", function () {
            console.log("end", arguments);
        });

        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove("begin");
            Events.scrollEvent.remove("end");
        };
    }, []);

    const [menuOpen, setMenuOpen] = useState(false)
    
    function handleClick() {
        console.log("Clicked!")
        setMenuOpen(!menuOpen)
        console.log(menuOpen)
    }

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.component}>
                <div className={styles.left}>
                    <img src={logo}/>
                    <Link to="home" spy={true} smooth={true} duration={500}>
                        Austin Miranda
                    </Link>
                </div>

                <div className={styles.rightMobile}>
                    <button onClick={handleClick}>
                        {
                            menuOpen === true ? <CloseIcon/> : <MenuIcon />
                        }
                    </button>
                </div>

                <div className={`${styles.right} ${menuOpen? styles.showMenu : ''}`}>
                    <Link
                        activeClass={styles.active}
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Home
                    </Link>
                    <Link
                        activeClass={styles.active}
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        About Me
                    </Link>
                    <Link
                        activeClass={styles.active}
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Projects
                    </Link>
                </div>
            </div>
        </div>
    );
}
