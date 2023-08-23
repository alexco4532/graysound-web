import { SpeakerWaveIcon, StarIcon } from '@heroicons/react/24/solid';
import React from 'react';

interface Project {
    title: string;
    rating: number;
    photoUrl: string;
    audioUrl: string;
    alt: string;
}

interface ProjectCardProps {
    project: Project;
    index: number;
    openAudioPlayer: (index: number) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, openAudioPlayer }) => {
    return (<div key={project.title} className=" w-full px-1 ">
        <div className="flex items-center justify-center">
            <p className="text-3xl font-extrabold lg:text-xl">
                {project.rating}
            </p>
            <StarIcon className="w-7 h-7 ml-1 text-orange-300 lg:w-5 lg:h-5" />
        </div>
        <div className="w-full mx-auto  mt-2 lg:w-[90%] xl:w-[84%]">
            <img src={project.photoUrl} alt='Project thumbnail' width="96%" className="mx-auto rounded-3xl" />
        </div>
        <button className="mx-auto flex items-center justify-center w-[96%] py-5 bg-block rounded-full mt-6 lg:w-[80%] lg:py-4 lg:mt-5 cursor-none lg:cursor-pointer" onClick={() => openAudioPlayer(index)}>
            <p className="text-[18px] lg:text-sm font-bold">
                Odsłuchaj fragment
            </p>
            <SpeakerWaveIcon className="w-5 h-5 ml-2 text-white lg:ml-1 lg:w-4 lg:h-4" />
        </button>
    </div>)
};