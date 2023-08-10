import Image from "next/image";
import Navbar from "@/components/sections/navbar";
import HomeSection from "@/components/sections/home";
import DistributionSection from "@/components/sections/distribution";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProsSection from "@/components/sections/pros";
import SpatialSoundSection from "@/components/sections/spatial-sound";
import ClientsSection from "@/components/sections/clients";
import Listeners from "@/components/sections/listeners";
import FormSection from "@/components/sections/form-section";
import FooterSection from "@/components/sections/footer";
import AudioPlayer from "@/components/ui/audio-player";
import Modal from "@/components/ui/modal";
import { useCallback, useState } from "react";
import usePlayerStore from "@/hooks/use-player-store";
import dynamic from 'next/dynamic'

const DynamicRestComponents = dynamic(() => import('../components/dynamic/rest'), {
  loading: () => <p>Loading...</p>,
})

export default function Home() {
  const isPlayerOpen = usePlayerStore((state) => state.isOpen);

  return (
    <>
      <Navbar />
      {isPlayerOpen ? <div className="fixed phones:top-20 tablets:bottom-10 default:bottom-10 xxl:top-32 px-6 md:px-20 z-[999] w-full pointer-events-none">
        <div className="max-w-6xl md:mx-auto">
          <Modal />
        </div>
      </div> : null}
      <main
        className={`mx-auto flex min-h-screen flex-col max-w-6xl px-6 font-Main`}
      >
        <div className="lg:ml-1.5">
          <HomeSection />
          <DistributionSection />
          <ProsSection />
          <DynamicRestComponents />
        </div>
      </main>
    </>
  );
}
