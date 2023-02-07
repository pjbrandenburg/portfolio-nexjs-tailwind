import Image from 'next/image'
import React from 'react'
import Headshot from '../public/assets/Headshot.png'
import laptop from '../public/assets/laptop.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='upercase text-xl tracking-widest text-[#1f75fe]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>// Self-Starter, Motivated, Experienced</p>
                <p className='py-2 text-gray-600'>
                I've taken a hobby and turned it into a profession. Learning the ins-and-outs of
                coding and software development in my spare time has lead me down a path of becoming
                a software engineer working in robotics. 
                </p>
                <p className='py-2 text-gray-600'>
                With a background in mechanical and aerospace engineering and project management, I was 
                always looking to expand my knowledge base. Exposure to coding in university 
                gave me a glimpse into what was possible in the world of software. I've spent time
                learning a number of modern development realms including machine learning, 
                computer vision, full stack development, and more. 
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>
                    <a href='https://github.com/pjbrandenburg'>
                        Check out some of my latest projects!
                    </a>
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image 
                    className='rounded-xl'
                    src={laptop} 
                    width='450' 
                    height='450' 
                    alt='about' 
                    />
            </div>
        </div>
    </div>
  )
}

export default About