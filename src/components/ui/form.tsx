import React, { useCallback, useState } from 'react'
import FormSelect from './formSelect'
import { ArrowLongRightIcon, ChatBubbleBottomCenterTextIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

type Plan = { name: string; index: number }

const plans = [
    {
        name: 'Słuchowisko',
        index: 0,
    },
    {
        name: 'Reklama',
        index: 1,
    },
    {
        name: 'Audiobook',
        index: 2,
    },
    {
        name: 'Coś innego',
        index: 3,
    },
]

function Form() {
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [selected, setSelected] = useState<Plan>(plans[0])

    const submitForm = async () => {
        const data = { type: selected.name, email: email, message: message };
        const response = await fetch("/api/send", { method: "POST", body: JSON.stringify(data) }).then((res) => {
            console.log(res.json());
            setEmail("");
            setMessage("");
        });
    }

    const handleSelect = useCallback(
        (plan: Plan) => {
            setSelected(plan);
        },
        [selected],
    )

    return (
        <div className='max-w-[480px] '>
            <p className='mt-[32px]'>Typ projektu</p>
            <FormSelect plans={plans} selected={selected} setSelect={(plan) => handleSelect(plan)} />
            <div className='mt-[48px]'>
                <label >Adres e-mail</label>
                <input type='email' placeholder='Twój adres email' value={email} onChange={(event) => setEmail(event.target.value)} className='bg-block w-full rounded-2xl py-4 border border-[#1e1e31] outline-none px-5 font-Main mt-2 text-base' />
            </div>
            <div className='mt-[32px]'>
                <label >Wiadomość</label>
                <textarea placeholder='Twoja wiadomość' value={message} onChange={(event) => setMessage(event.target.value)} className='bg-block w-full min-h-[200px] max-h-[280px] rounded-2xl py-4 border border-[#1e1e31] outline-none px-5 font-Main mt-2 text-base ' />
            </div>
            <div className='md:flex md:items-center md:justify-between md:mt-[32px]'>
                <div className='mt-[32px] md:mt-0'>
                    <button className="cursor-none lg:cursor-pointer mx-auto flex items-center justify-between px-8 py-4 bg-gradient-to-r from-[#E6B573] to-[#CC9852] rounded-full" onClick={submitForm}>
                        <h2 className="text-base font-extrabold text-bodyBg xl:text-sm">
                            Wyślij wiadomość
                        </h2>
                        <EnvelopeIcon className='w-5 h-5 ml-2 text-bodyBg' />
                    </button>
                </div>
                <div className='mt-[24px] md:mt-0'>
                    <button className="mx-auto flex flex-col items-center px-8 py-4 text-center">
                        <h2 className="text-base font-extrabold text-white xl:text-sm">
                            Lub porozmawiajmy
                        </h2>
                        <div className='flex items-center mt-1'>
                            <h2 className="text-base font-extrabold text-white xl:text-sm">
                                na Live Chat
                            </h2>
                            <ChatBubbleBottomCenterTextIcon className='w-5 h-5 ml-2 text-white' />
                        </div>

                    </button>
                </div>
            </div>

        </div>
    )
}

export default Form