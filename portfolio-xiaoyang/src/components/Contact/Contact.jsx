import React from 'react';
import { getImageUrl } from '../../utils';

const Contact = () => {
    return (
        <footer id="contact">
            <div>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul>
                <li>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                    <a href="mailto:jin.xiaoya@northeastern.edu">jin.xiaoya@northeastern.edu</a>
                </li>
                <li>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
                    <a href="https://www.linkedin.com/in/xiaoyangjin4/">linkedin.com/xiaoyangjin</a>
                </li>
                <li>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
                    <a href="https://github.com/XiaoyangJin">github.com/xiaoyangjin</a>
                </li>
            </ul>
        </footer>
    )
}

export default Contact;