import React from 'react'
import { ToastContainer } from 'react-toastify';

function ToastContainerWrapper() {
    return (
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            draggable={false}
            closeButton={false}
            closeOnClick
            pauseOnHover
            toastStyle={{
                backgroundColor: '#121221',
                paddingBottom: '24px',
                paddingTop: '18px',
                paddingLeft: '8px',
                paddingRight: '8px',
                marginTop: '10px',
                borderRadius: '14px',
                borderColor: 'rgba(230, 181, 115, 1)',
                color: 'white',
            }}
            progressStyle={{
                background:
                    'linear-gradient(90deg, rgba(230, 181, 115, 1) 0%, rgba(204, 152, 82, 1) 100%)',
            }}
        />

    )
}

export default ToastContainerWrapper