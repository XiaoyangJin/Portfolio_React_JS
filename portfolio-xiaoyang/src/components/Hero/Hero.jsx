import React from 'react'
import { getImageUrl } from '../../utils';

const Hero = () => {
    return (
        <section>
            <div>
                <h1>Hi, I'm Xiaoyang</h1>
                <p>⚡ Primary coding language: Java<br />
                    - 💼 I’m looking for: Full-time full-stack engineer role<br />
                    - 🎓 My OPT will start on: July 7th, 2024<br />
                    - 🚀 I’m currently working on: My full-stack project Study Sphere<br />
                    - 🌱 I’m currently learning: AWS, Angular, Spring...<br />
                    - 📫 The best way to reach me: jin.xiaoya@northeastern.edu<br />
                    - 📜 Fun fact: Certifications are my jam – can't stop earning them!</p>
                <a href="mailto:jin.xiaoya@northeastern.edu">Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImagexy.png")} alt="Me at snow montain when snowboarding" />
        </section>
    )
}

export default Hero;