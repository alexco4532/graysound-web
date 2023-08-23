import { MOBILE_MAX_WIDTH, SLICK_AUTOPLAY_SPEED, SLICK_SPEED } from '@/config/constants';
import projectsList from '@/data/projects-list-header';
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';
import { ProjectCard } from './project-card';
import { useOpenAudioPlayer } from '@/hooks/use-open-audio-player';

function ProjectsSlider() {
    const [mounted, setMounted] = useState(false);
    const openAudioPlayer = useOpenAudioPlayer();
    const isTabletOrMobile = useMediaQuery({ query: `(max-width: ${MOBILE_MAX_WIDTH}px)` });
    const slickSettings = {
        autoplay: true,
        autoplaySpeed: SLICK_AUTOPLAY_SPEED,
        speed: SLICK_SPEED,
        swipeToSlide: false,
        focusOnSelect: false,
        infinite: true,
        slidesToShow: isTabletOrMobile ? 1 : 2,
        slidesToScroll: isTabletOrMobile ? 1 : 2,
        arrows: false,
        dots: true,
    };

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;
    return (
        <Slider
            {...slickSettings}
            className={`lg:max-w-[464px] xl:max-w-[540px] mt-[48px] mx-auto pt-2 lg:ml-16 `}
        >
            {projectsList.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} openAudioPlayer={openAudioPlayer} />
            ))}
        </Slider>
    )
}

export default ProjectsSlider