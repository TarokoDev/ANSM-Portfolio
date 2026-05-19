import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Home.module.css';
import Spline from '@splinetool/react-spline';
import { ClimbingBoxLoader } from 'react-spinners';
import Button from '../../components/buttons/Button.jsx';
import ResumeDialog from '../../components/resume/ResumeDialog.jsx';
import { homeData } from './HomeData.js';

const SPLINE_TIMEOUT_MS = 10000;

const cardVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};

const lineVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [isSplineLoaded, setIsSplineLoaded] = useState(false);
    const [resumeOpen, setResumeOpen] = useState(false);

    useEffect(() => {
        if (isSplineLoaded) {
            const timer = setTimeout(() => setIsLoading(false), 500);
            return () => clearTimeout(timer);
        }
    }, [isSplineLoaded]);

    useEffect(() => {
        const timeout = setTimeout(() => setIsLoading(false), SPLINE_TIMEOUT_MS);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.component}>

                {/* Loader — fades out when Spline ready */}
                <AnimatePresence>
                    {isLoading && (
                        <motion.div
                            className={styles.loader}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <ClimbingBoxLoader color="#3C85DA" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Spline 3D scene */}
                <div className={styles.splineWrapper}>
                    <Spline
                        scene={homeData.spline}
                        onLoad={() => setIsSplineLoaded(true)}
                    />
                </div>

                {/* Glass text card */}
                <AnimatePresence>
                    {!isLoading && (
                        <motion.div
                            className={styles.card}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.p className={styles.greeting} variants={lineVariants}>
                                {homeData.greeting}
                            </motion.p>
                            <motion.h1 className={styles.name} variants={lineVariants}>
                                {homeData.name}<span className={styles.dot}>.</span>
                            </motion.h1>
                            <motion.p className={styles.subtitle} variants={lineVariants}>
                                {homeData.subtitle}
                            </motion.p>
                            <motion.div className={styles.links} variants={lineVariants}>
                                <Button mode="outline" onHover="red" link={homeData.links[0].url}>
                                    {homeData.links[0].label}
                                </Button>
                                <Button mode="outline" onHover="red" link={homeData.links[1].url}>
                                    {homeData.links[1].label}
                                </Button>
                                <Button mode="outline" onHover="red" onClick={() => setResumeOpen(true)}>
                                    {homeData.links[2].label}
                                </Button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Scroll hint — desktop only via CSS */}
                {!isLoading && (
                    <motion.div
                        className={styles.scrollHint}
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                        aria-hidden="true"
                    >
                        <span className={styles.chevron} />
                    </motion.div>
                )}
            </div>

            <ResumeDialog
                open={resumeOpen}
                onClose={() => setResumeOpen(false)}
                src={homeData.links[2].url}
                downloadName={homeData.links[2].downloadName}
            />
        </div>
    );
}
