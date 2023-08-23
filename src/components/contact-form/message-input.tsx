import React from 'react'

function MessageInput({ value, onChange }: { value: string; onChange: (value: string) => void }) {
    return (
        <div className='mt-[32px]'>
            <label htmlFor='message'>Wiadomość</label>
            <textarea autoComplete='off' id='message' name='message' required minLength={3} maxLength={300} placeholder='Twoja wiadomość' value={value} onChange={(event) => onChange(event.target.value)} className='bg-block w-full min-h-[200px] max-h-[280px] rounded-2xl py-4 border border-[#1e1e31] outline-none px-5 font-Main mt-2 text-base ' />
        </div>
    )
}

export default MessageInput;