import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { useGlobalAudioPlayer, } from 'react-use-audio-player';
import { AudioControls } from '../audio/audio-controls';
import AudioSeekBar from '../audio/audio-seek-bar';
import { TimeLabel } from '../audio/time-label';
import Stars from './stars';
import EmpikGo from '../icons/empik-go';
import { ArrowTopRightOnSquareIcon, BackwardIcon, ForwardIcon, PauseCircleIcon, PlayCircleIcon, XCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';
import NextAudio from '../icons/next-audio';
import usePlayerStore from '@/hooks/use-player-store';
import PrevAudio from '../icons/prev-audio';

const tracks = [{ name: "Skóra", rating: 4.7, amount: "555", url: "https://graysoundlab.b-cdn.net/v1/skora.mp3", photoUrl: "/skora-small.png" }, { name: "Ukochane dziecko", rating: 4.8, amount: "2k", url: "https://graysoundlab.b-cdn.net/v1/ukochanedziecko.mp3", photoUrl: "/ukochane-dziecko-small.png" }, { name: "Hydropolis", rating: 4.6, amount: "408", url: "https://graysoundlab.b-cdn.net/v1/hydropolis.mp3", photoUrl: "/hydropolis-small.png" }, { name: "Stacja", rating: 4.6, amount: "503", url: "https://graysoundlab.b-cdn.net/v1/stacja.mp3", photoUrl: "/stacja-small.png" }, { name: "Szum", rating: 4.7, amount: "1.1k", url: "https://graysoundlab.b-cdn.net/v1/szum.mp3", photoUrl: "/szum-small.png" }, { name: "3D demo projekt", rating: 0, amount: "-", url: "https://graysoundlab.b-cdn.net/v1/3d.mp3", photoUrl: "/graysound-small.png" }];

function Modal() {
    const trackIndex = usePlayerStore((state) => state.trackIndex);
    const setTrackIndex = usePlayerStore((state) => state.setTrackIndex);
    const closePlayer = usePlayerStore((state) => state.closePlayer);
    const helloGithub = "";
    const [hasWindow, setHasWindow] = useState(false);
    const { load, playing, play, pause, stop, seek, duration, getPosition } = useGlobalAudioPlayer();

    useEffect(() => {

        if (typeof window !== 'undefined') {
            setHasWindow(true);
        }

        return () => {
            setHasWindow(false);
        }
    }, []);

    const loadAudio = (url: string) => {
        if (!url) return;
        load(url, {
            autoplay: true,
            html5: true,
            format: 'mp3',
            initialVolume: 1,
        })
    }

    const loadNextAudio = () => {
        if (trackIndex >= tracks.length - 1) return;
        loadAudio(tracks[trackIndex + 1].url);
        return setTrackIndex(trackIndex + 1);
    }

    const loadPrevAudio = () => {
        if (trackIndex < 1) return;
        loadAudio(tracks[trackIndex - 1].url);
        return setTrackIndex(trackIndex - 1);
    }

    const nextTenSec = () => {
        const currentPosition = getPosition();
        seek(currentPosition + 10);
    };

    const prevTenSec = () => {
        const currentPosition = getPosition();
        seek(currentPosition - 10);
    }

    const handleClosingModal = () => {
        stop();
        return closePlayer();
    }
    //bg-[#121221f5] border-[#1e1e31]
    //bg-[#0b0b14fa] border-block

    if (!hasWindow) return null;

    return (
        <div className=' bg-[#0b0b14] rounded-2xl p-4 w-full backdrop-blur-sm relative md:mx-auto md:max-w-lg lg:ml-10 border border-block  pointer-events-auto xl:opacity-50 xl:hover:opacity-100 xl:duration-500'>
            <div className='h-[16px] absolute right-0 top-0 mt-4 mr-4 cursor-pointer' onClick={handleClosingModal}>
                <XMarkIcon className='w-[20px] h-[20px] text-gray-400 stroke-gray-400 stroke-[1px]' />
            </div>
            <div className='flex'>
                <div className=''>
                    <img src={tracks[trackIndex].photoUrl} className='w-12 h-12 border border-gray-600 rounded-lg' />
                </div>
                <div className='flex flex-col justify-between ml-2'>
                    <div className='-mt-[2px]'>
                        <h2 className='text-lg font-semibold'>{tracks[trackIndex].name}</h2>
                    </div>
                    <div className='flex -ml-[1px] -mt-[2px] items-center'>
                        {tracks[trackIndex].rating === 0 ? null : <><Stars number={5} />
                            <p className='text-sm ml-[4px] font-semibold text-white pt-[3px]'>{tracks[trackIndex].rating}/5<span className='text-[12px] font-medium text-gray-500'>{` (${tracks[trackIndex].amount})`}</span></p></>}

                    </div>
                </div>
            </div>
            <TimeLabel>
                <AudioSeekBar />
            </TimeLabel>
            <div className="flex justify-between mt-4 px-0 items-center">
                <div className="w-5 h-5 cursor-pointer" onClick={loadPrevAudio}>
                    <PrevAudio />
                </div>
                <div className='flex items-center w-[148px] justify-between'>
                    <div className='flex flex-col items-center cursor-pointer text-gray-400' onClick={prevTenSec}>
                        <BackwardIcon className='w-[25px] h-[25px]' />
                        <p className='font-black text-[11px] -mt-1 select-none'>10</p>
                    </div>
                    <div onClick={() => (playing ? pause() : play())}>
                        {playing ? <PauseCircleIcon className="w-14 h-14 text-[#CC9852] cursor-none lg:cursor-pointer" /> : <PlayCircleIcon className="w-14 h-14 text-[#CC9852] cursor-none lg:cursor-pointer" />}
                    </div>
                    <div className='flex flex-col items-center cursor-pointer text-gray-400' onClick={nextTenSec}>
                        <ForwardIcon className='w-[25px] h-[25px]' />
                        <p className='font-black text-[11px] -mt-1 select-none'>10</p>
                    </div>
                </div>
                <div className="w-5 h-5 cursor-pointer" onClick={loadNextAudio}>
                    <NextAudio />
                </div>
            </div>
        </div>
    )
}

export default Modal