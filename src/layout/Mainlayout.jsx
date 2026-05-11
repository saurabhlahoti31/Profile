import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Navbar } from '../Components/Navbar.jsx'
import { Footer } from '../Components/Footer.jsx'


export const Mainlayout = () => {
    return (
        <div>
            <ScrollRestoration />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />

        </div>
    )
}
