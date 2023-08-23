import usePlayerStore from '@/hooks/use-player-store';
import { XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react'
import { useGlobalAudioPlayer } from 'react-use-audio-player';


function CloseButton() {
    const { stop } = useGlobalAudioPlayer();
    const closePlayer = usePlayerStore((state) => state.closePlayer);

    const handleClosingAudioPlayer = () => {
        stop();
        closePlayer();
    }

    return (
        <div className='h-[16px] absolute right-0 md:left-0 top-0 mt-1 lg:mr-4 phones:-mr-5 md:mt-2 md:-ml-16 lg:-ml-0 pointer-events-none' onClick={handleClosingAudioPlayer}>
            <XMarkIcon className='w-[20px] h-[20px] text-gray-400 stroke-gray-400 stroke-[1px] cursor-pointer pointer-events-auto' />
        </div>
    )
}

export default CloseButton;