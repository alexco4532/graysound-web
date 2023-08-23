import { StarIcon } from '@heroicons/react/24/solid'
import React from 'react'

function Stars({ number }: { number: number }) {
    return (
        <div className='flex gap-x-[0.5px] items-center '>
            <StarIcon className='w-[18px] h-[18px]' style={{ color: number >= 1 ? "#E6B573" : "#9ca3af" }} />
            <StarIcon className='w-[18px] h-[18px]' style={{ color: number >= 2 ? "#E6B573" : "#9ca3af" }} />
            <StarIcon className='w-[18px] h-[18px]' style={{ color: number >= 3 ? "#E6B573" : "#9ca3af" }} />
            <StarIcon className='w-[18px] h-[18px]' style={{ color: number >= 4 ? "#E6B573" : "#9ca3af" }} />
            <StarIcon className='w-[18px] h-[18px]' style={{ color: number >= 5 ? "#E6B573" : "#9ca3af" }} />
        </div>
    )
}

export default Stars