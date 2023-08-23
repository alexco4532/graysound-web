import React from 'react'
import Form from '../contact-form/form'

function FormSection() {
    return (
        <section className='mt-36'>
            {/* Section heading */}
            <header>
                <h1 className='text-headerSection text-center font-extrabold'>Skontaktuj się z nami</h1>
            </header>
            {/* Form container */}
            <div className=' md:flex md:justify-center md:items-center'>
                <Form />
            </div>
        </section>
    )
}

export default FormSection;