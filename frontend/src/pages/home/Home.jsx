import { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Spline from '@splinetool/react-spline';
import { ClimbingBoxLoader } from 'react-spinners';
import Button from '../../components/buttons/Button.jsx';
import { homeData } from './HomeData.js';

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
                    scene={homeData.spline}
                    onLoad={() => setIsSplineLoaded(true)}
                />

                {!isLoading && (
                    <div className={styles.text}>
                        <div className={styles.header}>
                            <div className={styles.textTop}>
                                <div>{homeData.title}</div>
                            </div>
                            <div className={styles.textBottom}>
                                <div>{homeData.subtitle}</div>
                            </div>
                            <div className={styles.links}>
                                <Button mode="text" onHover="red" link={homeData.links[0].url}>{homeData.links[0].label}</Button>
                                <Button mode="text" onHover="red" link={homeData.links[1].url}>{homeData.links[1].label}</Button>
                                <Button mode="text" onHover="red" link={homeData.links[2].url} downloadName={homeData.links[2].downloadName}>{homeData.links[2].label}</Button>
                            </div>
                        </div>
                        
                    </div>
                )}
            </div>
        </div>
    );
}
