import React from 'react';

import projects from "../../data/projects.json";
import { getImageUrl } from '../../utils';

const Projects = () => {
    return <section>
        <h2>Projects</h2>
        <div>
            {
                projects.map((project, id) => {
                    return <div key={id}>
                        <img src={getImageUrl(project.imageSrc)} alt={`Image of ${project.title}`} />
                    </div>
                })
            }
        </div>
    </section>;
}

export default Projects;