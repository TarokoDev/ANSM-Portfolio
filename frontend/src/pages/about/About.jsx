import styles from "./About.module.css";
import { useState } from "react";
import Button from "../../components/buttons/Button.jsx";
// import { IoPersonCircleOutline, IoIosSchool, IoMdCodeWorking } from "react-icons/io";

const aboutMe = [
    {
        // icon: <IoPersonCircleOutline size={24} />,
        title: "Background",
        descriptions: 
            [
                "With a product design background, I’ve always been passionate about creating and designing.", 
                "Transitioning into Full Stack development, I now channel my creativity and problem-solving into modern, dynamic web applications.",
                "I’m particularly passionate about front-end development, test-driven development, and enhancing user experiences."
        ]
    },
    {
        // icon: <IoIosSchool size={24} />,
        title: "Education",
        descriptions: [
            "I earned a Bachelor's in Computer Science from the University of Wollongong, majoring in Digital Systems and Security. It was an exhilarating journey filled with late-night coding sessions and breakthrough moments!",
            "Before that, I honed my skills in Product Design and Innovation at Ngee Ann Polytechnic, where I learned to merge creativity with functionality."
        ]
    },
    {
        // icon: <IoMdCodeWorking size={24} />,
        title: "Technologies",
        descriptions: [
            <strong>Frontend</strong>,
            "React JS, HTML, CSS, JavaScript, React-Native, Tailwind CSS, BootStrap, Vite, Expo",
            "",
            <strong>Backend</strong>,
            "Node.js, Express, MongoDB, MySQL",
            "",
            <strong>Languages</strong>,
            "Python, Javascript, Java, C++",
            "",
            <strong>Tools</strong>,
            "Git, Github, Figma, Adobe XD, Spline, Cypress, Postman, Netlify, Render, OpenAI ChatGPT, npm, XCode Simulator"
        ]
    }
];



export default function About() {
    const [activeButton, setActiveButton] = useState(0);
    const [title, setTitle] = useState(aboutMe[activeButton].title);
    const [descriptions, setDescription] = useState(aboutMe[activeButton].descriptions);

    function handleClick(index) {
        setActiveButton(index);
        setTitle(aboutMe[index].title);
        setDescription(aboutMe[index].descriptions);
    }

    return (
        <div className={styles.container}>
            <div className={styles.component}>
                <div className={styles.content}>
                    <label className={styles.title}>
                        {title}
                    </label>
                    <label className={styles.description}>
                        {Array.isArray(descriptions) ? (
                            descriptions.map((description, i) => <li key={i}>{description}</li>)
                        ) : (
                            <p>{descriptions}</p>
                        )}
                    </label>
                </div>
                <div className={styles.buttons}>
                    {aboutMe.map((item, index) => (
                        <Button
                            key={index}
                            mode="text"
                            onHover="red"
                            onClick={() => handleClick(index)}
                            active={activeButton === index}
                        >
                            {item.icon}
                            <label>{item.title}</label>
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
}
