import React from "react";
import Empik from "../icons/empik";
import Virtualo from "../icons/virtualo";
import Storytel from "../icons/storytel";
import EmpikGo from "../icons/empik-go";

function DistributionSection() {
  return (
    <div className="mt-36">
      <h1 className="text-headerSection text-center font-extrabold ">
        Nasze produkcje znajdziesz na
      </h1>
      <div className="mt-[48px] flex flex-row flex-wrap justify-around items-center gap-y-12 ">
        <div className="h-[31px] xl:h-[36px] xl:mt-[3px]">
          <Empik />
        </div>
        <div className="h-[25px] xl:h-[28px]">
          <Virtualo />
        </div>
        <div className="h-[28px] xl:h-[36px] xl:mt-[3px]">
          <Storytel />
        </div>
        <div className="h-[37px] xl:h-[47px] xl:mt-[5px]">
          <EmpikGo />
        </div>
      </div>
      <div className="mt-[100px]"></div>
    </div>
  );
}

export default DistributionSection;
