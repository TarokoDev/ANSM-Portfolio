import { motion, AnimatePresence } from "framer-motion";
import styles from "./SettingsDialog.module.css";

export default function SettingsDialog({ open, onClose, version, onVersionChange }) {
    function handleVersionClick(v) {
        onVersionChange(v);
    }

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className={styles.backdrop}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={onClose}
                >
                    <motion.div
                        className={styles.dialog}
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.94 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        onClick={(e) => e.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Settings"
                    >
                        <div className={styles.header}>
                            <span className={styles.title}>Settings</span>
                            <button className={styles.closeBtn} onClick={onClose} aria-label="Close settings">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>

                        <div className={styles.divider} />

                        <div className={styles.body}>
                            <p className={styles.attribution}>Created by Austin Miranda</p>

                            <div className={styles.section}>
                                <span className={styles.sectionLabel}>Version</span>
                                <div className={styles.versionRow}>
                                    <button
                                        className={`${styles.versionBtn}${version === "v1" ? ` ${styles.versionBtnActive}` : ""}`}
                                        onClick={() => handleVersionClick("v1")}
                                    >
                                        v1
                                    </button>
                                    <button
                                        className={`${styles.versionBtn}${version === "v2" ? ` ${styles.versionBtnActive}` : ""}`}
                                        onClick={() => handleVersionClick("v2")}
                                    >
                                        v2
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
