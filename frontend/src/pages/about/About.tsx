import { useState } from "react";
import Button from "../../components/buttons/Button.tsx";
import { aboutData } from "./AboutData.ts";

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
        <div className="h-screen w-screen flex flex-col p-2 bg-gray-100 gap-2">
            <div className="mt-16 flex flex-col items-center justify-evenly p-2 bg-white rounded-lg overflow-y-auto h-full w-full gap-2">
                <h2 className="text-2xl font-bold text-gray-800 mb-5">{title}</h2>

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

            <div className="flex flex-row h-10 w-full justify-evenly items-center bg-gray-800 rounded-lg text-white">
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
