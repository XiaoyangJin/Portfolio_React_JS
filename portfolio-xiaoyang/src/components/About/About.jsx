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
        </section>
    )
}

export default About;