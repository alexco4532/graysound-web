import React from 'react'

function EmailInput({ value, onChange }: { value: string; onChange: (value: string) => void }) {
    return (
        <div className='mt-[48px]'>
            <label htmlFor='email'>Adres e-mail</label>
            <input autoComplete='off' id='email' name='email' type='email' required minLength={3} placeholder='Twój adres email' value={value} onChange={(event) => onChange(event.target.value)} className='bg-block w-full rounded-2xl py-4 border border-[#1e1e31] outline-none px-5 font-Main mt-2 text-base' />
        </div>
    )
}

export default EmailInput;