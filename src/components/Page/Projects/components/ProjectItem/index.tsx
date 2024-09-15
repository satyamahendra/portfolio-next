"use client"

import React from 'react'
import { Project } from '../../projects.type'
import Image from 'next/image'

interface ProjectItemProps {
    project: Project
}

export default function ProjectItem({ project }: ProjectItemProps) {
    return (
        <div className={`${project.bgColor} relative h-60 group flex gap-2 border rounded-xl overflow-hidden`}>
            <div className={`flex w-[85%] ml-auto`}>
                <Image alt='project-image-preview' src={project.image} className='object-contain mt-auto' />
            </div>

            <div className='absolute top-0 left-0 w-full h-full p-2 flex flex-col justify-between'>
                <h1 className='text-sm px-3 py-1 bg-black rounded-lg w-fit text-white'>{project.title}</h1>
            </div>

            <div className='p-4 absolute flex pt-12 text-xs text-white top-0 left-0 bg-black w-full h-full opacity-0 group-hover:opacity-100 group-hover:bg-opacity-80 group-hover:backdrop-blur-sm duration-200'>
                <div className='flex items-center gap-2 flex-col w-1/2 h-full'>
                    <h1 className='font-semibold border-b'>Features</h1>
                    <div className='flex flex-col items-center gap-1'>
                        {project.features.map((feature, index) => (
                            <p key={index} className='flex items-center gap-2'>
                                {feature}
                            </p>
                        ))}
                    </div>
                </div>
                <div className='flex items-center gap-2 flex-col w-1/2 h-full'>
                    <h1 className='font-semibold border-b'>Techstack</h1>
                    <div className='flex flex-col items-center gap-1'>
                        {project.techstack.map((tech, index) => (
                            <p key={index} className='flex items-center gap-2'>
                                {tech}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
