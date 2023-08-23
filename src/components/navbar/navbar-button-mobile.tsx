import React from 'react'

type Props = { onClick: () => void; className?: string; children: React.ReactNode }

function NavbarButtonMobile({ onClick, children, className }: Props) {
    return (
        <button onClick={onClick} className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white cursor-none lg:cursor-pointer ${className}`}>
            {children}
        </button>
    )
}

export default NavbarButtonMobile;