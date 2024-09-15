import WavingHandIcon from '@/components/WavingHandIcon'
import React from 'react'


export default function About() {
    return (
        <div className='text-justify space-y-8 p-8 text-sm'>
            <h1>About</h1>

            <div className='text-center text-2xl flex items-center gap-2'>
                Hello!
                <WavingHandIcon />
            </div>

            <p>
                I&apos;m Ida Bagus Satya Mahendra, a frontend web developer skilled in HTML, CSS, JavaScript, TypeScript, ReactJS, TailwindCSS, and NextJS. I&apos;m currently learning full stack development with tools like MongoDB, PostgreSQL, PrismaORM, and ExpressJS.
            </p>

            <p>
                I also have a good grasp of UI/UX, helping me build responsive and visually appealing web apps. My frontend skills include working with APIs, state management, Git, and debugging.
            </p>

            <p>
                My goal is to create impactful apps and, one day, launch a SaaS that brings success. I believe in staying humble, learning with and from others along the way, and spreading positivity. Thanks!
            </p>
        </div>
    )
}
