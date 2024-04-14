import styles from "./About.module.css";

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.component}>
                <div className={styles.header}>About Me</div>
                <div className={styles.body}></div>
            </div>
        </div>
    );
}
