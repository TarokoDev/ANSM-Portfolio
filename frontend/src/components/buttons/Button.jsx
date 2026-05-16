import styles from "./Button.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button({ children, mode, icon, onHover, link, downloadName, onClick, active, disabled }) {
    let buttonClass = '';
    let hoverClass = '';
    const activeClass = active ? styles.active : '';
    const iconEl = icon ? <span className={styles.icon}><FontAwesomeIcon icon={icon} /></span> : null;

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

    const className = `${buttonClass} ${hoverClass} ${activeClass}`.trim();

    if (link) {
        return (
            <a
                className={className}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                download={downloadName}
            >
                {iconEl}
                {children}
            </a>
        );
    }

    return (
        <button
            className={className}
            onClick={onClick}
            type="button"
            disabled={disabled}
        >
            {iconEl}
            {children}
        </button>
    );
}

export default Button;
