import React from "react";
import Empik from "../icons/empik";
import Virtualo from "../icons/virtualo";
import Storytel from "../icons/storytel";
import EmpikGo from "../icons/empik-go";

function DistributionSection() {
  return (
    <section className="mt-36">
      {/* Section Heading */}
      <header>
        <h1 className="text-headerSection text-center font-extrabold px-8">
          Nasze produkcje znajdziesz na
        </h1>
      </header>
      {/* List of platforms */}
      {/* <ul className="mt-[48px] flex flex-row flex-wrap justify-around items-center gap-y-12 medium:px-6 mediumxl:px-16">
        <li className="h-[31px] xl:h-[36px] xl:mt-[3px]">
          <Empik />
        </li>
        <li className="h-[25px] xl:h-[28px]">
          <Virtualo />
        </li>
        <li className="h-[28px] xl:h-[36px] xl:mt-[3px]">
          <Storytel />
        </li>
        <li className="h-[37px] xl:h-[47px] xl:mt-[5px]">
          <EmpikGo />
        </li>
      </ul> */}
      <ul className="mt-[48px] flex flex-row flex-wrap justify-center items-center gap-x-12 gap-y-12 medium:px-6 mediumxl:px-16">
        <li className="h-[25px] xl:h-[28px]">
          <Virtualo />
        </li>
        <li className="h-[37px] xl:h-[47px] mt-[12px]">
          <EmpikGo />
        </li>
      </ul>
      <div className="mt-[100px]"></div>
    </section>
  );
}

export default DistributionSection;
