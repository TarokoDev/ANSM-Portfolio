import styles from "./About.module.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosSchool } from "react-icons/io";
import { FaAward } from "react-icons/fa";

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.component}>
                <div className={styles.image}>
                    <img
                        src="/icon.png"
                        alt="Austin"
                        className={styles.image}
                    />
                </div>
                <div className={styles.cards}>
                    <div className={styles.aboutme}>
                        <div className={styles.logo}>
                            <IoPersonCircleOutline size="30px" />
                        </div>
                        <div className={styles.header}>About Me</div>
                        <div className={styles.description}>
                            Originating from industrial design background, I
                            have always been passionate about creating and
                            designing. I have since transitioned into web
                            development, where I can apply my creativity and
                            problem-solving skills to create beautiful and
                            functional websites.
                        </div>
                    </div>
                    <div className={styles.education}>
                        <div className={styles.logo}>
                            <IoIosSchool size="30px" />
                        </div>
                        <div className={styles.header}>Education</div>
                        <div className={styles.description}>
                            <div>
                                BSc Comp. Sci. - Bachelor of Computer Science
                            </div>
                            <div>Diploma in Product Design & Innovation</div>
                        </div>
                    </div>
                    {/* <div>
                        <Cards
                            logo={<IoIosSchool size="30px" />}
                            title="Education"
                            description1="B.CompSc. Bachelor's Degree"
                            description2="Dip. Product Design & Innovation"
                        />
                    </div> */}
                </div>
            </div>
        </div>
    );
}
