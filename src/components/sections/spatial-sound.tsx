import React from 'react'
import { SpeakerWaveIcon } from '@heroicons/react/24/solid'
import Second3d from '../icons/second-3d'
import { useOpenAudioPlayer } from '@/hooks/use-open-audio-player';

const SPATIAL_PROJECT_ID = 5;

function SpatialSoundSection() {
    //Custom hook to get openAudioPlayer function
    const openAudioPlayer = useOpenAudioPlayer();

    const handleOpenAudioPlayer = () => {
        openAudioPlayer(SPATIAL_PROJECT_ID);
    };

    return (
        <section className='mt-36 px-1 flex flex-col justify-center lg:flex-row-reverse lg:justify-between lg:items-center '>
            {/* Animation Container */}
            <div className='w-[100%] mx-auto max-w-[420px]  xl:max-w-[420px] lg:mx-0 lg:mr-14 '>
                <div className='animate-pulse-slow'>
                    {/* 3D icon component */}
                    <Second3d />
                </div>
            </div>
            {/* Text Container */}
            <article className='lg:max-w-[460px] mx-auto lg:mx-0 lg:ml-8'>
                {/* Section Heading */}
                <h1 className='text-center md:mx-auto lg:mx-0 text-headerSection md:text-3xl font-extrabold mt-[32px] md:mt-[48px] xl:mt-0 lg:text-left xl:text-4xl md:w-[432px] xl:pr-14 lg:w-[90%] xl:w-full'>Dźwięk przestrzenny to nasza pasja</h1>
                {/* Description */}
                <p className='text-center md:text-center md:mx-auto text-sm md:text-base small:text-[14px] text-textGray mt-[12px] xl:mt-[16px] font-medium md:w-[462px] lg:text-left lg:pr-9  lg:w-full'>W GraySound wykorzystujemy zaawansowaną technikę binauralną 3D, dzięki której kreujemy fascynującą rzeczywistość, przenosząc słuchacza w sam środek wydarzeń. Każdy dźwięk jest starannie przemyślany i żyję wokół Ciebie, tworząc wrażenie, że przenosisz się do zupełnie nowego świata. Pozwól Twoim słuchaczom nie tylko słuchać, ale prawdziwie doświadczać Twojej historii z GraySound</p>
                {/* Button to open the audio player */}
                <div className="mt-[40px]">
                    <button className=" mx-auto flex items-center justify-between px-8 py-4 bg-gradient-to-r from-[#E6B573] to-[#CC9852] rounded-full lg:mx-0 xl:py-4 xl:px-6 xl:mt-10 lg:hover:scale-105 lg:duration-300 cursor-none lg:cursor-pointer " onClick={handleOpenAudioPlayer}>
                        <h2 className="text-base font-extrabold text-bodyBg xl:text-sm">
                            Fragment projektu 3D
                        </h2>
                        <SpeakerWaveIcon className="w-4 h-4 ml-2 text-bodyBg xl:ml-1 xl:w-4 xl:h-4" />
                    </button>
                </div>
            </article>
        </section>
    )
}

export default SpatialSoundSection;