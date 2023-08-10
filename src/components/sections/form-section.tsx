import React from 'react'
import Form from '../ui/form'

function FormSection() {
    return (
        <div id='form' className='mt-36'>
            <h2 className='text-headerSection text-center font-extrabold '>Skontaktuj się z nami</h2>
            <div className=' md:flex md:justify-center md:items-center'>
                <Form />
            </div>
        </div>
    )
}

export default FormSection