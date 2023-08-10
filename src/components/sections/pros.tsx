import React from "react";
import ProsCardContent from "../ui/pros-card-content";

function ProsSection() {
  const prosArray = [
    {
      title: "Bezkompromisowa jakość produkcji",
      text: "Dla nas najlepsza jakość to nie tylko słowa - to nasza misja. Dbamy o nawet najdrobniejsze detale, korzystając z najnowocześniejszych technologii, które czynią dźwięk niepowtarzalnym i zapewniają niezrównane wrażenia słuchowe, które zaskoczą i wciągną Twoją publiczność.",
      isBadge: true,
      badgeName: "Jakub Sampławski",
      badgeTitle: "Reżyser dźwięku & CEO",
    },
    {
      title: "Reżyseria wywołująca najszczersze emocje",
      text: "Tworzymy produkcje, które poruszają serca. Nasza reżyseria skupia się na przełożeniu emocji ze scenariusza na realne odczucia słuchacza, prowadząc naszych aktorów do najszczerszych emocji. Każda interpretacja jest kierowana z sercem, zapewniając niezapomniane doświadczenia.",
      isBadge: true,
      badgeName: "Martyna Szymańska",
      badgeTitle: "Reżyserka & Co-founder",
    },
    {
      title: "Nowoczesne technologie używane w projekcie",
      text: "Wykorzystujemy najnowsze technologie, by dostarczyć niesamowite doznania dźwiękowe. Dzięki nim twoje projekty zyskują na dynamice i realizmie, pozwalając słuchaczom w pełni zanurzyć się w świat Twojej historii.",
      isBadge: false,
    },
    {
      title: "Terminowość bez żadnych wymówek",
      text: "W Graysound szanujemy twój czas. Jesteśmy oddani naszym klientom i wiemy, jak ważna jest terminowość i profesjonalizm. Na każdym etapie produkcji informujemy Cię o postępie w pracach. Projekty realizujemy bez żadnych opóźnień. Dlatego możesz na nas polegać.",
      isBadge: false,
    },
  ];

  return (
    <div className="mt-36">
      <h1 className="text-headerSection text-center font-extrabold">
        Perfekcja w każdym aspekcie projektu
      </h1>
      <div className="flex flex-row flex-wrap justify-around gap-x-20 xl:gap-y-8">
        <div
          className={`w-full h-[524px] xl:h-[572px] max-w-[444px]  bg-block mt-[48px] bg-[url('/pros-technology.png')] bg-bottom bg-contain bg-no-repeat rounded-[34px] xl:rounded-[44px] border border-[#1e1e31] relative py-5 px-6 xl:px-8 xl:py-7 `}
        >
          <ProsCardContent cardInfo={prosArray[2]} />
        </div>
        <div
          className={`w-full h-[524px] xl:h-[572px] max-w-[444px]  bg-block mt-[48px] bg-[url('/pros-director-n.png')] bg-bottom bg-contain bg-no-repeat rounded-[34px] xl:rounded-[44px] border border-[#1e1e31] relative py-5 px-6 xl:px-8 xl:py-7`}
        >
          <ProsCardContent cardInfo={prosArray[1]} />
        </div>
        <div
          className={`w-full h-[524px] xl:h-[572px] max-w-[444px]  bg-block mt-[48px] bg-[url('/quality-third.png')] bg-bottom bg-contain bg-no-repeat rounded-[34px] xl:rounded-[44px] border border-[#1e1e31] relative py-5 px-6 xl:px-8 xl:py-7`}
        >
          <ProsCardContent cardInfo={prosArray[0]} />
        </div>
        <div
          className={`w-full h-[524px] xl:h-[572px] max-w-[444px]  bg-block mt-[48px] bg-[url('/pros-time-n.png')] bg-bottom bg-contain bg-no-repeat rounded-[34px] xl:rounded-[44px] border border-[#1e1e31] relative py-5 px-6 xl:px-8 xl:py-7`}
        >
          <ProsCardContent cardInfo={prosArray[3]} />
        </div>
      </div>


    </div>
  );
}

export default ProsSection;
