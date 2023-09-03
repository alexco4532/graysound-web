import Footer from '@/components/sections/footer';
import Navbar from '@/components/sections/navbar';
import Script from 'next/script';
import React, { useEffect, useState } from 'react';

function PrivacyPolicy() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        return () => {
            setMounted(false);
        }
    }, []);

    if (!mounted) return null;
    return (
        <div>
            <Navbar />
            <main
                className={`mx-auto flex min-h-screen flex-col max-w-6xl px-6 font-Main`}
            >
                <h1 className='text-xl text-white font-extrabold'>
                    Polityka prywatności opisuje zasady przetwarzania przez nas informacji na Twój temat, w tym danych osobowych oraz ciasteczek, czyli tzw. cookies.
                </h1>
                <p className='text-base text-white font-normal mt-4'>
                    1. Informacje ogólne
                    Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: graysoundlab.com
                    Operatorem serwisu oraz Administratorem danych osobowych jest: Jakub Sampławski GraySound Rozbrat 16/18 m.35, 00-447, Warszawa <br />
                    Adres kontaktowy poczty elektronicznej operatora: kontakt@graysoundlab.com <br />
                    Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w Serwisie. <br />
                    Serwis wykorzystuje dane osobowe w następujących celach: <br />
                    Prowadzenie rozmów typu chat online <br />
                    Obsługa zapytań przez formularz <br />
                    Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób: <br />
                    Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora.
                    Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. „ciasteczka”).
                    2. Wybrane metody ochrony danych stosowane przez Operatora
                    Miejsca logowania i wprowadzania danych osobowych są chronione w warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i dane logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze użytkownika i mogą być odczytane jedynie na docelowym serwerze.
                    Operator okresowo zmienia swoje hasła administracyjne.
                    Istotnym elementem ochrony danych jest regularna aktualizacja wszelkiego oprogramowania, wykorzystywanego przez Operatora do przetwarzania danych osobowych, co w szczególności oznacza regularne aktualizacje komponentów programistycznych.
                    3. Hosting
                    Serwis jest hostowany (technicznie utrzymywany) na serwerach operatora: vercel.com
                    4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych
                    W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na Administratorze. Dotyczy to takich grup odbiorców:
                    operatorzy rozwiązania typu chat online
                    upoważnieni pracownicy i współpracownicy, którzy korzystają z danych w celu realizacji celu działania strony
                    Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do wykonania związanych z nimi czynności określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W odniesieniu do danych marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata.
                    Przysługuje Ci prawo żądania od Administratora:
                    dostępu do danych osobowych Ciebie dotyczących,
                    ich sprostowania,
                    usunięcia,
                    ograniczenia przetwarzania,
                    oraz przenoszenia danych.
                    Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego w pkt 3.3 c) wobec przetwarzania danych osobowych w celu wykonania prawnie uzasadnionych interesów realizowanych przez Administratora, w tym profilowania, przy czym prawo sprzeciwu nie będzie mogło być wykonane w przypadku istnienia ważnych prawnie uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Ciebie interesów, praw i wolności, w szczególności ustalenia, dochodzenia lub obrony roszczeń.
                    Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.
                    Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu.
                    W stosunku do Ciebie mogą być podejmowane czynności polegające na zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia przez Administratora marketingu bezpośredniego.
                    Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu przepisów o ochronie danych osobowych. Oznacza to, że nie przesyłamy ich poza teren Unii Europejskiej.
                    5. Informacje w formularzach
                    Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one podane.
                    Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP).
                    Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych w formularzu z adresem e-mail użytkownika wypełniającego formularz. W takim wypadku adres e-mail użytkownika pojawia się wewnątrz adresu url strony zawierającej formularz.
                    Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w celu dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego, rejestracji usług itp. Każdorazowo kontekst i opis formularza w czytelny sposób informuje, do czego on służy.
                    6. Logi Administratora
                    Informacje zachowaniu użytkowników w serwisie mogą podlegać logowaniu. Dane te są wykorzystywane w celu administrowania serwisem.
                    8. Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?
                    Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www

                </p>
                <p>
                    9. Informacja o plikach cookies
                </p>
                {mounted ? <>
                    <Script id='CookieDeclaration' src="https://consent.cookiebot.com/65eac2d6-81a4-4a72-9272-9710402a045e/cd.js" type='text/javascript' async />
                </> : null}
            </main>
        </div>
    )
}

export default PrivacyPolicy;