import React from 'react';

import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                {/* <img
                    src={getImageUrl("about/aboutImage.png")}
                    alt="Me sitting faced to a laptop using mobile phone to handle messages"
                    className={styles.aboutImage} /> */}

                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/computer.png")} alt="Cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Full-Stack Developer</h3>
                            <p>I am a full-stack developer specialized in creating web applications,
                                utilizing the Spring Framework for building RESTful APIs, Angular and
                                TypeScript for the frontend, and PostgreSQL for database management.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/front-end.png")} alt="Image icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I am a frontend developer with a focus on creating responsive
                                and user-friendly websites, dedicated to ensuring optimal
                                performance and engaging digital experiences.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/data.png")} alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Data Analyst</h3>
                            <p>I have leveraged advanced data retrieval techniques and
                                visualization tools to provide insightful industry analysis,
                                and optimized software functionalities for improved efficiency.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/robot.png")} alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Machine Learning Engineer</h3>
                            <p>I have completed many machine learning projects, employing advanced
                                algorithms and data analysis techniques to enhance project outcomes
                                and effectively applying machine learning tools across various practical
                                applications.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About;