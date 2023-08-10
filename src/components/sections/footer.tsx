import React from 'react'
import LogoFooter from '../icons/logo-footer'
import InstagramIcon from '../icons/instagram'
import FacebookIcon from '../icons/facebook'
import LinkedInIcon from '../icons/linkedin'

function FooterSection() {
    return (
        <div className='mt-36 flex flex-col items-center lg:flex-row lg:items-start lg:justify-between lg:mb-24'>
            <div className='w-[142px] lg:w-[160px] '>
                <LogoFooter />
            </div>
            <div className=' text-center mt-12 text-base lg:text-left lg:mt-0'>
                <div>
                    <h3 className='font-extrabold'>Adres:</h3>
                    <p className='font-medium'>Warszawa, Niewiadoma 49</p>
                </div>
                <div className='mt-4'>
                    <h3 className='font-extrabold'>Adres email:</h3>
                    <p className='font-medium'>hello@graysoundlab.com</p>
                </div>
                <div className='mt-4'>
                    <h3 className='font-extrabold'>Numer telefonu:</h3>
                    <p className='font-normal'>+48 333 452 523</p>
                </div>
            </div>
            <div className='text-center mt-12 lg:text-left lg:mt-0'>
                <h3 className='font-extrabold'>Przydatne linki</h3>
                <h4 className='mt-3 font-medium'>Polityka prywatności</h4>
                <h4 className='mt-3 font-medium'>Regulamin</h4>
                <h4 className='mt-3 font-medium'>Kalkulator wyceny</h4>
                <h4 className='mt-3 font-medium'>Baza głosów</h4>
                <h4 className='mt-3 font-medium'>Postęp projektu</h4>
                <h4 className='mt-3 font-medium'>Kontakt</h4>
            </div>
            <div className='text-center mt-12 lg:text-left lg:mt-0'>
                <h3 className='font-extrabold'>Nasze social media</h3>
                <div className='flex justify-center mt-2 '>
                    <div className='w-[80px] h-[80px] lg:-ml-4'>
                        <InstagramIcon />
                    </div>
                    <div className='w-[80px] h-[80px] -ml-4'>
                        <FacebookIcon />
                    </div><div className=' w-[80px] h-[80px] -ml-4'>
                        <LinkedInIcon />
                    </div>
                </div>
                <div className='mt-24'></div>
            </div>
        </div>
    )
}

export default FooterSection