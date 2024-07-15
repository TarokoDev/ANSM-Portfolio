import { useState } from "react";
import Project from "./Project.jsx";
import styles from "./Projects.module.css";
import ProjectsData from "./ProjectsData.js";
import Spline from '@splinetool/react-spline';

export default function Projects() {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.component}>
                    <Project splineSrc={"https://prod.spline.design/qSZymrbGSnd47ZSY/scene.splinecode"} data={ProjectsData[0]} />
                    <Project splineSrc={"https://prod.spline.design/2UGn-4CiZicge5nO/scene.splinecode"} data={ProjectsData[1]} />
                    <Project splineSrc={"https://prod.spline.design/PivuAol3Z3WfYQRU/scene.splinecode"} data={ProjectsData[2]} />
                    {/* <Project splineSrc={"https://prod.spline.design/qSZymrbGSnd47ZSY/scene.splinecode"} data={ProjectsData[3]} /> */}
                </div>
            </div>
        </>
    );
}
