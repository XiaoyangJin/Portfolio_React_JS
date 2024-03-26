import React from 'react'
import { getImageUrl } from '../../utils';

const About = () => {
    return (
        <section>
            <h2>About</h2>
            <div>
                <img
                    src={getImageUrl("about/aboutXY.png")}
                    alt="Me sitting faced to a laptop using mobile phone to handle messages" />
            </div>
            <ul>
                <li>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                    <div>
                        <h3>Website Developer</h3>
                        <p>As a Website Developer Intern at ChickTech (May-Sept 2023),
                            I revamped the registration page and event discovery,
                            reducing data errors by 25% and increasing user retention by 30%,
                            while implementing Agile practices and enhancing code quality
                            through GitHub collaboration.</p>
                    </div>
                </li>
                <li>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                    <div>
                        <h3>ESG Data Analyst</h3>
                        <p>As an ESG Data Analyst Intern at China Chengxin International
                            Credit Rating (Oct 2020-Jan 2021), I improved data retrieval
                            efficiency from a 30k entry dataset by 30% using PostgreSQL
                            indexing, streamlined the management of 250+ real estate reports
                            through Python web scraping and JSON transformation, and enhanced
                            real-time analysis with a MongoDB database.</p>
                    </div>
                </li>
                <li>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                    <div>
                        <h3>Software Developer</h3>
                        <p>As a Software Developer Intern at Yongyou Software Co., Ltd
                            (Aug-Sept 2019), I enhanced data integrity by analyzing 50k
                            salary points using K-Nearest-Neighbors in Python, improved
                            UClient software reliability with Java-based unit tests, and
                            expedited data processes, cutting project timelines from 4 days to 1 day.</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default About;