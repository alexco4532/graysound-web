import React from 'react'
import PrevAudio from '../icons/prev-audio'
import { BackwardIcon, ForwardIcon, PauseCircleIcon, PlayCircleIcon } from '@heroicons/react/24/solid'
import NextAudio from '../icons/next-audio'
import { useGlobalAudioPlayer } from 'react-use-audio-player'
import usePlayerStore from '@/hooks/use-player-store'
import audioProjectsList from '@/data/audio-tracks'

const TEN_SECONDS = 10;

function AudioControls() {
    const { load, playing, play, pause, stop, seek, getPosition } = useGlobalAudioPlayer();
    const audioIndex = usePlayerStore((state) => state.audioIndex);
    const setAudioIndex = usePlayerStore((state) => state.setAudioIndex);

    // Function to load a specific audio file
    const loadAudio = (url: string) => {
        const link = `${process.env.NEXT_PUBLIC_CDN_URL}${url}`;
        if (!link) return;
        load(link, {
            autoplay: true,
            html5: true,
            format: 'mp3',
            initialVolume: 1,
        })
    }

    // Function to load next audio in the list
    const loadNextAudio = () => {
        const nextAudioIndex = audioIndex + 1;
        if (nextAudioIndex >= audioProjectsList.length) return;
        loadAudio(audioProjectsList[nextAudioIndex].url);
        setAudioIndex(nextAudioIndex);
    }

    // Function to load previous audio in the list
    const loadPrevAudio = () => {
        const prevAudioIndex = audioIndex - 1;
        if (prevAudioIndex < 0) return;
        loadAudio(audioProjectsList[prevAudioIndex].url);
        setAudioIndex(prevAudioIndex);
    }

    // Function to skip the audio by a given number of seconds
    const seekBySeconds = (seconds: number) => {
        const currentPosition = getPosition();
        seek(currentPosition + seconds);
    }

    // Function to toggle between play and pause
    const playingToggle = () => {
        return playing ? pause() : play();
    }

    return (
        <div className='flex phones:justify-center md:justify-between px-0 items-center min-w-[320px]'>
            {/* Previous audio button */}
            <div className="w-5 h-5 cursor-pointer phones:mr-6" onClick={loadPrevAudio}>
                <PrevAudio />
            </div>
            <div className='flex items-center w-[148px] justify-between'>
                {/* Backwards button */}
                <div className='flex flex-col items-center cursor-pointer text-gray-400' onClick={() => seekBySeconds(-TEN_SECONDS)}>
                    <BackwardIcon className='w-[25px] h-[25px]' />
                    <p className='font-black text-[11px] -mt-1 select-none'>10</p>
                </div>
                {/* Play or pause button */}
                <div onClick={playingToggle}>
                    {playing ? <PauseCircleIcon className="w-14 h-14 text-[#CC9852] cursor-none lg:cursor-pointer" /> : <PlayCircleIcon className="w-14 h-14 text-[#CC9852] cursor-none lg:cursor-pointer" />}
                </div>
                {/* Forward button */}
                <div className='flex flex-col items-center cursor-pointer text-gray-400' onClick={() => seekBySeconds(TEN_SECONDS)}>
                    <ForwardIcon className='w-[25px] h-[25px]' />
                    <p className='font-black text-[11px] -mt-1 select-none'>10</p>
                </div>
            </div>
            {/* Next audio button */}
            <div className="w-5 h-5 cursor-pointer phones:ml-6" onClick={loadNextAudio}>
                <NextAudio />
            </div>
        </div>
    )
}

export default AudioControls;