import React from 'react';
import Script from 'next/script';
import Footer from '@/components/sections/footer';
import Navbar from '@/components/sections/navbar';

function Cookies() {
    return (
        <div>
            <Navbar />
            <main
                className={`mx-auto flex min-h-screen flex-col max-w-6xl px-6 font-Main`}
            >
                <Script id='CookieDeclaration' src="https://consent.cookiebot.com/65eac2d6-81a4-4a72-9272-9710402a045e/cd.js" type='text/javascript' async />
                <Footer />
            </main>
        </div>
    )
}

export default Cookies