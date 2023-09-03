import EmpikGo from '@/components/icons/empik-go';

const reviews = [
  {
    name: 'Adam',
    text: `Ja nie mogę; lektor i te efekty na słuchawkach ._. 10000/5`,
    source: EmpikGo,
    rating: 5,
    thumbnailUrl: '/stacja-small.png'
  },
  {
    name: 'Mariusz',
    text: `Słuchowisko budzi wiele emocji. Cały czas czuć na przemian niepokój, strach, smutek. Faktycznie nie jest ono dla wszystkich. Muzyka idealnie komponowała się z tekstem. Tło dźwiękowe i aktorzy, za każdym razem gdy tylko poczułem spokój, wytrącali mnie z powrotem w mroczny klimat. Nigdy dźwięk nie zrobił na mnie takiego wrażenia...`,
    source: EmpikGo,
    rating: 5,
    thumbnailUrl: '/skora-small.png'
  },
  {
    name: 'Ala',
    text: `Rewelacja! Ogromny plus za realistycznie nagranie, dopełniało budowanie klimatu zaraz obok fabuły.`,
    source: EmpikGo,
    rating: 5,
    thumbnailUrl: '/szum-small.png'
  },
  {
    name: 'Agata Kulesza',
    text: `Nie jestem młodym chłopcem, tylko panią w średnim wieku,. nie lubię fantastyki. Mimo to jestem zachwycona i nie mogę doczekać się kolejnego tomu. Przepiękna opowieść dla wszystkich, świetnie przeczytana i zrealizowana. Z całego serca polecam.`,
    source: EmpikGo,
    rating: 5,
    thumbnailUrl: '/hydropolis-small.png'
  },
  {
    name: 'Martyna',
    text: `Idealnie przeczytane. Lektorka perfekcyjnie oddała każdego bohaterka. Przy Hanie czasem miałam ciarki. Interpretacja nie raz powodowała cisnące się łzy. Ścieżka dźwiękowa jak w filmie, miałam obawy po usłyszeniu pierwszych dźwięków, zazwyczaj realizacje są mocno średnie. Muzyka bardzo dobrze oddają emocje...`,
    source: EmpikGo,
    rating: 5,
    thumbnailUrl: '/ukochane-dziecko-small.png'
  },
  {
    name: 'Anonim',
    text: `Książka fantastyczna Audiobook świetnie zrealizowany.`,
    source: EmpikGo,
    rating: 5,
    thumbnailUrl: '/stacja-small.png'
  },
  {
    name: 'Ms.Watermelon',
    text: `wow, aż mam ciary od początku słuchania. Faktycznie polecam na słuchawkach!`,
    source: EmpikGo,
    rating: 5,
    thumbnailUrl: '/skora-small.png'
  },
  {
    name: 'Magstar',
    text: `Dawno nie słuchało mi się tak dobrze audiobooka! Nareszcie bohaterowie mają swoich własnych lektorów, a nie jak zawsze, czyta wszystko (często z dziwną i denerwującą manierą) jedna osoba, do tego dźwięki tła i ciekawa fabuła. Słuchałam z przyjemnością, polecam!`,
    source: EmpikGo,
    rating: 5,
    thumbnailUrl: '/szum-small.png'
  },
  {
    name: 'Monika',
    text: `4.5 naprawdę dobra zabawa, audiobook świetny, cieszę się że zdecydowałam się na poznanie tej historii właśnie w formie audio. książka choć dziecięca to nawet dorosłych zainteresuje`,
    source: EmpikGo,
    rating: 4.5,
    thumbnailUrl: '/hydropolis-small.png'
  },
  {
    name: 'Aleksandra',
    text: `Trzyma w napięciu, do tego świetne efekty dźwiękowe. Często dawałam się oszukać:) (słuchałam przez słuchawki)`,
    source: EmpikGo,
    rating: 5,
    thumbnailUrl: '/ukochane-dziecko-small.png'
  },
  {
    name: 'Maciek',
    text: `fajnie, trochę zbyt obyczajowo ale jeśli chodzi o intrygę, to nie miałem wrażenia, że autor chce ze mnie zarobić idiotę - wiarygodność akcji to zawsze mocny punkt w powieściach Szamałka. Realizacja audiobooka 5/5`,
    source: EmpikGo,
    rating: 4,
    thumbnailUrl: '/stacja-small.png'
  },
  {
    name: 'Sabina',
    text: `Audiobook, jestem pod wrazeniem, mega emocje, juz dawno nic mnie tak nie wzruszylo .... polecam szczegolnie audiobook`,
    source: EmpikGo,
    rating: 5,
    thumbnailUrl: '/skora-small.png'
  },
  {
    name: 'Barbara Gajzler',
    text: `Sobczak w formie, jak zawsze wciągający, mroczny i pełen przemyślanych plot twistów kryminał z bardzo dobrze zbudowaną wielopoziomową fabułą. Audiobook jest absolutnym majstersztykiem, podział na role i dźwięki w tle podsycają intrygę i wciągają jeszcze bardziej w tę mroczną historię.`,
    source: EmpikGo,
    rating: 5,
    thumbnailUrl: '/szum-small.png'
  },
  {
    name: 'Alicja',
    text: `Opowieść bardzo mnie wciągnęła. Plusem dla mnie był audiobook ze względu na muzyczne tło i lektora. Mam 64 lata i czekam na tom 2.`,
    source: EmpikGo,
    rating: 5,
    thumbnailUrl: '/hydropolis-small.png'
  },
  {
    name: 'Anonim',
    text: `Szacun dla reżysera słuchowiska. Tak dobrego audiobooka nie słyszałam dawno.`,
    source: EmpikGo,
    rating: 5,
    thumbnailUrl: '/ukochane-dziecko-small.png'
  },
  {
    name: 'Agata Tuszyńska',
    text: `niezwykle wciągająca, a jeszcze wersja słuchowiska daje jej niesamowitego wydźwięku.`,
    source: EmpikGo,
    rating: 5,
    thumbnailUrl: '/stacja-small.png'
  },
  {
    name: 'Piotr',
    text: `Takiego audiobooka jeszcze nie słyszałem, ciary przez cały czas.`,
    source: EmpikGo,
    rating: 5,
    thumbnailUrl: '/skora-small.png'
  },
  {
    name: 'Soniaolszewska',
    text: `Bardzo polecam! Ciekawa historia, fajnie dobrane głosy. Największy plus to fakt genialnego nagrania słuchowiska! Słuchając już wielu wcześniej doceniam ten fakt w szczególności.`,
    source: EmpikGo,
    rating: 5,
    thumbnailUrl: '/szum-small.png'
  },
  {
    name: 'golabd',
    text: `Doskonale! Książka świetna sama w sobie, muzyka robi klimat, a mistrzowski lektor nadaje niepowtarzalny klimat.`,
    source: EmpikGo,
    rating: 5,
    thumbnailUrl: '/hydropolis-small.png'
  },
  {
    name: 'Gabriela Scibiorska',
    text: `Pięć gwiazdek to zdecydowanie za mało ! To najlepszy audiobook jakiego kiedykolwiek słuchałam. Wszystko jest absolutnie niesamowite: lektorka, historia, reżyseria dźwięku, dozowanie napięcia i bohaterowie. Hit na 200 procent!`,
    source: EmpikGo,
    rating: 5,
    thumbnailUrl: '/ukochane-dziecko-small.png'
  },
  {
    name: 'Emdzi',
    text: `Dałam się namówić mimo, że kosmos to nie moja bajka. Świetna książka. Nagranie najlepsze jakie słyszałam. Polecam na słuchawkach`,
    source: EmpikGo,
    rating: 5,
    thumbnailUrl: '/stacja-small.png'
  },
  {
    name: 'Jakub',
    text: `Najlepsze słuchowisko jakie słuchałem do tej pory. Wybitny poziom aktorów oraz realizacji dźwięku.`,
    source: EmpikGo,
    rating: 5,
    thumbnailUrl: '/skora-small.png'
  },
  {
    name: 'Anna',
    text: `już dawno nie słuchałam tak dobrej opowieści. niebanalne postaci, ciekawa analiza i przedstawienie psychologiczne postaci, świetnie prowadzone rosnące napięcie. doskonała realizacja dźwiękowa. polecam!`,
    source: EmpikGo,
    rating: 5,
    thumbnailUrl: '/szum-small.png'
  },
  {
    name: 'Katarzyna Gilner',
    text: `Wspaniale się przy niej bawiłam! Lektor i muzyka to mistrzostwo świata.`,
    source: EmpikGo,
    rating: 4,
    thumbnailUrl: '/hydropolis-small.png'
  },
  {
    name: 'Marta_Pawl',
    text: `Oszalamiające słuchowisko. Przesłuchałam setki audiobooków, ale tak mistrzowsko dobranych dźwięków w połączeniu z głosem i intonacją lektorki jeszcze nie doświadczyłam... Sama treść książki również trzyma w napięciu do końca. Całość MAJSTERSZTYK!`,
    source: EmpikGo,
    rating: 5,
    thumbnailUrl: '/ukochane-dziecko-small.png'
  }
];

export default reviews;
