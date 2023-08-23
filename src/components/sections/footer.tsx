import React from 'react'
import LogoFooter from '../icons/logo-footer'
import InstagramIcon from '../icons/instagram'
import FacebookIcon from '../icons/facebook'
import LinkedInIcon from '../icons/linkedin'
import { toast } from 'react-toastify'

function FooterSection() {
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
                    <h3 className='font-extrabold'>Adres:</h3>
                    <p className='font-medium'>Warszawa, Niewiadoma 49</p>
                </div>
                {/* Email Section */}
                <div className='mt-4'>
                    <h3 className='font-extrabold'>Adres email:</h3>
                    <p className='font-medium'>hello@graysoundlab.com</p>
                </div>
                {/* Phone Number Section */}
                <div className='mt-4'>
                    <h3 className='font-extrabold'>Numer telefonu:</h3>
                    <p className='font-normal'>+48 333 452 523</p>
                </div>
            </div>

            {/* Useful links container */}
            <div className='text-center mt-12 lg:text-left lg:mt-0'>
                <h3 className='font-extrabold'>Przydatne linki</h3>
                {/* List of useful links */}
                <ul>
                    <li onClick={pageIsNotReady} className='mt-3 font-medium cursor-pointer'>Polityka prywatności</li>
                    <li onClick={pageIsNotReady} className='mt-3 font-medium cursor-pointer'>Regulamin</li>
                    <li onClick={pageIsNotReady} className='mt-3 font-medium cursor-pointer'>Kalkulator wyceny</li>
                    <li onClick={pageIsNotReady} className='mt-3 font-medium cursor-pointer'>Baza głosów</li>
                    <li onClick={pageIsNotReady} className='mt-3 font-medium cursor-pointer'>Postęp projektu</li>
                </ul>
            </div>

            {/* Social media icons container */}
            <div className='text-center mt-12 lg:text-left lg:mt-0'>
                <h3 className='font-extrabold'>Nasze social media</h3>
                <ul className='flex justify-center mt-2 '>
                    <li className='w-[80px] h-[80px] lg:-ml-4'>
                        <InstagramIcon />
                    </li>
                    <li className='w-[80px] h-[80px] -ml-4'>
                        <FacebookIcon />
                    </li>
                    <li className=' w-[80px] h-[80px] -ml-4'>
                        <LinkedInIcon />
                    </li>
                </ul>
                {/* Additional margin at the bottom */}
                <div className='mt-24'></div>
            </div>
        </footer>
    )
}

export default FooterSection;