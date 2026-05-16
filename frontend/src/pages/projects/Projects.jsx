import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Project from "./Project.jsx";
import styles from "./Projects.module.css";
import ProjectsData from "./ProjectsData.js";

const PROJECTS = [
    { image: "/visualalgoflow.png", orientation: "landscape", data: ProjectsData[0] },
    { image: "/tarokotodo.png",     orientation: "portrait",  data: ProjectsData[1] },
    { image: "/BM-Home.png",        orientation: "portrait",  data: ProjectsData[2] },
    { image: "/yab.png",            orientation: "landscape", data: ProjectsData[3] },
    { image: "/kimchinc.png",       orientation: "landscape", data: ProjectsData[4] },
    { image: "/js.png",             orientation: "portrait",  data: ProjectsData[5] },
    { image: "/ansm.png",           orientation: "portrait",  data: ProjectsData[6] },
];

export default function Projects() {
    const [index, setIndex]         = useState(0);
    const [direction, setDirection] = useState(1);

    function go(i) {
        setDirection(i > index ? 1 : -1);
        setIndex(i);
    }

    const { image, orientation, data } = PROJECTS[index];

    return (
        <div className={styles.container}>
            <div className={styles.deck}>
                <AnimatePresence mode="wait" custom={direction}>
                    <Project
                        key={index}
                        image={image}
                        imageOrientation={orientation}
                        data={data}
                        direction={direction}
                    />
                </AnimatePresence>
            </div>

            <div className={styles.controls}>
                <button
                    className={styles.navBtn}
                    onClick={() => go((index - 1 + PROJECTS.length) % PROJECTS.length)}
                    aria-label="Previous project"
                >
                    &#8592;
                </button>

                <div className={styles.dots}>
                    {PROJECTS.map((_, i) => (
                        <button
                            key={i}
                            className={`${styles.dot}${i === index ? ` ${styles.dotActive}` : ""}`}
                            onClick={() => go(i)}
                            aria-label={`Go to project ${i + 1}`}
                        />
                    ))}
                </div>

                <button
                    className={styles.navBtn}
                    onClick={() => go((index + 1) % PROJECTS.length)}
                    aria-label="Next project"
                >
                    &#8594;
                </button>
            </div>
        </div>
    );
}
