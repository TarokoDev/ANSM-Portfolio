import styles from "./About.module.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosSchool } from "react-icons/io";
import { GiBrain } from "react-icons/gi";

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.component}>
                <div className={styles.card}>
                    <div className={styles.header}>
                        <IoPersonCircleOutline size="30px" />
                        <div className={styles.header}>About Me</div>
                    </div>
                    <div className={styles.description}>
                        Originating from product design background, I have
                        always been passionate about creating and designing. I
                        have since transitioned into web development, where I
                        can apply my creativity and problem-solving skills to
                        create modern and dynamic web applications
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.header}>
                        <IoIosSchool size="30px" />
                        <div className={styles.header}>Education</div>
                    </div>
                    <div className={styles.description}>
                        <div>
                            Bachelor of Computer Science, Major in Digital
                            Systems & Security
                        </div>
                        <div>Diploma in Product Design & Innovation</div>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.header}>
                        <GiBrain size="30px" />
                        <div className={styles.header}>Technologies</div>
                    </div>
                    <div className={styles.description}>
                        <div>
                            Frontend: HTML, CSS, JavaScript, React,
                            React-Native, Tailwind CSS, BootStrap
                        </div>
                        <div>Backend: Node.js, Express, MongoDB</div>
                        <div>
                            Others: Git, Github, VsCode, JetBrains, Figma,
                            Cypress, Python, Postman
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
