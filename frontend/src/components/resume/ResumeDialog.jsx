import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ResumeDialog.module.css";

export default function ResumeDialog({ open, onClose, src, downloadName }) {
    const [fullscreen, setFullscreen] = useState(false);

    const close = useCallback(() => {
        setFullscreen(false);
        onClose();
    }, [onClose]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e) => { if (e.key === "Escape") close(); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, close]);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className={styles.backdrop}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    onClick={close}
                >
                    <motion.div
                        className={`${styles.dialog} ${fullscreen ? styles.dialogFullscreen : ""}`}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1,   opacity: 1 }}
                        exit={{ scale: 0.9,    opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Toolbar */}
                        <div className={styles.toolbar}>
                            <span className={styles.toolbarTitle}>Resume</span>
                            <div className={styles.toolbarActions}>
                                <a
                                    className={styles.iconBtn}
                                    href={src}
                                    download={downloadName}
                                    aria-label="Download resume"
                                    title="Download"
                                >
                                    {/* download icon */}
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </a>
                                <button
                                    className={styles.iconBtn}
                                    onClick={() => setFullscreen((f) => !f)}
                                    aria-label={fullscreen ? "Exit fullscreen" : "Fullscreen"}
                                    title={fullscreen ? "Exit fullscreen" : "Fullscreen"}
                                >
                                    {fullscreen ? (
                                        /* compress icon */
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="4 14 10 14 10 20"/>
                                            <polyline points="20 10 14 10 14 4"/>
                                            <line x1="10" y1="14" x2="3" y2="21"/>
                                            <line x1="21" y1="3" x2="14" y2="10"/>
                                        </svg>
                                    ) : (
                                        /* expand icon */
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="15 3 21 3 21 9"/>
                                            <polyline points="9 21 3 21 3 15"/>
                                            <line x1="21" y1="3" x2="14" y2="10"/>
                                            <line x1="3" y1="21" x2="10" y2="14"/>
                                        </svg>
                                    )}
                                </button>
                                <button
                                    className={styles.iconBtn}
                                    onClick={close}
                                    aria-label="Close"
                                    title="Close"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"/>
                                        <line x1="6" y1="6" x2="18" y2="18"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* PDF viewer */}
                        <iframe
                            className={styles.viewer}
                            src={src}
                            title="Resume"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
