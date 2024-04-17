import styles from "./Projects.module.css";

export default function Projects() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.component}>
                    <div className={styles.project}>
                        <div className={styles.content}>
                            <div className={styles.image}>
                                <img
                                    src="/yab.png"
                                    alt="YAB"
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.description}>
                                <div className={styles.title}>
                                    You are broke!
                                </div>
                                <div className={styles.summary}>
                                    YAB is a finance tracker & budgeting
                                    management app.
                                </div>
                                <div className={styles.stack}>
                                    <div>M E R N</div>
                                    <div>Vite</div>
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
                                        Info
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.project}>
                        <div className={styles.image}>
                            <img
                                src="/kimchinc.png"
                                alt="kimchinc"
                                className={styles.image}
                                style={{ height: "200px" }}
                            />
                        </div>
                        <div className={styles.description}>
                            <div className={styles.title}>Kimchinc</div>
                            <div className={styles.summary}>
                                Kimchinc is an app for managing and tracking
                                hospital deliveries
                            </div>
                            <div className={styles.stack}>
                                <div>M E R N</div>
                                <div>Tailwind</div>
                                <div>Netlify</div>
                                <div>Render</div>
                            </div>
                            <div className={styles.buttons}>
                                <a
                                    href="https://kimchinc.netlify.app"
                                    className={styles.button}
                                    target="_blank"
                                >
                                    Visit
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
                                <div>React</div>
                                <div>HTML</div>
                                <div>CSS</div>
                                <div>Javascript</div>
                                <div>Vite</div>
                                <div>Netlify</div>
                            </div>
                            <div className={styles.buttons}>
                                <a
                                    href="https://austinmiranda.netlify.app"
                                    className={styles.button}
                                    target="_blank"
                                >
                                    Click for that nice animation
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
