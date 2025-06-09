import { useState } from "react";
import styles from './Project.module.css';
import Button from "../../components/buttons/Button.jsx"

// Icons
import CloseIcon from '@mui/icons-material/Close';

function Project({ image, imageOrientation, data }) {
    const [activeButton, setActiveButton] = useState("summary");
    const [description, setDescription] = useState(data.summary);
    const [active, setActive] = useState(true);

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

    function handleLearnMore() {
        setActive(!active);
    }

    function handleCloseInfo() {
        setActive(!active);
    }

    const homeState = (
        <>
            <div className={styles.imageContainer}>
                <img src={image} className={imageOrientation === "landscape" ? styles.landscape : styles.portrait} alt={data.title} />
            </div>
            <div className={styles.header}>
                <label className={styles.title}>{data.title}</label>
            </div>
            <div className={styles.shortSummary}>
                <label>{data.shortSummary}</label>
            </div>
            <div className={styles.buttons}>
                <div className={styles.button}>
                    {data.link === "Work in progress" ? (
                        <Button mode="filled" onHover="black">Work in Progress</Button>
                    ) : (
                        <Button mode="filled" onHover="black" link={data.link}>Visit</Button>
                    )}
                </div>
                <div className={styles.button}>
                    <Button mode="filled" onHover="black" onClick={handleLearnMore}>
                        Learn More
                    </Button>
                </div>
            </div>
        </>
    );

    const learnMoreState = (
        <>
            <div className={styles.closeButton}>
                <CloseIcon onClick={handleCloseInfo} />
            </div>

            <div className={styles.details}>
                <label className={styles.title}>
                    {data.title}
                </label>
                <label className={styles.description}>
                    {description}
                </label>
            </div>

            <div className={styles.buttonsLearnMore}>
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
        </>
    );

    const webState = (
        <>
            <div className={styles.imageContainer}>
                <img src={image} className={imageOrientation === "landscape" ? styles.landscape : styles.portrait} alt={data.title} />
            </div>
            <div className={styles.textContainer}>
                <label className={styles.title}>{data.title}</label>
                <label className={styles.description}>{description}</label>
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
                <div className={styles.button}>
                    {data.link === "Work in progress" ? (
                        <Button mode="filled" onHover="black">Work in Progress</Button>
                    ) : (
                        <Button mode="filled" onHover="black" link={data.link}>Visit</Button>
                    )}
                </div>
            </div>
        </>
    );

    return (
        <div className={styles.project}>
            <div className={styles.content}>
                {active ? homeState : learnMoreState}
            </div>
            <div className={styles.webContainer}>
                {webState}
            </div>
        </div>
    );
}

export default Project;
