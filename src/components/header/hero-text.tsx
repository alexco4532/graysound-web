import React from 'react';

function HeroText() {
    return (
        <>
            <header>
                <h1 className="text-[32px] leading-10 font-bold text-center mx-auto md:text-4xl lg:text-5xl lg:text-left lg:leading-[1.15] lg:font-extrabold select-auto ">
                    Odkryj nowy <br /> wymiar słuchania
                </h1>
            </header>
            <p className="text-lg text-center mx-auto mt-4 text-textGray lg:text-base lg:text-left lg:mx-0 md:w-[60%] lg:w-[80%] xl:mt-4">
                Przekształć swoje opowieści w ekscytujące, wielowymiarowe
                doświadczenia, które poruszają serca i umysły. Twój tekst. Nasz
                dźwięk. Wspólnie tworzymy niezapomniane historie.
            </p>
        </>
    )
}

export default HeroText;