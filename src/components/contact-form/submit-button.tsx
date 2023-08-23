import { EnvelopeIcon } from '@heroicons/react/24/solid';
import React from 'react'

function SubmitButton({ isSending }: { isSending: boolean }) {
    return (
        <button disabled={isSending} className="cursor-none lg:cursor-pointer mx-auto flex items-center justify-between px-8 py-4 bg-gradient-to-r from-[#E6B573] to-[#CC9852] rounded-full" type='submit'>
            <h2 className={`text-base font-extrabold text-bodyBg xl:text-sm ${isSending ? "animate-pulse" : ""}`}>
                Wyślij wiadomość
            </h2>
            <EnvelopeIcon className={`w-5 h-5 ml-2 text-bodyBg ${isSending ? "animate-pulse" : ""}`} />
        </button>
    )
}

export default SubmitButton;