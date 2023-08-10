import { ArrowLeftCircleIcon, ArrowRightCircleIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import Quote from '../icons/quote'

const LIMIT_REVIEWS = 1;

function ClientsSection() {
    const [reviewIndex, setReviewIndex] = useState<number>(0);
    const clientsArray = [{ text: `"Współpraca z Graysound to tylko i wyłącznie pozytywne doświadczenia.Kuba oraz Martyna to najlepsi specialiści z jakimi współpracowałam. Projekt został skończony w niecały miesiąc a słuchacze byli zaskoczeni jakością produkcji! Serdecznie polecam!"`, name: "Agnieszka Witczak", title: "Project Manager" }, { text: `"Kuba oraz Martyna to najlepsi specialiści z jakimi współpracowałam. Projekt został skończony w niecały miesiąc a słuchacze byli zaskoczeni jakością produkcji! Serdecznie polecam!"`, name: "Mariusz Sampałowski", title: "Empik" }];

    const handleNext = () => {
        if (reviewIndex === LIMIT_REVIEWS) return;
        setReviewIndex((prev) => prev + 1);
    }

    const handlePrev = () => {
        if (reviewIndex === 0) return;
        setReviewIndex((prev) => prev - 1);
    }

    return (
        <div className='mt-36'>
            <h1 className='text-headerSection text-center font-extrabold'>Co mówią o nas nasi klienci?</h1>
            <div className='md:flex md:flex-row-reverse md:justify-between md:ml-8 mt-8 md:mt-12'>
                <img src='client.png' className='w-full h-[320px] rounded-3xl  md:h-[380px] xl:h-[420px] md:max-w-[360px] xl:max-w-[380px] xl:mr-10' />

                <div className='mt-[24px] md:max-w-[380px] lg:max-w-[460px] md:flex md:flex-col md:justify-between'>
                    <div>
                        <Quote />
                        <p className='mt-1 text-xl md:text-base xl:text-xl  md:pr-12 xl:pr-0  font-medium '>{clientsArray[reviewIndex].text}</p>
                        <h3 className='text-left mt-5 text-base font-extrabold'>{clientsArray[reviewIndex].name} <br /><span className='bg-gradient-to-r from-[#E6B573] to-[#CC9852] bg-clip-text text-transparent text-sm font-medium'>{clientsArray[reviewIndex].title}</span></h3>
                    </div>

                    <div className='flex justify-start mt-6 xl:mt-20'>
                        <ArrowLeftCircleIcon className='w-12 h-12 text-gray-500 lg:cursor-pointer' onClick={handlePrev} />
                        <ArrowRightCircleIcon className='w-12 h-12 bg-gradient-to-r text-[#E6B573] to-[#CC9852] bg-clip-text lg:cursor-pointer' onClick={handleNext} />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ClientsSection