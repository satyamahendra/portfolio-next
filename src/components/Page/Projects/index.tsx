import React from 'react'
import { projectsItems } from './projects.data'
import ProjectItem from './components/ProjectItem'

export default function Projects() {
    return (
        <div className='text-justify space-y-8 p-8'>
            <h1>Projects</h1>

            <div className='flex flex-col gap-8'>
                {projectsItems.map((project, index) => (
                    <ProjectItem key={index} project={project} />
                ))}
            </div>
        </div>
    )
}
