import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteTitle } from './Layout'


function Navbar() {
    return (
        <div className='flex py-4 px-2 justify-between shadow-sm'>
            <div className='text-2xl items-center md:ml-10'>
                <Link href='/'>
                    <a className='items-center pt-6'>
                    <Image
                        src='/images/Logo.png'
                        height={20}
                        width={100}
                        alt={siteTitle}
                    />
                    </a>
                </Link>
            </div>
            <div className='md:space-x-4 items-center font-md hidden md:flex '>
                <Link href="/">
                    <a className='hover:text-gray-400'>Home</a>
                </Link>
                <Link href="#">
                    <a className='hover:text-gray-400'>Menu</a>
                </Link>
                <Link href="#">
                    <a className='hover:text-gray-400'>Order</a>
                </Link>
                <Link href="">
                    <a className='hover:text-gray-400'>Story</a>
                </Link>
                <Link href="">
                    <a className='hover:text-gray-400'>Contact</a>
                </Link>
            </div>
            <div className='md:mr-20'>
                <button className='bg-yellow-500 py-1 px-2.5 rounded-sm text-white font-bold hover:bg-white hover:text-yellow-500'>
                    Login
                </button>
            </div>
        </div>
    )
}

export default Navbar
