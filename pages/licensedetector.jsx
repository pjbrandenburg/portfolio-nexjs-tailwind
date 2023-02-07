import Image from 'next/image'
import React from 'react'
import licensedetectorImg from '../public/assets/projects/license_detector.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import { HiChevronDoubleLeft } from 'react-icons/hi'
import Link from 'next/link'

const licensedetector = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          src={licensedetectorImg}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">License Plate Detector</h2>
          <h3>Deep Learning Computer Vision</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className='py-2'>
            I enrolled in the three courses provided by OpenCV to learn how to use OpenCV
            and gain experience with deep learning. The first two courses focused on understanding
            how OpenCV works while the third course focused mainly on current state of the art 
            deep learning algorithms and libraries. The third course introduced many convolutional
            neural networks, including AlexNet and VGG, as well as libraries and frameworks such as
            YOLO and Detectron2. This particular project utilized a Mask-RCNN neural net within the 
            Detectron2 platform trained on license plate data in order to identify license plates on 
            static images as well as a video.
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
                Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                OpenCV
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                PyTorch
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Neural Networks
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Detectron2
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

export default licensedetector