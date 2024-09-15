import React from 'react'
import { techstackItems } from './skills.data'
import SkillCard from './components/SkillCard'

export default function Skills() {
    return (
        <div className='text-justify space-y-8 p-8'>
            <h1>Skills</h1>
            <div>
                {techstackItems.map((tech, index) => (
                    <SkillCard key={index} tech={tech} />
                ))}
            </div>
        </div>
    )
}
