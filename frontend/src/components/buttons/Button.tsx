import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
    children: React.ReactNode;
    mode?: "filled" | "outline" | "text";
    icon?: any;
    onHover?: "red" | "black";
    link?: string;
    downloadName?: string;
    onClick?: () => void;
    active?: boolean;
}

function Button({ children, mode, icon, onHover, link, downloadName, onClick, active }: ButtonProps) {
    const base = "cursor-pointer flex items-center justify-center";
    let modeClass = "";
    if (mode === "filled") {
        modeClass = "bg-sky-400 text-white rounded px-2 py-1 transition-colors";
    } else if (mode === "outline") {
        modeClass = "border-2 border-black text-black rounded px-2 py-1 transition-colors";
    } else if (mode === "text") {
        modeClass = "text-black";
    }

    let hoverClass = "";
    if (onHover === "red") {
        hoverClass = mode === "text" ? "hover:text-red-500" : "hover:bg-red-500 hover:border-red-500 hover:text-white";
    } else if (onHover === "black") {
        hoverClass = "hover:bg-black hover:border-black hover:text-white";
    }

    const activeClass = active ? "text-red-500" : "";

    return (
        <div className={`${base} ${modeClass} ${hoverClass} ${activeClass}`} onClick={onClick}>
            {icon && <span className="mr-1"><FontAwesomeIcon icon={icon} /></span>}
            {link ? (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={downloadName}
                >
                    {children}
                </a>
            ) : (
                <>{children}</>
            )}
        </div>
    );
}

export default Button;
