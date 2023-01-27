import React from 'react'
import { Audiowide } from '@next/font/google'

const audioWide = Audiowide({
  subsets: ['latin'],
  weight: ['400']  
})


const Logo = () => {
  return (
    <div className={audioWide.className}>
        <p className='text-5xl italic tracking-wider text-[#1f75fe]'>PB</p>
    </div>
  )
}

export default Logo