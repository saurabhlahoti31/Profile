import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../Components/Navbar.jsx'
import { Footer } from '../Components/Footer.jsx'


export const Mainlayout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />

        </div>
    )
}
