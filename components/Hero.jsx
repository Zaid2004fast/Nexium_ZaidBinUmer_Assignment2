"use client"

import { logo } from '@public/assets'

import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
    <nav className="flex justify-between items-center w-full mb-10 pt-3">
    <Link href='/' className='flex gap-2 flex-center'>
    <Image 
      src={logo}
      alt = "logo"
      width={100}
      height={100}
      className='object-contain'
    />
    </Link>
    
        <button type="button" className="black_btn" onClick={() => window.open('https://github.com/Zaid2004fast')}>
            GitHub
        </button>
    </nav>

    <h1 className='head_text'>
        Summarize your Favorite Articles <br className='max-md:hidden'/>
        <span className='orange_gradient'>With the Help of AI</span>
    </h1>
    <h2 className='desc'>
        An open-source article summarizer made by Zaid that transforms lengthy article into clear and concise summaries 
    </h2>
    </header>
  )
}

export default Hero