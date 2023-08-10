import { BackwardIcon, ForwardIcon, PauseCircleIcon, PlayCircleIcon } from "@heroicons/react/24/solid"
import React, { useEffect, useState, FunctionComponent } from "react"
import { useGlobalAudioPlayer } from "react-use-audio-player"
import NextAudio from "../icons/next-audio"
import PrevAudio from "../icons/prev-audio"

export const AudioControls: FunctionComponent<{}> = () => {
    const {
        play,
        pause,
        playing,
    } = useGlobalAudioPlayer()

    // TODO
    // Add +10/-10 seconds btns
    // Add playNextTrack btns

    return (
        <div className="flex justify-between mt-4 px-16 items-center">
            <div className="w-6 h-6 rotate-180">
                <NextAudio />
            </div>
            <div onClick={() => (playing ? pause() : play())}>
                {playing ? <PauseCircleIcon className="w-14 h-14 text-[#CC9852] cursor-none" /> : <PlayCircleIcon className="w-14 h-14 text-[#CC9852] cursor-none" />}
            </div>
            <div className="w-6 h-6">
                <NextAudio />
            </div>
        </div>
    )
}