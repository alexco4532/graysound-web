import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import Quote from '../icons/quote'
import clientsReviews from '@/data/clients-reviews';


function ClientsSection() {
    // Local state to manage the current review index
    const [reviewIndex, setReviewIndex] = useState<number>(0);

    // Function to go to the next review
    const handleNext = () => {
        if (reviewIndex === (clientsReviews.length - 1)) return;
        setReviewIndex((prev) => prev + 1);
    }

    // Function to go to the previous review
    const handlePrev = () => {
        if (reviewIndex === 0) return;
        setReviewIndex((prev) => prev - 1);
    }

    return (
        <section className='mt-36'>
            {/* Section Heading */}
            <header>
                <h1 className='text-headerSection text-center font-extrabold'>Co mówią o nas nasi klienci?</h1>
            </header>
            {/* Container for the client image and their review */}
            <div className='md:flex md:flex-row-reverse md:justify-between md:ml-8 mt-8 md:mt-12'>
                {/* Client's Image */}
                <img src={clientsReviews[reviewIndex].img} alt="Client Testimonial" className='w-full rounded-3xl md:h-[380px] xl:h-[420px] md:max-w-[360px] xl:max-w-[380px] xl:mr-10 object-cover object-top' />

                {/* Review container */}
                <div className='mt-[24px] md:max-w-[380px] lg:max-w-[460px] md:flex md:flex-col md:justify-between'>
                    <div>
                        <blockquote>
                            <Quote />
                            {/* Text of the review */}
                            <p className='mt-1 text-xl md:text-base  md:pr-12 xl:pr-0 font-normal'>{clientsReviews[reviewIndex].text}</p>
                        </blockquote>
                        {/* Reviewer's Name and Position/Title */}
                        <cite>
                            <h3 className='text-left mt-5 text-base font-extrabold'>{clientsReviews[reviewIndex].name} <br /><span className='bg-gradient-to-r from-[#E6B573] to-[#CC9852] bg-clip-text text-transparent text-sm font-medium'>{clientsReviews[reviewIndex].title}</span></h3>
                        </cite>
                    </div>

                    {/* Navigation arrows to toggle between reviews */}
                    <nav className='flex justify-start mt-6 xl:mt-20'>
                        <button>
                            <ArrowLeftCircleIcon className='w-12 h-12 text-gray-500 lg:cursor-pointer' onClick={handlePrev} />
                        </button>
                        <button>
                            <ArrowRightCircleIcon className='w-12 h-12 bg-gradient-to-r text-[#E6B573] to-[#CC9852] bg-clip-text lg:cursor-pointer' onClick={handleNext} />
                        </button>

                    </nav>
                </div>
            </div>
        </section>
    )
}

export default ClientsSection;