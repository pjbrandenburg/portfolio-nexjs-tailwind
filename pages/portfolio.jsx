import Image from 'next/image'
import React from 'react'
import portfolioImg from '../public/assets/projects/portfolio.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import { HiChevronDoubleLeft } from 'react-icons/hi'
import Link from 'next/link'

const portfolio = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          src={portfolioImg}
          fill
          style={{ objectFit: "cover" }}
          alt='Portfolio Site'
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Personal Portfolio</h2>
          <h3>Next.js Stack</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className='py-2'>
            This porfolio site is the result of research into the most used frontend frameworks
            and numerous tutorials showing how to create an aesthetically pleasing website from scratch.
            I chose Next.js as it is one of the most used frameworks for one of the most used frontend
            libraries - React. I set out to create my own personal website from the ground up to showcase
            not only my resume and portfolio, but also my ability to learn a new technology stack 
            and gain experience with modern web development.
          </p>
          <a href='https://github.com/pjbrandenburg/'>
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Javascript
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-12">
        <Link href="/#projects">
          <div
            className="rounded-full shadow-lg shadow-gray-400 
                        p-6 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <HiChevronDoubleLeft className="text-[#1f75fe]" size={30} />
            {/* <p className='underline cursor-pointer'>Back</p> */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default portfolio