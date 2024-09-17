import { useEffect, useState } from "react";

export function useDisplayStringInterval(
    displayString: string[],
    interval: number
) {

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prev => {
                return prev === displayString.length - 1 ? 0 : prev + 1
            })
        }, interval)
        return () => clearInterval(intervalId)
    })

    return displayString[index]
}