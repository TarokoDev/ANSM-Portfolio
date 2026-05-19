import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Project.module.css";
import Button from "../../components/buttons/Button.jsx";

const TABS = [
    { key: "summary",     label: "Summary"    },
    { key: "keyFeatures", label: "Features"   },
    { key: "techStack",   label: "Tech Stack" },
];

const cardVariants = {
    enter:  (dir) => ({ opacity: 0, x: dir * 60, filter: "blur(8px)" }),
    center:          { opacity: 1, x: 0,          filter: "blur(0px)" },
    exit:   (dir) => ({ opacity: 0, x: dir * -60, filter: "blur(8px)" }),
};

function renderContent(activeTab, data, listClass, summaryClass) {
    if (activeTab === "keyFeatures") {
        return (
            <ul className={listClass}>
                {data.keyFeatures.map((f, i) => (
                    <li key={i}><strong>{f.title}</strong> {f.description}</li>
                ))}
            </ul>
        );
    }
    if (activeTab === "techStack") {
        return (
            <ul className={listClass}>
                {data.techStack.map((t, i) => (
                    <li key={i}><strong>{t.title}</strong> {t.description}</li>
                ))}
            </ul>
        );
    }
    return <p className={summaryClass}>{data.summary}</p>;
}

function Project({ image, imageOrientation, data, direction }) {
    const [activeTab, setActiveTab]   = useState("summary");
    const [imgError, setImgError]     = useState(false);
    const [lightbox, setLightbox]     = useState(false);
    const pillId = `tabPill-${data.title}`;

    const closeLightbox = useCallback(() => setLightbox(false), []);

    useEffect(() => {
        if (!lightbox) return;
        const onKey = (e) => { if (e.key === "Escape") closeLightbox(); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [lightbox, closeLightbox]);

    return (
        <>
        <AnimatePresence>
            {lightbox && !imgError && (
                <motion.div
                    className={styles.lightboxOverlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    onClick={closeLightbox}
                >
                    <motion.div
                        className={styles.lightboxCard}
                        initial={{ scale: 0.88, opacity: 0 }}
                        animate={{ scale: 1,    opacity: 1 }}
                        exit={{ scale: 0.88,    opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={image}
                            alt={data.title}
                            className={styles.lightboxImg}
                        />
                        <button className={styles.lightboxClose} onClick={closeLightbox} aria-label="Close">
                            ✕
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>

        <motion.div
            className={styles.project}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <div className={styles.imagePane}>
                {imgError ? (
                    <div className={styles.imgPlaceholder}>{data.title}</div>
                ) : (
                    <>
                    <img
                        src={image}
                        className={imageOrientation === "landscape" ? styles.landscape : styles.portrait}
                        alt={data.title}
                        loading="lazy"
                        onError={() => setImgError(true)}
                    />
                    <button
                        className={styles.expandBtn}
                        onClick={() => setLightbox(true)}
                        aria-label="Expand image"
                    >
                        +
                    </button>
                    </>
                )}
            </div>

            <div className={styles.infoPane}>
                <h3 className={styles.title}>{data.title}</h3>

                <div className={styles.contentArea}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, filter: "blur(6px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, filter: "blur(6px)" }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                            {renderContent(activeTab, data, styles.list, styles.summaryText)}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className={styles.tabBar} role="tablist">
                    {TABS.map((tab) => (
                        <button
                            key={tab.key}
                            role="tab"
                            aria-selected={activeTab === tab.key}
                            className={styles.tabButton}
                            onClick={() => setActiveTab(tab.key)}
                        >
                            {activeTab === tab.key && (
                                <motion.span
                                    className={styles.tabPill}
                                    layoutId={pillId}
                                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                                />
                            )}
                            <span className={styles.tabLabel}>{tab.label}</span>
                        </button>
                    ))}
                </div>

                <div className={styles.visitRow}>
                    {data.inProgress ? (
                        <Button mode="filled" disabled>Work in Progress</Button>
                    ) : (
                        <Button mode="filled" onHover="black" link={data.link}>Visit</Button>
                    )}
                </div>
            </div>
        </motion.div>
        </>
    );
}

export default Project;
