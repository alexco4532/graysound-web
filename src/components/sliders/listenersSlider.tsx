import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick'
import EmpikGo from '../icons/empik-go';
import Stars from '../ui/stars';

function ListenersSlider() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    const isMobile = useMediaQuery({ query: "(max-width: 620px)" });
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 600,
        swipeToSlide: true,
        focusOnSelect: false,
        infinite: true,
        slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    };

    const reviews = [{ name: "Aleksandra", text: `Trzyma w napięciu, do tego świetne efekty dźwiękowe. Często dawałam się oszukać:)(słuchałam przez słuchawki)`, source: () => <EmpikGo />, rating: 5, thumbnailUrl: "/ukochane-dziecko-small.png" }, { name: "Marta_Pawl", text: `Oszalamiające słuchowisko. Przesłuchałam setki audiobooków, ale tak mistrzowsko dobranych dźwięków w połączeniu z głosem i intonacją lektorki jeszcze nie doświadczyłam...Sama treść książki również trzyma w napięciu do końca. MAJSTERSZTYK!`, source: () => <EmpikGo />, rating: 5, thumbnailUrl: "/ukochane-dziecko-small.png" }, { name: "Anonim", text: `Książka jest świetna i trzyma w napięciu do końca! Głosy lektorów bardzo przyjemne, fajne efekty dźwiękowe w tle. Momentami się bałam :D`, source: () => <EmpikGo />, rating: 5, thumbnailUrl: "/ukochane-dziecko-small.png" }, { name: "Piotr", text: `Takiego audiobooka jeszcze nie słyszałem, ciary przez cały czas.`, source: () => <EmpikGo />, rating: 5, thumbnailUrl: "/skora-small.png" }, { name: "Anonymous", text: `Wydawało mi się, że nie lubię audiobooków w formie słuchowiska, jednak ten mnie przekonał. Głos Artura tak przekonujący, że też dałabym się zwieść. całość przejmująca.Warto`, source: () => <EmpikGo />, rating: 5, thumbnailUrl: "/skora-small.png" }, { name: "Soniaolszewska", text: `Bardzo polecam! Ciekawa historia, fajnie dobrane głosy. Największy plus to fakt genialnego nagrania słuchowiska! Słuchając już wielu wcześniej doceniam ten fakt w szczególności.`, source: () => <EmpikGo />, rating: 5, thumbnailUrl: "/szum-small.png" }, { name: "Anonim", text: `Ciekawa historia, wciągająca. Główni bohaterowie interesujący, chce się poznać ich dalsze losy. A samo nagranie bardzo dobrze zrealizowane, przyjemnie się słucha.`, source: () => <EmpikGo />, rating: 5, thumbnailUrl: "/szum-small.png" }, { name: "Katarzyna Gilner", text: `Wspaniale się przy niej bawiłam! Lektor i muzyka to mistrzostwo świata.`, source: () => <EmpikGo />, rating: 4, thumbnailUrl: "/hydropolis-small.png" }, { name: "Monika", text: `4.5 naprawdę dobra zabawa, audiobook świetny, cieszę się że zdecydowałam się na poznanie tej historii właśnie w formie audio. książka choć dziecięca to nawet dorosłych zainteresuje`, source: () => <EmpikGo />, rating: 4.5, thumbnailUrl: "/hydropolis-small.png" }];


    if (!mounted) return null;

    return (
        <div id="listeners" className="w-full xl:mt-0 relative">
            <Slider
                {...settings}
                className={`mt-8  pt-2 `}
            >
                {reviews.map((review) => (
                    <div key={review.name} className="px-1 ">
                        <div className='bg-block p-6 h-[336px] md:h-[260px] md:w-[336px] rounded-3xl mx-auto border border-[#1e1e31]'>
                            <div className='flex flex-row justify-between items-start'>
                                <div className='flex flex-row'>
                                    <img src={review.thumbnailUrl} className='w-12 h-12 rounded-lg' />
                                    <div className='ml-2 flex flex-col justify-between'>
                                        <h3>{review.name.length > 12 ? review.name.slice(0, 12) + "..." : review.name}</h3>
                                        <div className='flex items-center'>
                                            <Stars number={review.rating} />
                                            <p className='text-[14px] ml-[4px]'>{review.rating}/5</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='h-[20px]'>
                                    {review.source()}
                                </div>
                            </div>
                            <p className='mt-6 md:text-sm'>{review.text}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ListenersSlider;