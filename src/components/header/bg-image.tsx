import React from 'react'


function BgImage() {
    return (
        <figure
            id="graphic"
            className="hidden xl:block xl:absolute xl:w-[1090px] xl:h-20 xl:top-[0] xl:-z-50 xl:pt-[24px] xl:ml-[100px] pointer-events-none select-none "
        >
            <img
                width="68%"
                src="/home_bg_graphic.png"
                alt="Background Graphic"
                className="float-right pointer-events-none select-none "
            />
        </figure>
    )
}

export default BgImage;