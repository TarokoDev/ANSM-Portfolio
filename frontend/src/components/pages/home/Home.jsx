import { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Spline from '@splinetool/react-spline';
import { ClimbingBoxLoader } from 'react-spinners';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [isSplineLoaded, setIsSplineLoaded] = useState(false);

    useEffect(() => {
        if (isSplineLoaded) {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 500); // Delay to ensure Spline scene is fully rendered

            return () => clearTimeout(timer);
        }
    }, [isSplineLoaded]);

    return (
        <div className={styles.container}>
            <div className={styles.component}>
                {isLoading && (
                    <div className={styles.loader}>
                        <ClimbingBoxLoader color="#3C85DA" />
                    </div>
                )}
                <Spline
                    scene="https://prod.spline.design/PHGfbT0FgFXoPG-E/scene.splinecode"
                    onLoad={() => setIsSplineLoaded(true)}
                />

{!isLoading && (
                    <div className={styles.text}>
                        <div className={styles.header}>
                            <div className={styles.textTop}>
                                <div>Hi! I'm Austin</div>
                            </div>
                            <div className={styles.textBottom}>
                                <div>Full-stack developer</div>
                            </div>
                        </div>
                        <div className={styles.links}>
                            <a
                                href="https://github.com/TarokoDev"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                            </a>
                            <a
                                href="https://www.linkedin.com/in/austin-miranda"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download="Austin Miranda - Resume 2024.pdf"
                            >
                                Resume
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
