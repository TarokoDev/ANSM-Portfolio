import styles from "./Projects.module.css";

export default function Projects() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.component}>
                    <div className={styles.project}>
                        <div className={styles.image}>
                            <img
                                src="/yab.png"
                                alt="YAB"
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.description}>
                            <div className={styles.title}>You are broke!</div>
                            <div className={styles.summary}>
                                YAB is a full-stack finance/budgeting management
                                app.
                            </div>
                            <div className={styles.stack}>
                                <div>React</div>
                                <div>Node.js</div>
                                <div>Express</div>
                                <div>MongoDB</div>
                                <div>Netlify</div>
                                <div>Render</div>
                            </div>
                            <div className={styles.buttons}>
                                <a
                                    href="https://youarebroke.netlify.app"
                                    className={styles.button}
                                    target="_blank"
                                >
                                    Visit
                                </a>
                                <a
                                    href="https://youarebroke.netlify.app/about"
                                    className={styles.button}
                                    target="_blank"
                                >
                                    More Info
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.project}>
                        <div className={styles.image}>
                            <img
                                src="/ansm.png"
                                alt="AM Portfolio"
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.description}>
                            <div className={styles.title}>Portfolio</div>
                            <div className={styles.summary}>
                                Portfoliooooception?
                            </div>
                            <div className={styles.stack}>
                                <div>React Vite</div>
                                <div>HTML</div>
                                <div>CSS</div>
                                <div>Javascript</div>
                                <div>Netlify</div>
                            </div>
                            <div className={styles.buttons}>
                                <a
                                    href="https://austinmiranda.netlify.app"
                                    className={styles.button}
                                    target="_blank"
                                >
                                    Visit again for that nice animation
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
