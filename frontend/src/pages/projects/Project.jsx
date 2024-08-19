import { useState } from "react";
import styles from './Project.module.css';
import Spline from '@splinetool/react-spline';
import Button from "../../components/buttons/Button.jsx"

// function Project({ splineSrc, data}) {
function Project({ image, imageOrientation, data}) {
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
                {/* <div className={styles.splineContainer}>
                    <Spline scene={splineSrc} />
                    
                </div> */}
                <div className={styles.imageContainer}>
                    <img src={image} className={imageOrientation === "landscape" ? styles.landscape : styles.portrait}/>
                </div>
                <div className={styles.text}>
                    <label className={styles.title}>
                        {data.title}
                    </label>
                    <label className={styles.description}>
                        {description}
                    </label>
                    <div className={styles.buttons}>

                        <Button 
                            mode="text" 
                            onHover="red" 
                            onClick={() => handleClick("summary")} 
                            active={activeButton === "summary"}
                        >
                            <label>
                                Summary
                            </label>
                        </Button>
                        <Button 
                            mode="text" 
                            onHover="red" 
                            onClick={() => handleClick("keyFeatures")} 
                            active={activeButton === "keyFeatures"}
                        >
                            <label>
                                Features
                            </label>
                        </Button>
                        <Button 
                            mode="text" 
                            onHover="red" 
                            onClick={() => handleClick("techStack")} 
                            active={activeButton === "techStack"}
                        >
                            <label>
                                Tech Stack
                            </label>
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
