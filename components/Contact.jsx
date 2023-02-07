import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillHouseFill, BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import contact from "../public/assets/contact.jpg";
import { Audiowide } from "@next/font/google";

const audioWide = Audiowide({
  subsets: ["latin"],
  weight: ["400"],
});

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:screen">
      <div className="max-w-[1240px] m-auto px-2 py-32 w-full">
        <p className="text-xl tracking-widest uppercase text-[#1f75fe]">
          Contact
        </p>
        <h2 className="py-4">Get in Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contact}
                  alt="/"
                />
              </div>
              <div>
                <div className={audioWide.className}>
                  <h2 className="py-2 text-[#1f75fe]">Patrick Brandenburg</h2>
                </div>
                <p>Full-Stack Developer</p>
                <p className="py-4">
                  I am available for feelance or full-time positions. Contact me
                  and let's talk.
                </p>
              </div>
              <div>
                <h4 className="uppercase pt-8 flex items-center justify-center tracking-widest">Let's Connect!</h4>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a href="https://www.linkedin.com/in/patrickbrandenburg/">
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a href="https://github.com/pjbrandenburg">
                      <FaGithub />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a href="mailto:brandenburg.patrick@gmail.com">
                      <AiOutlineMail />
                    </a>
                  </div>
                  {/* <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                    </div> */}
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a href="https://www.firesidere.com/">
                      <BsFillHouseFill />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    {/* <label className='uppercase text-sm py-2'>
                                        Name
                                    </label> */}
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="flex flex-col">
                    {/* <label className='uppercase text-sm py-2'>
                                        'Phone Number
                                    </label> */}
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  {/* <label className='uppercase text-sm py-2'>
                                        Email
                                    </label> */}
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    placeholder="Email"
                  />
                </div>

                <div className="flex flex-col py-2">
                  {/* <label className='uppercase text-sm py-2'>
                                        Subject
                                    </label> */}
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    placeholder="Subject"
                  />
                </div>

                <div className="flex flex-col py-2">
                  {/* <label className='uppercase text-sm py-2'>
                                        Message
                                    </label> */}
                  <textarea
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    rows="10"
                    type="text"
                    placeholder="Your Message"
                  />
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div
              className="rounded-full shadow-lg shadow-gray-400 
                        p-6 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <HiOutlineChevronDoubleUp className="text-[#1f75fe]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
