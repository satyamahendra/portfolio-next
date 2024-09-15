import React from 'react'
import { experienceItems } from './experience.data'
import Image from 'next/image'

export default function Experience() {
    return (
        <div className='text-justify space-y-8 p-8'>
            <h1>Experience</h1>

            <ul className='flex flex-col gap-8'>
                {experienceItems.map((exp, index) => (
                    <li key={index}>
                        <div className='flex gap-4'>
                            <div className='h-24 aspect-square p-4 rounded-xl bg-gray-50 flex items-center justify-center'>
                                <Image alt='logo' src={exp.logo} />
                            </div>
                            <div className='flex flex-col gap-1 w-full'>
                                <p>{exp.name}</p>
                                <p className='text-gray-400 text-xs'>{exp.startDate} - {exp.endDate}</p>
                                <div className=' text-xs border-b pb-2 flex w-full justify-between'>
                                    <div className='text-gray-600 flex gap-2 items-center'>
                                        <div className='h-2 rounded-full aspect-square bg-blue-300'></div>
                                        {exp.job} - {exp.type}
                                    </div>
                                </div>
                                <p className='text-xs'>{exp.desc}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
