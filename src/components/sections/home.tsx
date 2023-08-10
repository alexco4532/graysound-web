import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { SpeakerWaveIcon, StarIcon } from "@heroicons/react/24/solid";
import { Inter } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import { useGlobalAudioPlayer } from "react-use-audio-player";
import usePlayerStore from "@/hooks/use-player-store";

function HomeSection() {
  const setTrackIndex = usePlayerStore((state) => state.setTrackIndex);
  const openPlayer = usePlayerStore((state) => state.openPlayer);
  const [mounted, setMounted] = useState(false);
  const { load, stop, playing } = useGlobalAudioPlayer();

  useEffect(() => setMounted(true), []);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 760px)" });

  const settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 600,
    swipeToSlide: false,
    focusOnSelect: false,
    infinite: true,
    slidesToShow: isTabletOrMobile ? 1 : 2,
    slidesToScroll: isTabletOrMobile ? 1 : 2,
    arrows: false,
    dots: true,
  };

  const projects = [
    {
      title: "Skóra",
      rating: 4.7,
      photoUrl: "/skora.jpeg",
      audioUrl: "https://graysoundlab.b-cdn.net/v1/skora.mp3",
      alt: "Skóra",
    },
    {
      title: "Ukochane dziecko",
      rating: 4.8,
      photoUrl: "/ukochane-dziecko.jpeg",
      audioUrl: "https://graysoundlab.b-cdn.net/v1/ukochanedziecko.mp3",
      alt: "Ukochane dziecko",
    },
    {
      title: "Hydropolis",
      rating: 4.6,
      photoUrl: "hydropolis.jpeg",
      audioUrl: "https://graysoundlab.b-cdn.net/v1/hydropolis.mp3",
      alt: "Hydropolis",
    },
    {
      title: "Stacja",
      rating: 4.6,
      photoUrl: "/stacja.jpeg",
      audioUrl: "https://graysoundlab.b-cdn.net/v1/stacja.mp3",
      alt: "Stacja",
    },
    {
      title: "Szum",
      rating: 4.7,
      photoUrl: "/szum.jpeg",
      audioUrl: "https://graysoundlab.b-cdn.net/v1/szum.mp3",
      alt: "Szum",
    },
  ];

  const handleOpenModal = (index: number) => {
    if (playing) {
      stop();
    }
    setTrackIndex(index);
    load(projects[index].audioUrl, {
      autoplay: true,
      html5: true,
      format: 'mp3',
      initialVolume: 1,
    })
    return openPlayer();
  }

  if (!mounted) return null;

  return (
    <div className={`w-full lg:flex lg:mt-10 `}>
      <div
        id="graphic"
        className="hidden xl:block xl:absolute xl:w-[1090px] xl:h-20 xl:top-[0] xl:-z-50 xl:pt-[24px] xl:ml-[100px] pointer-events-none select-none "
      >
        <img
          width="68%"
          src="/home_bg_graphic.png"
          className="float-right pointer-events-none select-none "
        />
      </div>
      <div id="text" className="w-full pt-nav lg:pt-10 lg:ml-4 ">
        <h1 className="text-[32px] leading-10 font-bold text-center mx-auto md:text-4xl lg:text-5xl lg:text-left lg:leading-[1.15] lg:font-extrabold select-auto ">
          Odkryj nowy <br /> wymiar słuchania
        </h1>
        <p className="text-lg text-center mx-auto mt-4 text-textGray lg:text-base lg:text-left lg:mx-0 md:w-[60%] lg:w-[76%] xl:mt-4">
          Przekształć swoje opowieści w ekscytujące, wielowymiarowe
          doświadczenia, które poruszają serca i umysły. Twój tekst. Nasz
          dźwięk. Wspólnie tworzymy niezapomniane historie.
        </p>
        <div className="relative ">
          {isTabletOrMobile ? <div className="absolute ml-10 -mt-2 -z-10 px-10 py-6 flex items-center justify-between p-2 rounded-full border border-[#cc975225] animate-ping-btn">
            <h2 className="font-bold text-base xl:font-extrabold lg:text-sm text-transparent">
              Porozmawiajmy
            </h2>
            <ArrowLongRightIcon className="h-5 w-5 flex-none ml-1 stroke-[3px] text-transparent lg:stroke-[3px]" />
          </div> : null}

          <button className="mt-10 mx-auto flex items-center justify-between px-8 py-4 bg-gradient-to-r from-[#E6B573] to-[#CC9852] rounded-full lg:mx-0 lg:py-4 lg:px-6 lg:mt-8 cursor-none lg:cursor-pointer">
            {isTabletOrMobile ? <>
              <h2 className="font-bold text-base xl:font-extrabold text-bodyBg lg:text-sm">
                Porozmawiajmy
              </h2>
              <ArrowLongRightIcon className="h-5 w-5 flex-none ml-1 stroke-[3px] text-bodyBg lg:stroke-[3px]" /></> : <><h2 className="font-bold text-base xl:font-extrabold text-bodyBg lg:text-sm">
                Porozmawiajmy o Twoim projekcie
              </h2></>}
          </button>

        </div>
      </div>
      <div id="projects" className="w-full mt-section lg:mt-0 relative ">
        <h2 className="text-headerSection text-center font-bold lg:hidden">
          Nasze ostatnie realizacje
        </h2>
        <Slider
          {...settings}
          className={`lg:max-w-[464px] xl:max-w-[540px] mt-[48px] mx-auto pt-2 lg:ml-16 `}
        >
          {projects.map((project, index) => (
            <div key={project.title} className=" w-full px-1 ">
              <div className="flex items-center justify-center">
                <p className="text-3xl font-extrabold lg:text-xl">
                  {project.rating}
                </p>
                <StarIcon className="w-7 h-7 ml-1 text-orange-300 lg:w-5 lg:h-5" />
              </div>
              <div className="w-full mx-auto  mt-2 lg:w-[90%] xl:w-[84%]">
                <img src={project.photoUrl} width="96%" className="mx-auto rounded-3xl" />
              </div>
              <button className="mx-auto flex items-center justify-center w-[96%] py-5 bg-block rounded-full mt-6 lg:w-[80%] lg:py-4 lg:mt-5 cursor-none lg:cursor-pointer" onClick={() => handleOpenModal(index)}>
                <p className="text-[18px] lg:text-sm font-bold">
                  Odsłuchaj fragment
                </p>
                <SpeakerWaveIcon className="w-5 h-5 ml-2 text-white lg:ml-1 lg:w-4 lg:h-4" />
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HomeSection;
