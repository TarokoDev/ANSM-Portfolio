import { useState } from "react";
import styles from './Project.module.css';
import Spline from '@splinetool/react-spline';
import Button from "../../components/buttons/Button.jsx"

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

                        <Button 
                            mode="text" 
                            onHover="red" 
                            onClick={() => handleClick("summary")} 
                            active={activeButton === "summary"}
                        >
                            Summary
                        </Button>
                        <Button 
                            mode="text" 
                            onHover="red" 
                            onClick={() => handleClick("keyFeatures")} 
                            active={activeButton === "keyFeatures"}
                        >
                            Features
                        </Button>
                        <Button 
                            mode="text" 
                            onHover="red" 
                            onClick={() => handleClick("techStack")} 
                            active={activeButton === "techStack"}
                        >
                            Technologies
                        </Button>
                        
                    </div>
                    <div className={styles.visitButton}>
                        {
                            data.link === "Work in progress" ? (
                                <Button mode="filled" onHover="black">Work in Progress</Button>
                            ) : (
                                <Button mode="filled" onHover="black" link={data.link}>Visit</Button>
                            )
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
