import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteTitle } from './Layout'


function Navbar() {
    return (
        <div className='py-6 px-8 flex justify-between shadow-sm'>
            <div className='text-2xl items-center ml-8'>
                <Link href='/'>
                    <a>
                    <Image
                        src='/images/Logo.png'
                        height={25}
                        width={100}
                        alt={siteTitle}
                    />
                    </a>
                </Link>
            </div>
            <div className='grid grid-cols-5 gap-3 md:grid-cols-6 items-center'>
                <Link href="">
                    <a className='hover:text-gray-400'>Home</a>
                </Link>
                <Link href="">
                    <a className='hover:text-gray-400'>Menu</a>
                </Link>
                <Link href="">
                    <a className='hover:text-gray-400'>Order</a>
                </Link>
                <Link href="">
                    <a className='hover:text-gray-400'>Story</a>
                </Link>
                <Link href="">
                    <a className='hover:text-gray-400'>Contact</a>
                </Link>
            </div>
            <div className='mr-8 '>
                <button className='bg-yellow-500 py-1 px-2.5 rounded-sm text-white font-bold hover:bg-yellow-400'>
                    Login
                </button>
            </div>
        </div>
    )
}

export default Navbar
