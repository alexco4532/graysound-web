import { MOBILE_MAX_WIDTH } from '@/config/constants';
import useChatwootStore from '@/hooks/use-chatwoot-store';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import React from 'react'
import { useMediaQuery } from 'react-responsive';

function HeroButton() {
    const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${MOBILE_MAX_WIDTH}px)` });
    const chatwootIsReady = useChatwootStore((state) => state.isReady);

    const openLiveChat = () => {
        if (!chatwootIsReady) return;
        (window as any).$chatwoot.toggle("open");
    }
    return (
        <div className="relative">
            {isTabletOrMobile ? <div className="absolute ml-10 -mt-2 -z-10 px-10 py-6 flex items-center justify-between p-2 rounded-full border border-[#cc975225] animate-ping-btn">
                <h2 className="font-bold text-base xl:font-extrabold lg:text-sm text-transparent">
                    Porozmawiajmy
                </h2>
                <ArrowLongRightIcon className="h-5 w-5 flex-none ml-1 stroke-[3px] text-transparent lg:stroke-[3px]" />
            </div> : null}
            <button onClick={openLiveChat} className="mt-10 mx-auto flex items-center justify-between px-8 py-4 bg-gradient-to-r from-[#E6B573] to-[#CC9852] hover:scale-105 rounded-full lg:mx-0 lg:py-4 lg:px-6 lg:mt-8 cursor-none lg:cursor-pointer duration-300">
                {isTabletOrMobile ? <>
                    <h2 className="font-bold text-base xl:font-extrabold text-bodyBg lg:text-sm">
                        Porozmawiajmy
                    </h2>
                    <ArrowLongRightIcon className="h-5 w-5 flex-none ml-1 stroke-[3px] text-bodyBg lg:stroke-[3px]" /></> : <><h2 className="font-bold text-base xl:font-extrabold text-bodyBg lg:text-sm">
                        Porozmawiajmy o Twoim projekcie
                    </h2></>}
            </button>
        </div>
    )
}

export default HeroButton