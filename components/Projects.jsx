import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import portfolioImg from '../public/assets/projects/portfolio.png'
import studybudImg from '../public/assets/projects/studybud.png'
import licensedetectorImg from '../public/assets/projects/license_detector.png'
import ecommerceImg from '../public/assets/projects/ecommerce_cart.png'
import Projectitem from './Projectitem'

const Projects = () => {
  return (
    <div id='projects' className='w-full py-4.5rem'>
        <div className='max-w-[1240px] mx-auto px-2 py-32'>
            <p className='text-xl tracking-widest uppercase text-[#1f75fe]'>Projects</p>
            <h2>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
            
                <Projectitem 
                    title='This Website!' 
                    backgroundImg={portfolioImg} 
                    stack='Next.js'
                    projectUrl='/portfolio' 
                />
                <Projectitem 
                    title='Discord Lookalike' 
                    backgroundImg={studybudImg} 
                    stack='Django'
                    projectUrl='/chatroom' 
                />
                <Projectitem 
                    title='License Plate Detector' 
                    backgroundImg={licensedetectorImg} 
                    stack='OpenCV'
                    projectUrl='/licensedetector' 
                />
                <Projectitem 
                    title='E-Commerce Site' 
                    backgroundImg={ecommerceImg} 
                    stack='Next.js'
                    projectUrl='/ecommerce' 
                />

            </div>
        </div>
    </div>
  )
}

export default Projects