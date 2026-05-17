import { useEffect, useState } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import styles from "./Navbar.module.css";
import logo from "./logo_black.png";

const NAV_LINKS = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "projects", label: "Projects" },
];

const mobileMenuVariants = {
    hidden: { opacity: 0, y: -8, scaleY: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scaleY: 1,
        transition: { duration: 0.22, ease: "easeOut", staggerChildren: 0.07 },
    },
    exit: { opacity: 0, y: -8, scaleY: 0.96, transition: { duration: 0.16, ease: "easeIn" } },
};

const mobileItemVariants = {
    hidden: { opacity: 0, x: -12 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.18 } },
};

function GearIcon() {
    return (
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
    );
}

export default function Navbar({ onOpenSettings }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        Events.scrollEvent.register("begin", () => {});
        Events.scrollEvent.register("end", () => {});
        scrollSpy.update();

        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            Events.scrollEvent.remove("begin");
            Events.scrollEvent.remove("end");
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <>
            <nav className={styles.container} aria-label="Main navigation">
                <motion.div
                    className={`${styles.component} ${scrolled ? styles.scrolled : ""}`}
                    initial={{ y: -24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Brand */}
                    <div className={styles.left}>
                        <Link to="home" spy smooth duration={500} className={styles.brand}>
                            <img src={logo} alt="Austin Miranda logo" className={styles.logo} />
                            <span className={styles.brandName}>Austin Miranda</span>
                        </Link>
                    </div>

                    {/* Desktop links */}
                    <LayoutGroup id="navbar-indicator">
                        <div className={styles.right} role="list">
                            {NAV_LINKS.map(({ to, label }) => (
                                <div key={to} className={styles.navItem} role="listitem">
                                    <Link
                                        activeClass={styles.active}
                                        to={to}
                                        spy
                                        smooth
                                        duration={500}
                                        className={styles.navLink}
                                        onSetActive={() => setActiveSection(to)}
                                    >
                                        {label}
                                    </Link>
                                    {activeSection === to && (
                                        <motion.span
                                            className={styles.indicator}
                                            layoutId="activeIndicator"
                                            transition={{ type: "spring", stiffness: 400, damping: 32 }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </LayoutGroup>

                    {/* Settings — desktop only */}
                    <button
                        className={styles.settingsBtn}
                        onClick={onOpenSettings}
                        aria-label="Settings"
                    >
                        <GearIcon />
                    </button>

                    {/* Hamburger */}
                    <button
                        className={styles.hamburger}
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-expanded={menuOpen}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                        <motion.div
                            className={styles.hamburgerIcon}
                            animate={menuOpen ? "open" : "closed"}
                        >
                            <motion.span
                                variants={{
                                    closed: { rotate: 0, y: 0 },
                                    open: { rotate: 45, y: 7 },
                                }}
                                transition={{ duration: 0.22 }}
                            />
                            <motion.span
                                variants={{
                                    closed: { opacity: 1, scaleX: 1 },
                                    open: { opacity: 0, scaleX: 0 },
                                }}
                                transition={{ duration: 0.18 }}
                            />
                            <motion.span
                                variants={{
                                    closed: { rotate: 0, y: 0 },
                                    open: { rotate: -45, y: -7 },
                                }}
                                transition={{ duration: 0.22 }}
                            />
                        </motion.div>
                    </button>
                </motion.div>
            </nav>

            {/* Mobile dropdown — outside nav so it can overflow fixed container */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        style={{ originY: 0 }}
                        role="menu"
                    >
                        {NAV_LINKS.map(({ to, label }) => (
                            <motion.div key={to} variants={mobileItemVariants}>
                                <Link
                                    activeClass={styles.mobileActive}
                                    to={to}
                                    spy
                                    smooth
                                    duration={500}
                                    className={styles.mobileLink}
                                    onClick={closeMenu}
                                    role="menuitem"
                                >
                                    {label}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div variants={mobileItemVariants} className={styles.mobileSettingsDivider} />
                        <motion.div variants={mobileItemVariants}>
                            <button
                                className={styles.mobileSettingsBtn}
                                onClick={() => { closeMenu(); onOpenSettings(); }}
                            >
                                Settings
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
