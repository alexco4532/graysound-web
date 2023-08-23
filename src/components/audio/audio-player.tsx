import { useEffect, useState } from 'react'
import usePlayerStore from '@/hooks/use-player-store';
import AudioTrackInfo from './audio-track-info';
import AudioControls from './audio-controls';
import AudioProgressBar from './audio-progress-bar';
import CloseButton from './close-button';

function AudioPlayer() {
    const isPlayerOpen = usePlayerStore((state) => state.isOpen);
    const [hasWindow, setHasWindow] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setHasWindow(true);
        }

        return () => {
            setHasWindow(false);
        }
    }, []);

    if (!hasWindow) return null;
    if (!isPlayerOpen) return null;

    return (
        <div className="fixed phones:top-[70px] md:bottom-0 px-6 md:px-20 z-[999] w-full pointer-events-none bg-[#0b0b14fa] backdrop-blur-sm xl:duration-500">
            <div className="md:mx-auto">
                <div className='rounded-2xl px-4 w-full max-w-6xl py-3 relative md:mx-auto border-block  pointer-events-auto'>
                    <div className="flex justify-center items-center relative">
                        <CloseButton />
                        <AudioTrackInfo />
                        <AudioControls />
                        <AudioProgressBar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AudioPlayer;