import React from 'react'
import Footer from './partials/Footer'
import Header from './partials/Header'

const DefaultLayout = ({children}) => {
    return (
        <div>
            <div className='default-layout'>
                <header className='header mb-2'>
                    <Header />
                </header>
                <main className='main'>
                    {children}
                </main>
                <footer className='footer'>
                    <Footer />
                </footer>
            </div>
        </div>
    )
}

export default DefaultLayout
