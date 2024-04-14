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

                    {/* <div className={styles.project}>
                        <div className={styles.image}>
                            <img
                                src="/yab.png"
                                alt="YAB"
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.description}>
                            <div className={styles.title}>Kimchinc</div>
                            <div className={styles.summary}>
                                Kimchinc is a delivery management app.
                            </div>
                            <div className={styles.stack}>
                                <div>React</div>
                                <div>Node.js</div>
                                <div>Express</div>
                                <div>MongoDB</div>
                            </div>
                            <div className={styles.buttons}>
                                <button>Visit</button>
                                <button>More Info</button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}
