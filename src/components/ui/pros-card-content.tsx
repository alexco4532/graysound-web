import React from "react";

function ProsCardContent({
  cardInfo,
}: {
  cardInfo: {
    title: string;
    text: string;
    isBadge: boolean;
    badgeName?: string;
    badgeTitle?: string;
  };
}) {
  return (
    <>
      <h2 className="text-2xl small:text-[20px] small:leading-[1.4] font-extrabold">{cardInfo.title}</h2>
      <p className="text-[14px] small:text-[14px] text-textGrayBlock mt-2 xl:mt-2 font-medium">
        {cardInfo.text}
      </p>
      {cardInfo.isBadge ? (
        <div className="bg-[#fffffffb] p-3 px-5 absolute rounded-full bottom-0 mb-4 right-0 mr-6 xl:mr-8 xl:mb-6 xl:px-6">
          <h3 className="text-[10px] xl:text-[12px] text-center text-medium text-black">
            <span className="text-[12px] xl:text-sm font-extrabold">
              {cardInfo.badgeName}
            </span>
            <br />
            {cardInfo.badgeTitle}
          </h3>
        </div>
      ) : null}
    </>
  );
}

export default ProsCardContent;
