import { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Spline from '@splinetool/react-spline';
import { ClimbingBoxLoader } from 'react-spinners';
import Button from '../../components/buttons/Button.jsx';

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
                            <Button mode="text" onHover="red" link="https://github.com/TarokoDev">Github</Button>
                            <Button mode="text" onHover="red" link="https://www.linkedin.com/in/austin-miranda">LinkedIn</Button>
                            <Button mode="text" onHover="red" link="/resume.pdf" downloadName="Austin Miranda - Resume 2024.pdf">Resume</Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
