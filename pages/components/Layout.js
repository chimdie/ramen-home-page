import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'


export const siteTitle = "Ramen"

function Layout() {
    return (
        <div>
            <Navbar/>
            <Hero />
        </div>
    )
}

export default Layout
