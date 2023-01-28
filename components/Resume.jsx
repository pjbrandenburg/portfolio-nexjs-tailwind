import React from "react";
import { MdWork, MdSchool, MdLocationOn } from "react-icons/md";

const Resume = () => {
  return (
    <div id="resume" className="w-full py-28">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#1f75fe]">
          Résumé
        </p>
        <h2 className="py-4">What I've Done</h2>

        <div className="grid grid-rows-6 grid-flow-col gap-4">
        {/* Work */}
          <div className="flex justify-center py-12">
            <div
              className="rounded-full shadow-lg shadow-gray-400 
                        p-6 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <div className="grid grid-rows-1 gap-4 justify-center items-center">
                <div className="flex flex-row items-center justify-center">
                  <div className="m-auto">
                    <MdWork className="text-[#1f75fe]" size={30} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-rows-1 gap-4 justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <p>2022 - Present</p>
                <h3>Mobile Industrial Robots</h3>
                <h5>Simulation Software Engineer</h5>
                <div className="grid grid-cols-1 items-center justify-center">
                  <div className="flex">
                    <div className="flex justify-end">
                      <MdLocationOn />
                    </div>
                    <div className="flex justify-start">
                      <p>North Reading, MA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-rows-1 gap-4 justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <p>2018 - 2022</p>
                <h3>AutoGuide Mobile Robots</h3>
                <h5>Project Engineer</h5>
                <div className="grid grid-cols-1 items-center justify-center">
                  <div className="flex">
                    <div className="flex justify-end">
                      <MdLocationOn />
                    </div>
                    <div className="flex justify-start">
                      <p>North Reading, MA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-rows-1 gap-4 justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <p>2016 - 2018</p>
                <h3>GEA Mechanical Equipment US</h3>
                <h5>Project Engineer</h5>
                <div className="grid grid-cols-1 items-center justify-center">
                  <div className="flex">
                    <div className="flex justify-end">
                      <MdLocationOn />
                    </div>
                    <div className="flex justify-start">
                      <p>Northvale, NJ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-rows-1 gap-4 justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <p>2015 - 2016</p>
                <h3>Chromalloy</h3>
                <h5>NPI Product Engineer</h5>
                <div className="grid grid-cols-1 items-center justify-center">
                  <div className="flex">
                    <div className="flex justify-end">
                      <MdLocationOn />
                    </div>
                    <div className="flex justify-start">
                      <p>Orangeburg, NY</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-rows-1 gap-4 justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <p>2012-2015</p>
                <h3>PHT Aerospace</h3>
                <h5>Aerospace Design Engineer</h5>
                <div className="grid grid-cols-1 items-center justify-center">
                  <div className="flex">
                    <div className="flex justify-end">
                      <MdLocationOn />
                    </div>
                    <div className="flex justify-start">
                      <p>Pompton Plains, NJ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="flex justify-center py-12">
            <div
              className="rounded-full shadow-lg shadow-gray-400 
                        p-6 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <div className="grid grid-rows-1 gap-4 justify-center items-center">
                <div className="flex flex-row items-center justify-center">
                  <div className="m-auto">
                    <MdSchool className="text-[#1f75fe]" size={30} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-rows-1 gap-4 justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <p>2013 - 2015</p>
                <h3>Stevens Institute of Technology</h3>
                <h5>MEng, Mechanical Engineering</h5>
                <div className="grid grid-cols-1 items-center justify-center">
                  <div className="flex">
                    <div className="flex justify-end">
                      <MdLocationOn />
                    </div>
                    <div className="flex justify-start">
                      <p>Hoboken, NJ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-rows-1 gap-4 justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <p>2008 - 2012</p>
                <h3>Boston University</h3>
                <h5>BS, Aerospace Engineering</h5>
                <div className="grid grid-cols-1 items-center justify-center">
                  <div className="flex">
                    <div className="flex justify-end">
                      <MdLocationOn />
                    </div>
                    <div className="flex justify-start">
                      <p>Boston, MA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
