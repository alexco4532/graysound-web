import React, { useEffect, useRef, useState } from 'react'
import { useGlobalAudioPlayer } from 'react-use-audio-player'

function AudioSeekBar() {
    const { getPosition, duration } = useGlobalAudioPlayer();
    const [pos, setPos] = useState(0);
    const frameRef = useRef<number>();
    const seekBarElem = useRef<HTMLDivElement>(null);


    // useEffect to handle animation and cleanup
    useEffect(() => {
        const animate = () => {
            // Update the current position of the audio
            setPos(getPosition());

            // Request the next frame
            frameRef.current = requestAnimationFrame(animate);
        }

        // Start the animation
        frameRef.current = window.requestAnimationFrame(animate);

        return () => {
            // Cancel any pending animation frame request
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        }
    }, []);

    if (duration === Infinity) return null;

    return (
        // Seek bar container
        <div
            ref={seekBarElem}
            className='bg-gray-500 w-full max-w-full h-2 rounded-full'
        >
            {/* Filled portion of the seek bar */}
            <div
                style={{ width: `${(pos / duration) * 100}%` }}
                className="bg-gradient-to-r from-[#E6B573] to-[#CC9852] border-r-[8px] border-gray-300 h-2 rounded-full rounded-r-none"
            />
        </div>
    );
}

export default AudioSeekBar;