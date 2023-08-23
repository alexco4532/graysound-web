import React from 'react'
import ListenersSlider from '../sliders/listenersSlider'

function ListenersSection() {
    return (
        <div className='mt-36'>
            {/* Section heading */}
            <h2 className='text-headerSection text-center font-extrabold'>Co o naszych produkcjach mówią słuchacze?</h2>
            {/* Component to display reviews */}
            <ListenersSlider />
        </div>
    )
}

export default ListenersSection;