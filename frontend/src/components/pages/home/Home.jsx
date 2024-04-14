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
                        <div>Full-stack web developer based in Singapore</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
