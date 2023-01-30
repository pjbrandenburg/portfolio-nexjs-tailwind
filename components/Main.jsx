import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillHouseFill, BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Let's build something together!</p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I'm <span className='text-[#1f75fe]'>Patrick</span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    A Software Engineer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                As a hardware engineering turned software engineer, I have a unique
                perspective on software development. I started coding in my spare time and
                worked my way into a role through robotics and machine learning. I'm constantly 
                looking to learn new technologies and expand my skillset.
                </p>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                Currently working on implementing computer vision in mobile robots. 
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href='https://www.linkedin.com/in/patrickbrandenburg/'>
                            <FaLinkedinIn />
                        </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href='https://github.com/pjbrandenburg'>
                            <FaGithub />
                        </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href='mailto:brandenburg.patrick@gmail.com'>
                            <AiOutlineMail />
                        </a>
                    </div>
                    {/* <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                    </div> */}
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href='https://www.firesidere.com/'>
                            <BsFillHouseFill />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main