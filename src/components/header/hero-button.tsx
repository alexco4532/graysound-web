import { MOBILE_MAX_WIDTH } from '@/config/constants';
import useChatwootStore from '@/hooks/use-chatwoot-store';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';

function HeroButton() {
    const [mounted, setMounted] = useState(false);
    const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${MOBILE_MAX_WIDTH}px)` });
    const chatwootIsReady = useChatwootStore((state) => state.isReady);

    useEffect(() => setMounted(true), []);


    const openLiveChat = () => {
        if (!chatwootIsReady) return;
        (window as any).$chatwoot.toggle("open");
    }


    if (!mounted) return null;
    return (
        <div id='portfolio' className="relative">
            {isTabletOrMobile ? <div className="absolute ml-10 -mt-2 -z-10 px-10 py-6 flex items-center justify-between p-2 rounded-full border border-transparent bg-transparent">
                <p className="font-bold text-base xl:font-extrabold lg:text-sm text-transparent">
                    Porozmawiajmy
                </p>
                <ArrowLongRightIcon className="h-5 w-5 flex-none ml-1 stroke-[3px] text-transparent lg:stroke-[3px]" />
            </div> : null}
            <button onClick={openLiveChat} className="mt-10 mx-auto flex items-center justify-between px-8 py-4 bg-gradient-to-r from-[#E6B573] to-[#CC9852] lg:hover:scale-105 rounded-full lg:mx-0 lg:py-4 lg:px-6 lg:mt-8 cursor-none lg:cursor-pointer lg:duration-300">
                {isTabletOrMobile ? <>
                    <p className="font-bold text-base xl:font-extrabold text-bodyBg lg:text-sm">
                        Porozmawiajmy
                    </p>
                    <ArrowLongRightIcon className="h-5 w-5 flex-none ml-1 stroke-[3px] text-bodyBg lg:stroke-[3px]" />
                </> : <p className="font-bold text-base xl:font-extrabold text-bodyBg lg:text-sm">
                    Porozmawiajmy o Twoim projekcie
                </p>}
            </button>
        </div>
    )
}

export default HeroButton