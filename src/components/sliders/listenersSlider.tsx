import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick'
import reviews from '@/data/listeners-reviews';
import { MOBILE_WIDE_WIDTH, SLICK_AUTOPLAY_SPEED_REVIEWS, SLICK_SPEED, TABLET_MAX_WIDTH } from '@/config/constants';
import Review from '../reviews/review';

function ListenersSlider() {
    const [mounted, setMounted] = useState(false);
    // Media queries to detect device type
    const isMobile = useMediaQuery({ query: `(max-width: ${MOBILE_WIDE_WIDTH}px)` });
    const isTablet = useMediaQuery({ query: `(max-width: ${TABLET_MAX_WIDTH}px)` });

    // Settings for the Slider component
    const slickSettings = {
        autoplay: true,
        autoplaySpeed: SLICK_AUTOPLAY_SPEED_REVIEWS,
        speed: SLICK_SPEED,
        swipeToSlide: true,
        focusOnSelect: false,
        infinite: true,
        slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
        slidesToScroll: 1,
        arrows: false,
        dots: isMobile ? false : true,
    };

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div id="kontakt" className="w-full xl:mt-0 relative">
            <Slider
                {...slickSettings}
                className={`mt-8 pt-2`}
            >
                {/* Mapping through the reviews data to render Review components */}
                {reviews.map((review) => (
                    <Review key={review.name} review={review} />
                ))}
            </Slider>
        </div>
    )
}

export default ListenersSlider;