
import React from 'react'
import { Techstack } from '../../skills.type'

interface SkillCardProps {
    tech: Techstack
}

export default function SkillCard({ tech }: SkillCardProps) {

    return (
        <div
            className='py-3 flex items-center gap-6 border-b last:border-none'
        >
            <div className={`${tech.color} h-full text-3xl`}>
                {tech.icon}
            </div>
            <div>
                <h3>
                    {tech.name}
                </h3>
                <p className='text-gray-400 text-sm'>{tech.desc}</p>
            </div>
        </div>
    )
}
