"use client"

import React from 'react'
import { PiHandWaving } from 'react-icons/pi'
import { motion } from "framer-motion"

export default function WavingHandIcon() {
    return (
        <motion.div
            animate={{ rotate: [0, 45, 0, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
        >
            <PiHandWaving />
        </motion.div>
    )
}
