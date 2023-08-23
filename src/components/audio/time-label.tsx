import React, { useEffect, useState } from "react"
import { useGlobalAudioPlayer } from "react-use-audio-player"


// Function to format seconds to mm:ss or hh:mm:ss
const formatTime = (seconds: number) => {
    if (seconds === Infinity) {
        return "--"
    }
    const floored = Math.floor(seconds)
    let from = 14
    let length = 5

    // Check if time is more than an hour
    if (floored >= 3600) {
        from = 11
        length = 8
    }

    // Convert time to a formatted string
    return new Date(floored * 1000).toISOString().substr(from, length)
}

export const TimeLabel = ({ children }: { children: React.ReactNode }) => {
    const [pos, setPos] = useState(0)
    const { duration, getPosition } = useGlobalAudioPlayer()

    // useEffect to update the audio position
    useEffect(() => {
        const i = setInterval(() => {
            setPos(getPosition())
        }, 500)

        return () => clearInterval(i)
    }, [getPosition])

    return <div className="text-[12px] flex justify-between items-center mt-5 gap-x-2">
        {/* Current position of audio */}
        <div className="max-w-[30px]">{`${formatTime(pos)}`}</div>
        {/* Audio seek bar component */}
        {children}
        {/* Total duration of audio */}
        <div>{`${formatTime(duration)}`}</div>
    </div>
}