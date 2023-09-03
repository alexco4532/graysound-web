import React from 'react';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid';


function LiveChatButton({ openLiveChat }: { openLiveChat: () => void }) {
    return (
        <div onClick={openLiveChat} className="mx-auto flex flex-col items-center px-8 py-4 text-center cursor-pointer group" >
            <h2 className="text-base font-extrabold text-white lg:group-hover:text-gray-400 xl:text-sm">
                Lub porozmawiajmy
            </h2>
            <div className='flex items-center mt-1'>
                <h2 className="text-base font-extrabold text-white lg:group-hover:text-gray-400 xl:text-sm">
                    na Live Chat
                </h2>
                <ChatBubbleBottomCenterTextIcon className='w-5 h-5 ml-2 text-white lg:group-hover:text-gray-400' />
            </div>
        </div>
    )
}

export default LiveChatButton;