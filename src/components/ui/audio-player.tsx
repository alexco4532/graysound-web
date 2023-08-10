import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { useGlobalAudioPlayer, } from 'react-use-audio-player';
import { AudioControls } from '../audio/audio-controls';
import AudioSeekBar from '../audio/audio-seek-bar';
import { TimeLabel } from '../audio/time-label';

const tracks = [{ name: "Skóra", url: "https://graysoundlab.b-cdn.net/v1/skora.mp3" }, { name: "Hydropolis", url: "https://graysoundlab.b-cdn.net/v1/hydropolis.mp3" }, { name: "Stacja", url: "https://graysoundlab.b-cdn.net/v1/stacja.mp3" }, { name: "Szum", url: "https://graysoundlab.b-cdn.net/v1/szum.mp3" }, { name: "Ukochane dziecko", url: "https://graysoundlab.b-cdn.net/v1/ukochanedziecko.mp3" }];

const AudioPlayer = ({ trackIndex = 0 }: { trackIndex: number }) => {
    const [isOpen, setIsOpen] = useState(true)
    const [hasWindow, setHasWindow] = useState(false);
    const { load, playing } = useGlobalAudioPlayer();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setHasWindow(true);
            // loadAudio(tracks[trackIndex].url);
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

    if (!hasWindow) return null;

    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="z-[9999] bg-white">
            <Dialog.Panel className="bg-white">
                <Dialog.Title>{tracks[trackIndex].name}</Dialog.Title>
                <Dialog.Description>
                    Play this audio now
                </Dialog.Description>
                <AudioControls />
                <AudioSeekBar />
                <TimeLabel />



                <button onClick={() => setIsOpen(false)}>Cancel</button>
            </Dialog.Panel>
        </Dialog>
    )
}

export default AudioPlayer;