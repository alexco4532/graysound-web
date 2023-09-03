import React from 'react'
import LogoFooter from '../icons/logo-footer'
import InstagramIcon from '../icons/instagram'
import FacebookIcon from '../icons/facebook'
import LinkedInIcon from '../icons/linkedin'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

function FooterSection() {
    const router = useRouter();
    const goToPrivacyPolicy = () => {
        router.push('/prywatnosc');
    }

    const goToCookiesInfo = () => {
        router.push('/cookies');
    }

    const pageIsNotReady = () => {
        toast.dark("Podstrona jest obecnie w budowie 🛠️", { autoClose: 2500 });
    }
    return (
        <footer className='mt-36 flex flex-col items-center lg:flex-row lg:items-start lg:justify-between lg:mb-24'>
            {/* Logo container */}
            <div className='w-[142px] lg:w-[160px] '>
                <LogoFooter />
            </div>

            {/* Contact information container */}
            <div className=' text-center mt-12 text-base lg:text-left lg:mt-0 '>
                {/* Address Section */}
                <div>
                    <h3 className='font-extrabold'>Dane firmy:</h3>
                    <p className='font-medium'>Jakub Sampławski GraySound <br />Rozbrat 16/18 m.35 00-447 Warszawa<br />NIP 7010992840</p>
                </div>
                {/* Email Section */}
                <div className='mt-4'>
                    <h3 className='font-extrabold'>Adres email:</h3>
                    <p className='font-medium'>kontakt@graysoundlab.com</p>
                </div>
                {/* Phone Number Section */}
                <div className='mt-4'>
                    <h3 className='font-extrabold'>Numer telefonu:</h3>
                    <p className='font-normal'>728 466 399</p>
                </div>
            </div>

            {/* Useful links container */}
            <div className='text-center mt-12 lg:text-left lg:mt-0'>
                <h3 className='font-extrabold'>Przydatne linki</h3>
                {/* List of useful links */}
                <ul>
                    <li className='mt-3 font-medium cursor-pointer lg:hover:text-gray-400'>
                        <a target="_blank" href='/prywatnosc'>Polityka prywatności</a>
                    </li>
                    <li className='mt-3 font-medium cursor-pointer lg:hover:text-gray-400'>
                        <a target="_blank" href='/cookies'>Informacje o cookies</a>
                    </li>
                    <li onClick={pageIsNotReady} className='mt-3 font-medium cursor-pointer lg:hover:text-gray-400'>Kalkulator wyceny</li>
                    <li onClick={pageIsNotReady} className='mt-3 font-medium cursor-pointer lg:hover:text-gray-400'>Baza głosów</li>
                    <li onClick={pageIsNotReady} className='mt-3 font-medium cursor-pointer lg:hover:text-gray-400'>Postęp projektu</li>
                </ul>
            </div>

            {/* Social media icons container */}
            <div className='text-center mt-12 lg:text-left lg:mt-0'>
                <h3 className='font-extrabold'>Nasze social media</h3>
                <ul className='flex justify-center mt-2 '>
                    <li className='w-[80px] h-[80px] lg:-ml-4 lg:hover:scale-105 lg:duration-200'>
                        <a target="_blank" href='https://www.instagram.com/graysoundlab/'>
                            <InstagramIcon />
                        </a>
                    </li>
                    <li className='w-[80px] h-[80px] -ml-4 lg:hover:scale-105 lg:duration-200'>
                        <a target="_blank" href='https://www.facebook.com/people/GraySound/100091991017805/'>
                            <FacebookIcon />
                        </a>
                    </li>
                    <li className=' w-[80px] h-[80px] -ml-4 lg:hover:scale-105 lg:duration-200'>
                        <a target="_blank" href='https://www.linkedin.com/in/jakub-samp%C5%82awski-ab236b285/'>
                            <LinkedInIcon />
                        </a>
                    </li>
                </ul>
                {/* Additional margin at the bottom */}
                <div className='mt-24'></div>
            </div>
        </footer>
    )
}

export default FooterSection;