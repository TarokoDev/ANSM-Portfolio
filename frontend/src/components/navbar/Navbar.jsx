import React from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import styles from "./Navbar.module.css";

export default function Navbar() {
    React.useEffect(() => {
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

    return (
        <div className={styles.container}>
            <div className={styles.component}>
                <div className={styles.left}>
                    <Link to="home" spy={true} smooth={true} duration={500}>
                        Austin Miranda
                    </Link>
                </div>
                <div className={styles.right}>
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
