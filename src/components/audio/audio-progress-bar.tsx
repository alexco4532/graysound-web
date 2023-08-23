import React from 'react'
import { TimeLabel } from './time-label'
import AudioSeekBar from './audio-seek-bar'


function AudioProgressBar() {
    return (
        <div className='hidden lg:block absolute right-9 w-[300px] h-full'>
            <TimeLabel>
                <AudioSeekBar />
            </TimeLabel>
        </div>
    )
}

export default AudioProgressBar