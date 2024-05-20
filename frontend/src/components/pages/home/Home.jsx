import styles from "./Home.module.css";
import resume from '../../../../public/resume.pdf'

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.component}>
                <div className={styles.animatedTitle}>
                    <div className={styles.textTop}>
                        <div>
                            <span>Hi!</span>
                            <span>I'm Austin</span>
                        </div>
                    </div>
                    <div className={styles.textBottom}>
                        <div>Full-stack developer</div>
                    </div>
                </div>
                <div className={styles.links}>
                    <a
                        href="https://github.com/TarokoDev"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </a>
                    <a
                        href="https://www.linkedin.com/in/austin-miranda"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    {/* <a
                        href="https://resume.io/r/2DWfuATB5"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a> */}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download="Austin Miranda - Resume 2024.pdf"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </div>
    );
}
