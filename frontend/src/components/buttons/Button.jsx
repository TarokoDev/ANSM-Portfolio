import React from 'react';
import styles from "./Button.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button({ children, mode, icon, onHover, link, downloadName, onClick, active }) {
    let buttonClass = '';
    let iconClass = <FontAwesomeIcon icon={icon} />
    let hoverClass = '';
    let activeClass = active ? styles.active : '';

    if (mode === "filled") {
        buttonClass = styles.filled;
    } else if (mode === "outline") {
        buttonClass = styles.outline;
    } else if (mode === "text") {
        buttonClass = styles.text;
    }

    if (onHover === "red") {
        hoverClass = styles.hoverRed;
    } else if (onHover === "black") {
        hoverClass = styles.hoverBlack;
    }

    if (onHover === "red" && mode === "text") {
        hoverClass = styles.hoverTextRed;
        buttonClass = styles.text;
    }

    return (
        <div className={`${buttonClass} ${hoverClass} ${activeClass}`} onClick={onClick}>
            {icon && <span className={styles.icon}>{iconClass}</span>}
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
                children
            )}
        </div>
    );
}

export default Button;
