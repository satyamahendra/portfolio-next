"use client"

import { useDisplayStringInterval } from '@/hooks/useDisplayStringInterval'
import React from 'react'
import { AnimatedGreetingProps } from './AnimatedGreeting.type'

export default function AnimatedGreeting({ displayString, interval }: AnimatedGreetingProps) {

    const display = useDisplayStringInterval(displayString, interval)

    return (
        <div>{display}</div>
    )
}
