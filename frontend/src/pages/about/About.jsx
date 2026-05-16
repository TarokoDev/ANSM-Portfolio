import styles from "./About.module.css";
import { useState } from "react";
import Button from "../../components/buttons/Button.jsx";
import { aboutData } from "./AboutData.js";

export default function About() {
    const [activeButton, setActiveButton] = useState(0);
    const [title, setTitle] = useState(aboutData[0].title);
    const [description, setDescription] = useState(aboutData[0].description);

    function handleClick(idx) {
        setActiveButton(idx);
        setTitle(aboutData[idx].title);
        setDescription(aboutData[idx].description);
    }

    return (
        <div className={styles.container}>
            <div className={styles.component}>
                <h2 className={styles.title}>{title}</h2>

                {Array.isArray(description) ? (
                    typeof description[0] === "string" ? (
                        <ul>
                            {description.map((d, i) => (
                                <li key={i}>{d}</li>
                            ))}
                        </ul>
                    ) : (
                        description.map((group, i) => (
                            <div key={i}>
                                <h3>{group.title}</h3>
                                <ul>
                                    {group.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    )
                ) : (
                    <p>{description}</p>
                )}
            </div>

            <div className={styles.buttons}>
                {aboutData.map((item, idx) => (
                    <Button
                        key={idx}
                        mode="text"
                        onClick={() => handleClick(idx)}
                        active={activeButton === idx}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </Button>
                ))}
            </div>
        </div>
    );
}
