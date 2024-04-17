import styles from "./Home.module.css";

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
                        <div>Full-stack web developer</div>
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
                    <a
                        href="/path/to/your/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </div>
    );
}
