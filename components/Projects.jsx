import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import propertyImg from '../public/assets/projects/property.jpg'
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
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
                    backgroundImg={propertyImg} 
                    projectUrl='/portfolio' 
                />
                <Projectitem 
                    title='Discord Lookalike' 
                    backgroundImg={cryptoImg} 
                    projectUrl='/chatroom' 
                />
                <Projectitem 
                    title='License Plate Detector' 
                    backgroundImg={netflixImg} 
                    projectUrl='/licensedetector' 
                />
                <Projectitem 
                    title='E-Commerce Site' 
                    backgroundImg={twitchImg} 
                    projectUrl='/ecommerce' 
                />

            </div>
        </div>
    </div>
  )
}

export default Projects