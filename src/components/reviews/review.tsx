import React from 'react'
import Stars from './stars';

interface ReviewProps {
    name: string;
    text: string;
    source: () => React.JSX.Element;
    rating: number;
    thumbnailUrl: string;
}

function Review({ review }: { review: ReviewProps }) {
    return (
        <div className="px-1 ">
            {/* Card container for the review */}
            <div className='bg-block p-6 h-[400px] md:h-[288px] md:w-[336px] rounded-3xl mx-auto border border-[#1e1e31]'>
                {/* Header row containing the reviewer's info and source icon */}
                <div className='flex flex-row justify-between items-start'>
                    {/* Thumbnail and information */}
                    <div className='flex flex-row'>
                        <img src={review.thumbnailUrl} className='w-12 h-12 rounded-lg' />
                        <div className='ml-2 flex flex-col justify-between'>
                            {/* Truncate the reviewer's name if it's too long */}
                            <h3>{review.name.length > 12 ? review.name.slice(0, 12) + "..." : review.name}</h3>
                            {/* Rating */}
                            <div className='flex items-center'>
                                <Stars number={review.rating} />
                                <p className='text-[14px] ml-[4px]'>{review.rating}/5</p>
                            </div>
                        </div>
                    </div>
                    {/* Review source */}
                    <div className='h-[20px]'>
                        {review.source()}
                    </div>
                </div>
                {/* Review text */}
                <p className='mt-6 md:text-sm'>{review.text}</p>
            </div>
        </div>
    )
}

export default Review