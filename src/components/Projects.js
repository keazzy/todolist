import React, {useState} from 'react';

import {useSelectedProjectValue, useProjectsValue} from '../context';

export const Projects = () => {
    const [active , setActive] = useState(activeValue);
    const { setSelectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();

    return (
        projects &&
        projects.map(project => (
            <li 
                key={project.projectId}
                data-doc-id={projects.docId}
                data-testId= "project-action"
                role="button"
                className={
                    active === project.projectId
                    ? 'active sidebar__project'
                    : 'sidebar__project'
                }
                
                onKeyDown   ={() => {
                    setActive(Project.projectId);
                    setSelectedProject(project.projectId);
                }}

                onClick={() => {
                    setActive(Project.projectId);
                    setSelectedProject(project.projectId);
                }}
            >I am a project</li>
        ))
    )
}