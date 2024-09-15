"use client"

import React, { useEffect, useState } from 'react'
import { PiList, PiSquareFill, PiX } from 'react-icons/pi'
import { AnimatePresence, motion } from "framer-motion"
import { navItems, socialsItems } from '@/constants/nav'
import Link from 'next/link'

export default function Navbar() {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleToggleOpen = () => {
        setIsOpen(prev => !prev)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setIsOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)

        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    return (
        <>
            <div className='fixed top-4 right-4 z-20 sm:hidden block'>
                <button onClick={handleToggleOpen} className='rounded-lg p-2 bg-white text-2xl bg-opacity-70 backdrop-blur-sm'>
                    {isOpen ? <PiX /> : <PiList />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 100 }}
                    exit={{ y: -10, opacity: 0 }}
                    className='fixed flex-col top-0 left-0 w-screen h-screen bg-white flex items-center justify-between z-10'
                >
                    <div className='mt-4 text-xs text-gray-400 text-center flex items-center justify-center flex-col gap-2'>
                        <PiSquareFill className='rotate-45 text-blue-300' />
                        satya mahendra - {new Date().getFullYear()}
                    </div>

                    <ul className='flex flex-col gap-4'>
                        {navItems.map((nav, index) => (
                            <li key={index} className='w-full text-2xl'>
                                <Link onClick={handleToggleOpen} href={nav.url} className='group text-gray-500 hover:text-black items-center flex justify-between'>
                                    <span>{nav.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <ul className='flex justify-between text-gray-400 p-4 gap-8 text-2xl'>
                        {socialsItems.map((social, index) => (
                            <li key={index}>
                                <a href={social.url} target='_blank' className='hover:text-blue-600 duration-200'>{social.icon}</a>
                            </li>
                        ))}
                    </ul>
                </motion.div>}
            </AnimatePresence>
        </>
    )
}
