import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./About.module.css";
import { aboutData } from "./AboutData.js";

export default function About() {
    const [activeTab, setActiveTab] = useState(0);

    function handleTabClick(idx) {
        setActiveTab(idx);
    }

    const current = aboutData[activeTab];

    return (
        <motion.div
            className={styles.container}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.15 }}
        >
            {/* Content card */}
            <div className={styles.component}>
                <div className={styles.contentArea}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, filter: "blur(6px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, filter: "blur(6px)" }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                            <h2 className={styles.contentTitle}>{current.title}</h2>

                            {Array.isArray(current.description) ? (
                                typeof current.description[0] === "string" ? (
                                    current.description.map((para, i) => (
                                        <p key={i} className={styles.contentPara}>{para}</p>
                                    ))
                                ) : (
                                    current.description.map((group, i) => (
                                        <div key={i} className={styles.skillGroup}>
                                            <h4 className={styles.groupTitle}>{group.title}</h4>
                                            <div className={styles.badgeRow}>
                                                {group.items.map((item) => (
                                                    <span key={item} className={styles.badge}>{item}</span>
                                                ))}
                                            </div>
                                        </div>
                                    ))
                                )
                            ) : (
                                <p className={styles.contentPara}>{current.description}</p>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Tab bar — outside the card */}
            <div className={styles.tabBar} role="tablist">
                {aboutData.map((item, idx) => (
                    <button
                        key={idx}
                        role="tab"
                        aria-selected={activeTab === idx}
                        className={styles.tabButton}
                        onClick={() => handleTabClick(idx)}
                    >
                        {activeTab === idx && (
                            <motion.span
                                className={styles.tabPill}
                                layoutId="aboutTabPill"
                                transition={{ type: "spring", stiffness: 400, damping: 34 }}
                            />
                        )}
                        <span className={styles.tabLabel}>{item.title}</span>
                    </button>
                ))}
            </div>
        </motion.div>
    );
}
