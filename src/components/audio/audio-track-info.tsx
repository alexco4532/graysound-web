import { AudioProject } from '@/data/audio-tracks';
import React from 'react';
import Stars from '../reviews/stars';
import audioProjectsList from '@/data/audio-tracks';
import usePlayerStore from '@/hooks/use-player-store';

const AUDIO_TRACK_RATING = 5;

function AudioTrackInfo() {
    const audioIndex = usePlayerStore((state) => state.audioIndex);

    return (
        <div id='audio-track-info' className='hidden absolute left-8 lg:flex'>
            {/* Thumbnail of the audio track */}
            <div className=''>
                <img src={audioProjectsList[audioIndex].photoUrl} className='w-12 h-12 border border-gray-600 rounded-lg' />
            </div>
            <div className='flex flex-col justify-between ml-2'>
                {/* Name of the audio track */}
                <div className='-mt-[2px]'>
                    <h2 className='text-lg font-semibold'>{audioProjectsList[audioIndex].name}</h2>
                </div>
                <div className='flex -ml-[1px] -mt-[2px] items-center'>
                    {audioProjectsList[audioIndex].rating === 0 ? null : <>
                        {/* Display stars based on rating */}
                        <Stars number={AUDIO_TRACK_RATING} />
                        {/* Rating as float and number of reviews */}
                        <p className='text-sm ml-[4px] font-semibold text-white pt-[3px]'>{audioProjectsList[audioIndex].rating}/5<span className='text-[12px] font-medium text-gray-500'>{` (${audioProjectsList[audioIndex].amount})`}</span></p>
                    </>}
                </div>
            </div>
        </div>
    )
}

export default AudioTrackInfo;