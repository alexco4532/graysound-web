import Script from 'next/script'
import Navbar from "@/components/sections/navbar";
import HeaderSection from "@/components/sections/header";
import DistributionSection from "@/components/sections/distribution";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProsSection from "@/components/sections/pros";
import dynamic from 'next/dynamic'


const DynamicSections = dynamic(() => import('../components/dynamic/dynamic-sections'), { ssr: false });
const DynamicAudioPlayer = dynamic(() => import('../components/audio/audio-player'), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <DynamicAudioPlayer />
      <main
        className={`mx-auto flex min-h-screen flex-col max-w-6xl px-6 font-Main`}
      >
        <div className="lg:ml-1.5">
          <HeaderSection />
          <DistributionSection />
          <ProsSection />
          <DynamicSections />
        </div>
      </main>

    </>
  );
}
