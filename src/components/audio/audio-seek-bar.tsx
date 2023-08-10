import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useGlobalAudioPlayer } from 'react-use-audio-player'

function AudioSeekBar() {
    const { playing, getPosition, duration, seek } = useGlobalAudioPlayer()
    const [pos, setPos] = useState(0)
    const frameRef = useRef<number>()
    const seekBarElem = useRef<HTMLDivElement>(null)
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1280px)" });

    useEffect(() => {
        const animate = () => {
            setPos(getPosition())
            frameRef.current = requestAnimationFrame(animate)
        }

        frameRef.current = window.requestAnimationFrame(animate)

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current)
            }
        }
    }, [])



    const goTo = useCallback(
        (event: React.MouseEvent<Element, MouseEvent>) => {
            const { pageX: eventOffsetX } = event
            console.log(eventOffsetX);
            if (seekBarElem.current) {
                const elementOffsetX = seekBarElem.current.offsetLeft;
                const elementWidth = seekBarElem.current.clientWidth;
                let percent;
                if (isTabletOrMobile) {
                    percent = ((eventOffsetX - 20) - elementOffsetX) / elementWidth;
                } else {
                    percent = ((eventOffsetX - 310) - elementOffsetX) / elementWidth;
                }
                // const percent = ((eventOffsetX - 310) - elementOffsetX) / elementWidth;
                seek(percent * duration);
            }
        },
        [duration, playing, seek]
    )

    if (duration === Infinity) return null;

    return (
        <div
            ref={seekBarElem}
            className='bg-gray-500 w-full max-w-full h-2 rounded-full '
        >
            <div
                style={{ width: `${(pos / duration) * 100}%` }}
                className="bg-gradient-to-r from-[#E6B573] to-[#CC9852] border-r-[8px] border-gray-300 h-2 rounded-full rounded-r-none "
            />
        </div>
    )


}

export default AudioSeekBar