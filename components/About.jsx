import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='upercase text-xl tracking-widest text-[#1f75fe]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>// I am not your normal developer</p>
                <p className='py-2 text-gray-600'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                 do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                 laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                 irure dolor in reprehenderit in voluptate velit esse cillum 
                 dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                 cupidatat non proident, sunt in culpa qui officia deserunt
                 mollit anim id est laborum.
                </p>
                <p className='py-2 text-gray-600'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                 do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                 laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                 irure dolor in reprehenderit in voluptate velit esse cillum 
                 dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                 cupidatat non proident, sunt in culpa qui officia deserunt
                 mollit anim id est laborum.
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>
                    Check out some of my latest projects
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image 
                    className='rounded-xl'
                    src='/../public/assets/Headshot.png' 
                    width='200' 
                    height='200' 
                    alt='headshot' 
                    />
            </div>
        </div>
    </div>
  )
}

export default About