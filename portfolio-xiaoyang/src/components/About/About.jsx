import React from 'react';

import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

const About = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about/aboutImage.png")}
                    alt="Me sitting faced to a laptop using mobile phone to handle messages"
                    className={styles.aboutImage} />

                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Website Developer</h3>
                            <p>At ChickTech, I enhanced website usability and efficiency through
                                frontend development and Agile methodologies.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>ESG Data Analyst</h3>
                            <p>At China Chengxin, I streamlined ESG data analysis and management
                                using advanced database technologies and web scraping.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Software Developer</h3>
                            <p>At Yongyou Software, I improved software reliability and efficiency
                                with targeted data analysis and process optimization.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About;