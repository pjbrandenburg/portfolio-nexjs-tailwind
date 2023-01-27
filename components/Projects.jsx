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
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
            
                <Projectitem 
                    title='Property Finder' 
                    backgroundImg={propertyImg} 
                    projectUrl='/property' 
                />
                <Projectitem 
                    title='Crypto App' 
                    backgroundImg={cryptoImg} 
                    projectUrl='/property' 
                />
                <Projectitem 
                    title='Netlix' 
                    backgroundImg={netflixImg} 
                    projectUrl='/property' 
                />
                <Projectitem 
                    title='Twitch' 
                    backgroundImg={twitchImg} 
                    projectUrl='/property' 
                />

            </div>
        </div>
    </div>
  )
}

export default Projects