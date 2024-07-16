import { useState } from "react";
import styles from './Project.module.css';
import Spline from '@splinetool/react-spline';

function Project({ splineSrc, data}) {
    const [activeButton, setActiveButton] = useState("summary")
    const [description, setDescription] = useState(data.summary);

    function handleClick(index) {
        setActiveButton(index);
        if (index === "keyFeatures") {
            setDescription(
                <ul className={styles.list}>
                    {data.keyFeatures.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                    ))}
                </ul>
            );
        } else if (index === "techStack") {
            setDescription(
                <ul className={styles.list}>
                    {data.techStack.map((tech, idx) => (
                        <li key={idx}>{tech}</li>
                    ))}
                </ul>
            );
        } else {
            setDescription(data[index]);
        }
    }

    return (
        <div className={styles.project}>
            <div className={styles.content}>
                <Spline scene={splineSrc} />
                <div className={styles.text}>
                    <div className={styles.title}>
                        {data.title}
                    </div>
                    <div className={styles.description}>
                        {description}
                    </div>
                    <div className={styles.buttons}>
                        <div className={activeButton === "summary" ? styles.activeButton : ""} onClick={() => handleClick("summary") }>Summary</div>
                        <div className={activeButton === "keyFeatures" ? styles.activeButton : ""} onClick={() => handleClick("keyFeatures")}>Features</div>
                        <div className={activeButton === "techStack" ? styles.activeButton : ""} onClick={() => handleClick("techStack")}>Technologies</div>
                        
                    </div>
                    <div className={styles.buttons}>
                        {
                            data.link === "Work in progress" ? (
                                <a className={styles.link}>Work in Progress</a>
                            ) : (
                                <a className={styles.link} href={data.link} target="_blank">Visit</a>
                            )
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
