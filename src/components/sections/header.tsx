import React from "react";
import { useChatwootEvent } from "@/hooks/use-chatwoot-event";
import ProjectsSlider from "../sliders/projects-slider";
import HeroButton from "../header/hero-button";
import BgImage from "../header/bg-image";
import HeroText from "../header/hero-text";

function HeaderSection() {
  // Initialize Chatwoot event tracking
  // useChatwootEvent();

  return (
    <section className={`w-full lg:flex lg:mt-10`}>
      {/* Background image - absolute */}
      <BgImage />

      {/* Hero - text content */}
      <article className="w-full pt-nav lg:pt-10 lg:ml-4">
        <HeroText />
        <HeroButton />
      </article>

      {/* Hero - projects showcase section */}
      <div id="projects" className="w-full mt-section lg:mt-0 relative ">
        <h2 className="text-headerSection text-center font-bold lg:hidden">
          Nasze ostatnie realizacje
        </h2>
        <ProjectsSlider />
      </div>
    </section>
  );
}

export default HeaderSection;
