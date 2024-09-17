import React from 'react'
import Link from 'next/link'
import { PiCaretRight, PiInfo, PiSquareFill } from 'react-icons/pi'
import { navItems, socialsItems } from '@/constants/nav'

export default function Sidebar() {
    return (
        <aside className='flex flex-col p-4 h-full'>
            <figure className='w-14 h-14 bg-gray-800 rounded-xl animate-pulse mx-auto text-white font-bold flex justify-center items-center -rotate-90'>
                {"</>"}
            </figure>

            <h1 className='flex flex-col text-xl mt-8'>
                <span className='text-xs text-gray-500'>Ida Bagus</span>
                Satya Mahendra
                <span className='self-end text-xs text-blue-400 flex items-center gap-1'>
                    <div className='h-1 aspect-square rounded-full bg-blue-400'></div>
                    Frontend Web Dev.
                </span>
            </h1>

            <ul className='flex justify-between text-2xl mt-6 text-gray-400'>
                {socialsItems.map((social, index) => (
                    <li key={index}>
                        <a href={social.url} target='_blank' className='hover:text-blue-400 duration-200'>{social.icon}</a>
                    </li>
                ))}
            </ul>

            <ul className='flex flex-col gap-4 mt-12 w-full'>
                {navItems.map((nav, index) => (
                    <li key={index} className='w-full'>
                        <Link href={nav.url} className='group w-full text-gray-500 hover:text-black items-center flex justify-between'>
                            <span>{nav.title}</span>
                            <PiCaretRight className='group-hover:pr-0 pr-4 duration-200' />
                        </Link>
                    </li>
                ))}
            </ul>

            <div className='mt-auto text-xs text-gray-400 text-center flex items-center justify-center flex-col gap-2'>
                <PiSquareFill className='rotate-45 text-blue-300' />
                satya mahendra - {new Date().getFullYear()}
            </div>

            <a href='https://satyamahendra.gumroad.com/l/deadsimpleportfolio' target='_blank' className='text-xs hover:underline text-gray-400 text-center mt-2'>like the template? get it here!</a>
        </aside>
    )
}
