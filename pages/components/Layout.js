import React from 'react'
import Navbar from './Navbar'
import Head from 'next/head'

export const siteTitle = "Ramen"

function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Navbar/>
            {children}
        </div>
    )
}

export default Layout
