import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import Footer from '@/components/sections/footer';
import Navbar from '@/components/sections/navbar';

function Cookies() {
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
            {mounted ? <>
                <Script id='CookieDeclaration' src="https://consent.cookiebot.com/65eac2d6-81a4-4a72-9272-9710402a045e/cd.js" type='text/javascript' async />
            </> : null}
        </div>
    )
}

export default Cookies