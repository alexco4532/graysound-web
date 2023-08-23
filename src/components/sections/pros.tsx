import React from "react";
import ProsCardContent from "../pros/pros-card-content";
import prosList from "@/data/pros-list";

function ProsSection() {
  return (
    <section className="mt-36">
      <header>
        <h1 className="text-headerSection text-center font-extrabold">
          Perfekcja w każdym aspekcie projektu
        </h1>
      </header>
      <ul className="flex flex-row flex-wrap justify-around gap-x-20 xl:gap-y-8">
        {prosList.map((cardInfo) => (
          <li
            key={cardInfo.id}
            style={{ backgroundImage: `url(${cardInfo.bgImg})` }}
            className={`w-full h-[524px] xl:h-[572px] max-w-[444px] bg-block mt-[48px] bg-bottom bg-contain bg-no-repeat rounded-[34px] xl:rounded-[44px] border border-[#1e1e31] relative py-5 px-6 xl:px-8 xl:py-7`}
          >
            <ProsCardContent cardInfo={cardInfo} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProsSection;
