import styles from "./About.module.css";
import { useState } from "react";

const aboutMe = [
    {
        title: "Background",
        descriptions: "Originating from product design background, I have always been passionate about creating and designing. I have since transitioned into web development, where I can apply my creativity and problem-solving skills to create modern and dynamic web applications."
    },
    {
        title: "Education",
        descriptions: [
            "I earned a Bachelor's in Computer Science from the University of Wollongong, majoring in Digital Systems and Security. It was an exhilarating journey filled with late-night coding sessions and breakthrough moments!",
            "Before that, I honed my skills in Product Design and Innovation at Ngee Ann Polytechnic, where I learned to merge creativity with functionality."
        ]
    },
    {
        title: "Technologies",
        descriptions: [
            "Frontend: React JS, HTML, CSS, JavaScript, React-Native, Tailwind CSS, BootStrap, Vite, Expo",
            "Backend: Node.js, Express, MongoDB, MySQL",
            "Languages: Python, Javascript, Java, C++",
            "Tools: Git, Github, Figma, Adobe XD, Spline, Cypress, Postman, Netlify, Render, OpenAI ChatGPT, npm, XCode Simulator"
        ]
    }
];


export default function About() {

    const [activeButton, setActiveButton] = useState(0)
    const [title, setTitle] = useState(aboutMe[activeButton].title)
    const [descriptions, setDescription] = useState(aboutMe[activeButton].descriptions)


    function handleClick(index) {
        setActiveButton(index)
        setTitle(aboutMe[index].title)
        setDescription(aboutMe[index].descriptions)
    }

    return (
        <div className={styles.container}>
            <div className={styles.component}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        {title}
                    </div>
                    <div className={styles.description}>
                        {Array.isArray(descriptions) ? (
                            descriptions.map((description, i) => <li key={i}>{description}</li>)
                        ) : (
                            <p>{descriptions}</p>
                        )}
                    </div>
                    
                </div>
                <div className={styles.buttons}>
                    <div onClick={() => handleClick(0)} className={activeButton === 0 ? styles.activeButton : ""}>Background</div>
                    <div onClick={() => handleClick(1)} className={activeButton === 1 ? styles.activeButton : ""}>Education</div>
                    <div onClick={() => handleClick(2)} className={activeButton === 2 ? styles.activeButton : ""}>Technical Skills</div>
                </div>
            </div>
        </div>
    );
}
