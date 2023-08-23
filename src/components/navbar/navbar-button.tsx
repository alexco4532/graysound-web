import React from 'react'

type Props = { onClick: () => void; className?: string; children: React.ReactNode }

function NavbarButton({ onClick, children, className }: Props) {
    return (
        <button onClick={onClick} className={`text-sm font-semibold leading-6  text-white ${className}`}>
            {children}
        </button>
    )
}

export default NavbarButton;