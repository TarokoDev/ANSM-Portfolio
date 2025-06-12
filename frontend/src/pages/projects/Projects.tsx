import Project from "./Project.tsx";
import styles from "./Projects.module.css";
import ProjectsData from "./ProjectsData.ts";

export default function Projects() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.component}>
                    <Project
                        image={"/visualalgoflow.png"}
                        imageOrientation="landscape"
                        data={ProjectsData[0]}
                    />
                    <Project
                        image={"/tarokotodo.png"}
                        imageOrientation="portrait"
                        data={ProjectsData[1]}
                    />
                    <Project
                        image={"/BM-Home.png"}
                        imageOrientation="portrait"
                        data={ProjectsData[2]}
                    />
                    <Project
                        image={"/yab.png"}
                        imageOrientation="landscape"
                        data={ProjectsData[3]}
                    />
                    <Project
                        image={"/kimchinc.png"}
                        imageOrientation="landscape"
                        data={ProjectsData[4]}
                    />
                    <Project
                        image={"/js.png"}
                        imageOrientation="portrait"
                        data={ProjectsData[5]}
                    />
                    <Project
                        image={"/ansm.png"}
                        imageOrientation="portrait"
                        data={ProjectsData[6]}
                    />
                </div>
            </div>
        </>
    );
}
