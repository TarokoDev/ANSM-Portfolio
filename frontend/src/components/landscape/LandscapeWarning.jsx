import styles from "./LandscapeWarning.module.css";

export default function LandscapeWarning() {
    return (
        <div className={styles.overlay}>
            <div className={styles.content}>
                <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <path d="M8 2l-4 3 4 3" />
                </svg>
                <p className={styles.message}>Please rotate your device to portrait mode</p>
            </div>
        </div>
    );
}
