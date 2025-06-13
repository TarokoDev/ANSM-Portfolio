import { useState } from "react";
import Button from "../../components/buttons/Button.tsx"

// Icons
import CloseIcon from '@mui/icons-material/Close';

interface ProjectProps {
    image: string;
    imageOrientation: string;
    data: any;
}

function Project({ image, imageOrientation, data }: ProjectProps) {
    const [activeButton, setActiveButton] = useState("summary");
    const [description, setDescription] = useState(data.summary);
    const [active, setActive] = useState(true);

    function handleClick(index) {
        setActiveButton(index);
        if (index === "keyFeatures") {
            setDescription(
                <ul className="text-center">
                    {data.keyFeatures.map((feature, idx) => (
                        <li key={idx}>
                            <strong>{feature.title}</strong> {feature.description}
                        </li>
                    ))}
                </ul>
            );
        } else if (index === "techStack") {
            setDescription(
                <ul className="text-center">
                    {data.techStack.map((tech, idx) => (
                        <li key={idx}>
                            <strong>{tech.title}</strong> {tech.description}
                        </li>
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
            <div className="w-full h-3/4 flex items-center justify-center overflow-hidden relative">
                <img src={image} className={imageOrientation === "landscape" ? "w-full h-auto object-contain" : "h-full w-auto object-contain"} alt={data.title} />
            </div>
            <div className="w-full flex justify-center items-center">
                <label className="font-bold text-xl text-center">{data.title}</label>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 w-full">
                <label>{data.shortSummary}</label>
            </div>
            <div className="w-full flex flex-row justify-evenly items-center gap-2">
                <div className="w-full">
                    {data.link === "Work in progress" ? (
                        <Button mode="filled" onHover="black">Work in Progress</Button>
                    ) : (
                        <Button mode="filled" onHover="black" link={data.link}>Visit</Button>
                    )}
                </div>
                <div className="w-full">
                    <Button mode="filled" onHover="black" onClick={handleLearnMore}>
                        Learn More
                    </Button>
                </div>
            </div>
        </>
    );

    const learnMoreState = (
        <>
            <div className="flex flex-row w-full justify-end">
                <CloseIcon onClick={handleCloseInfo} />
            </div>

            <div className="flex flex-col justify-center items-center gap-2 w-full overflow-y-auto">
                <label className="font-bold text-xl text-center">
                    {data.title}
                </label>
                <label className="text-center">
                    {description}
                </label>
            </div>

            <div className="flex flex-row justify-evenly items-center gap-2">
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
            <div className="w-3/5 h-5/6 flex items-center justify-center overflow-hidden relative">
                <img src={image} className={imageOrientation === "landscape" ? "w-full h-auto object-contain" : "h-full w-auto object-contain"} alt={data.title} />
            </div>
            <div className="h-5/6 w-2/5 flex flex-col justify-center items-center gap-2 text-center">
                <label className="font-bold text-xl">{data.title}</label>
                <label className="text-center">{description}</label>
                <div className="flex flex-row justify-evenly items-center gap-2 w-full">
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
                <div className="w-full">
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
        <div className="flex flex-col md:flex-row items-center justify-center min-h-[90%] w-full snap-start p-1">
            <div className="flex flex-col items-center justify-between h-full w-full p-5 bg-white rounded-lg gap-2 md:hidden">
                {active ? homeState : learnMoreState}
            </div>
            <div className="hidden md:flex relative flex-row items-center justify-between h-full w-full p-5 bg-white rounded-lg gap-2">
                {webState}
            </div>
        </div>
    );
}

export default Project;
