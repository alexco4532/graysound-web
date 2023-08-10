import React from 'react'

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="100%" fill="none" viewBox="0 0 89 90" className='cursor-pointer'>
      <g filter="url(#a)">
        <path fill="#fff" d="M44.495 65.255c13.325 0 24.127-10.802 24.127-24.128C68.622 27.802 57.82 17 44.495 17c-13.326 0-24.128 10.802-24.128 24.127 0 13.326 10.802 24.128 24.128 24.128Z" />
      </g>
      <path fill="#0B0B14" d="M51.425 32.126v-4.364s-4.461-.043-4.761-.043c-2.016 0-4.912 2.294-4.912 4.9v4.676H37.57v4.954h4.118v12.278h4.88V42.184h4.31l.547-4.836H46.62v-3.55c0-.857.643-1.683 1.608-1.683.644-.021 3.196.011 3.196.011Z" />
      <defs>
        <filter id="a" width="88.254" height="88.254" x=".367" y=".86" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="3.86" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_211_11555" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_211_11555" result="shape" />
        </filter>
      </defs>
    </svg>

  )
}

export default FacebookIcon