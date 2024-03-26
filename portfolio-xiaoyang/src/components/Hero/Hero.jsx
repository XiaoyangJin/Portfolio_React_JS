import React from 'react'

import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi, I'm Xiaoyang
                </h1>
                <p className={styles.description}>⚡ Primary coding language: Java<br />
                    - 💼 I’m looking for: Full-time full-stack engineer role<br />
                    - 🎓 My OPT will start on: July 7th, 2024<br />
                    - 🚀 I’m currently working on: My full-stack project Study Sphere<br />
                    - 🌱 I’m currently learning: AWS, Angular, Spring...
                </p>
                <a href="mailto:jin.xiaoya@northeastern.edu"
                    className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img src={getImageUrl("hero/heroImagexy.png")}
                alt="Me at snow montain when snowboarding" className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}

export default Hero;