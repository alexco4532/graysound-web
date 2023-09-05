import React from 'react'
import ClientsSection from '../sections/clients'
import Listeners from '../sections/listeners'
import FormSection from '../sections/form-section'
import FooterSection from '../sections/footer'
import SpatialSoundSection from '../sections/spatial-sound'

function DynamicSections() {
    return (
        <>
            <SpatialSoundSection />
            <ClientsSection />
            <Listeners />
            <FormSection />
            <FooterSection />
        </>
    )
}

export default DynamicSections