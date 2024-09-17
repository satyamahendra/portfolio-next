import AnimatedGreeting from '@/components/AnimatedGreeting'
import WavingHandIcon from '@/components/WavingHandIcon'
import React from 'react'
import { greetingsArray } from './About.data'

export default function About() {
    return (
        <div className='text-justify space-y-8 p-8'>
            <h1>About</h1>

            <div className='text-center text-2xl flex items-center gap-2'>
                <WavingHandIcon />
                <AnimatedGreeting displayString={greetingsArray} interval={300} />!
            </div>

            <p>
                I&apos;m Ida Bagus Satya Mahendra, a frontend web developer skilled in HTML, CSS, JavaScript, TypeScript, ReactJS, TailwindCSS, and NextJS. I&apos;m currently learning full stack development with tools like MongoDB, PostgreSQL, PrismaORM, and ExpressJS.
            </p>

            <p>
                I also have a good grasp of UI/UX, helping me build responsive and visually appealing web apps. My frontend skills include working with APIs, state management, Git, and debugging.
            </p>

            <p>
                My goal is to create impactful apps that helps a bunch of people and, one day, launch a SaaS that can buy me lambos and ferraris. I know my journey is still long, But I believe along the way I will learn with and from others, spreading positivity, work with amazing individuals while avoiding dramas and burning bridges. Thanks!
            </p>
        </div>
    )
}
