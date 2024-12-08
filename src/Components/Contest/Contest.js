import React from 'react';

const Contest = () => {
  return (
    <div
      className="min-h-screen bg-[#210145] text-white py-6 md:py-12 px-3 flex justify-center"
      style={{
        backgroundImage: 'url(/neon-3d-cybermonday-celebration-template.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="flex flex-col items-center">
      <p className="font-misri mt-3 text-[18px] font-bold leading-8 text-center">
  Contest Schedule
</p>


        <h2 className="text-center text-3xl md:text-5xl font-bold font-misri mt-3">
          The National I am Scientist System
        </h2>
        <div className="w-full md:w-[87%] 2xl:w-full mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-12 font-popins">
          <div className="border-2 border-[#1977ff] rounded-xl p-3 md:p-4 w-full transition-all ease-in-out duration-500 hover:scale-105">
            <h3 className="text-[#1977ff] font-marinda text-4xl font-bold">General</h3>
            <h4 className="text-black text-2xl md:text-3xl xl:text-2xl text-center font-popins font-semibold mt-1 mb-4 bg-white rounded-lg p-2">
              ANNOUNCEMENTS
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="border-[#1977ff] flex w-[70px] font-popins flex-col items-center border-l-[3px] border-t-[3px] text-white rounded-lg">
                  <div className="border-[#1977ff] flex items-center justify-center w-full h-6 border-r-[4px] border-b-[3px] rounded-tr-md rounded-tl-md relative">
                    <div className="w-1 h-1 rounded-full mx-1 bg-[#1977ff]"></div>
                    <div className="w-1 h-1 rounded-full mx-1 bg-[#1977ff]"></div>
                    <div className="absolute -top-2 left-3 w-1 h-4 rounded-lg bg-[#1977ff]"></div>
                    <div className="absolute -top-2 right-3 w-1 h-4 rounded-lg bg-white bg-[#1977ff]"></div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold flex items-center justify-center">18</span>
                    <span className="text-sm font-semibold flex items-center justify-center">NOV</span>
                  </div>
                </div>
                <div className="border-b-4">
                  <h5 className="text-white font-bold text-base whitespace-nowrap">
                    General Announcement
                  </h5>
                  <p className="bg-[#1977ff] rounded-sm px-1 my-1 text-xs md:text-base font-semibold text-black">
                    Nov 18, 2024 - Dec 24, 2024
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 flex-row-reverse">
                <div className="border-[#1977ff] flex w-[70px] font-popins flex-col items-center border-r-[3px] border-t-[3px] text-white rounded-lg">
                  <div className="border-[#1977ff] flex items-center justify-center w-full h-6 border-l-[3px] border-b-[3px] rounded-tr-md rounded-tl-md relative">
                    <div className="w-1 h-1 rounded-full mx-1 bg-[#1977ff]"></div>
                    <div className="w-1 h-1 rounded-full mx-1 bg-[#1977ff]"></div>
                    <div className="absolute -top-2 left-3 w-1 h-4 rounded-lg bg-[#1977ff]"></div>
                    <div className="absolute -top-2 right-3 w-1 h-4 rounded-lg bg-white bg-[#1977ff]"></div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold flex items-center justify-center">1</span>
                    <span className="text-sm font-semibold flex items-center justify-center">DEC</span>
                  </div>
                </div>
                <div className="border-b-4">
                  <h5 className="text-white font-bold text-base whitespace-nowrap">
                    Registration Confirmation
                  </h5>
                  <p className="bg-[#1977ff] rounded-sm px-1 my-1 text-xs md:text-base font-semibold text-black">
                    Dec 1, 2024 - Dec 20, 2024
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="border-[#1977ff] flex w-[70px] font-popins flex-col items-center border-l-[3px] border-t-[3px] text-white rounded-lg">
                  <div className="border-[#1977ff] flex items-center justify-center w-full h-6 border-r-[4px] border-b-[3px] rounded-tr-md rounded-tl-md relative">
                    <div className="w-1 h-1 rounded-full mx-1 bg-[#1977ff]"></div>
                    <div className="w-1 h-1 rounded-full mx-1 bg-[#1977ff]"></div>
                    <div className="absolute -top-2 left-3 w-1 h-4 rounded-lg bg-[#1977ff]"></div>
                    <div className="absolute -top-2 right-3 w-1 h-4 rounded-lg bg-white bg-[#1977ff]"></div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold flex items-center justify-center">24</span>
                    <span className="text-sm font-semibold flex items-center justify-center">JAN</span>
                  </div>
                </div>
                <div className="border-b-4">
                  <h5 className="text-white font-bold text-base whitespace-nowrap">Contest Results</h5>
                  <p className="bg-[#1977ff] rounded-sm px-1 my-1 text-xs md:text-base font-semibold text-black">
                    Jan 24, 2025 - Jan 25, 2025
                  </p>
                </div>
              </div>
            </div>
            <a href="/auth/signup">
              <button className="mt-6 bg-white w-full text-black py-3 px-4 text-base md:text-xl rounded-lg font-semibold hover:bg-opacity-90">
                Explore More
              </button>
            </a>
          </div>
          <div className="border-2 border-[#fe3fe5] rounded-xl p-3 md:p-4 w-full transition-all ease-in-out duration-500 hover:scale-105">
  <h3 className="text-[#fe3fe5] font-marinda text-4xl font-bold">Contest</h3>
  <h4 className="text-black text-2xl md:text-3xl xl:text-2xl text-center font-popins font-semibold mt-1 mb-4 bg-white rounded-lg p-2">
    ANNOUNCEMENTS
  </h4>
  <div className="space-y-4">
    {/* First Announcement - Registration Dates */}
    <div className="flex items-center gap-4">
      <div className="border-[#fe3fe5] flex w-[70px] font-popins flex-col items-center border-l-[3px] border-t-[3px] text-white rounded-lg">
        <div className="border-[#fe3fe5] flex items-center justify-center w-full h-6 border-r-[4px] border-b-[3px] rounded-tr-md rounded-tl-md relative">
          <div className="w-1 h-1 rounded-full mx-1 bg-[#fe3fe5]"></div>
          <div className="w-1 h-1 rounded-full mx-1 bg-[#fe3fe5]"></div>
          <div className="absolute -top-2 left-3 w-1 h-4 rounded-lg bg-[#fe3fe5]"></div>
          <div className="absolute -top-2 right-3 w-1 h-4 rounded-lg bg-white bg-[#fe3fe5]"></div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-2xl font-bold flex items-center justify-center">18</span>
          <span className="text-sm font-semibold flex items-center justify-center">NOV</span>
        </div>
      </div>
      <div className="border-b-4">
        <h5 className="text-white font-bold text-base whitespace-nowrap">Registration Dates</h5>
        <p className="bg-[#fe3fe5] rounded-sm px-1 my-1 text-xs md:text-base font-semibold text-black">Nov 18, 2024 - Dec 15, 2024</p>
      </div>
    </div>

    {/* Second Announcement - Registration Confirmation */}
    <div className="flex items-center gap-4 flex-row-reverse">
      <div className="border-[#fe3fe5] flex w-[70px] font-popins flex-col items-center border-r-[3px] border-t-[3px] text-white rounded-lg">
        <div className="border-[#fe3fe5] flex items-center justify-center w-full h-6 border-l-[3px] border-b-[3px] rounded-tr-md rounded-tl-md relative">
          <div className="w-1 h-1 rounded-full mx-1 bg-[#fe3fe5]"></div>
          <div className="w-1 h-1 rounded-full mx-1 bg-[#fe3fe5]"></div>
          <div className="absolute -top-2 left-3 w-1 h-4 rounded-lg bg-[#fe3fe5]"></div>
          <div className="absolute -top-2 right-3 w-1 h-4 rounded-lg bg-white bg-[#fe3fe5]"></div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-2xl font-bold flex items-center justify-center">15</span>
          <span className="text-sm font-semibold flex items-center justify-center">DEC</span>
        </div>
      </div>
      <div className="border-b-4">
        <h5 className="text-white font-bold text-base whitespace-nowrap">Registration Confirmation</h5>
        <p className="bg-[#fe3fe5] rounded-sm px-1 my-1 text-xs md:text-base font-semibold text-black">Dec 15, 2024 - Dec 20, 2024</p>
      </div>
    </div>

    {/* Third Announcement - Contest Dates */}
    <div className="flex items-center gap-4">
      <div className="border-[#fe3fe5] flex w-[70px] font-popins flex-col items-center border-l-[3px] border-t-[3px] text-white rounded-lg">
        <div className="border-[#fe3fe5] flex items-center justify-center w-full h-6 border-r-[4px] border-b-[3px] rounded-tr-md rounded-tl-md relative">
          <div className="w-1 h-1 rounded-full mx-1 bg-[#fe3fe5]"></div>
          <div className="w-1 h-1 rounded-full mx-1 bg-[#fe3fe5]"></div>
          <div className="absolute -top-2 left-3 w-1 h-4 rounded-lg bg-[#fe3fe5]"></div>
          <div className="absolute -top-2 right-3 w-1 h-4 rounded-lg bg-white bg-[#fe3fe5]"></div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-2xl font-bold flex items-center justify-center">22</span>
          <span className="text-sm font-semibold flex items-center justify-center">DEC</span>
        </div>
      </div>
      <div className="border-b-4">
        <h5 className="text-white font-bold text-base whitespace-nowrap">Contest Dates</h5>
        <p className="bg-[#fe3fe5] rounded-sm px-1 my-1 text-xs md:text-base font-semibold text-black">Dec 22, 2024 - Dec 24, 2024</p>
      </div>
    </div>
  </div>
  <a href="/auth/signup">
    <button className="mt-6 bg-white w-full text-black py-3 px-4 text-base md:text-xl rounded-lg font-semibold hover:bg-opacity-90">Explore More</button>
  </a>
</div>

<div className="border-2 border-[#5ff6ff] rounded-xl p-3 md:p-4 w-full transition-all ease-in-out duration-500 hover:scale-105">
  <h3 className="text-[#5ff6ff] font-marinda text-4xl font-bold">Course</h3>
  <h4 className="text-black text-2xl md:text-3xl xl:text-2xl text-center font-popins font-semibold mt-1 mb-4 bg-white rounded-lg p-2">
    ANNOUNCEMENTS
  </h4>
  <div className="space-y-4">
    {/* First Announcement - Registration Dates */}
    <div className="flex items-center gap-4">
      <div className="border-[#5ff6ff] flex w-[70px] font-popins flex-col items-center border-l-[3px] border-t-[3px] text-white rounded-lg">
        <div className="border-[#5ff6ff] flex items-center justify-center w-full h-6 border-r-[4px] border-b-[3px] rounded-tr-md rounded-tl-md relative">
          <div className="w-1 h-1 rounded-full mx-1 bg-[#5ff6ff]"></div>
          <div className="w-1 h-1 rounded-full mx-1 bg-[#5ff6ff]"></div>
          <div className="absolute -top-2 left-3 w-1 h-4 rounded-lg bg-[#5ff6ff]"></div>
          <div className="absolute -top-2 right-3 w-1 h-4 rounded-lg bg-white bg-[#5ff6ff]"></div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-2xl font-bold flex items-center justify-center">18</span>
          <span className="text-sm font-semibold flex items-center justify-center">DEC</span>
        </div>
      </div>
      <div className="border-b-4">
        <h5 className="text-white font-bold text-base whitespace-nowrap">Registration Dates</h5>
        <p className="bg-[#5ff6ff] rounded-sm px-1 my-1 text-xs md:text-base font-semibold text-black">Nov 18, 2024 - Dec 1, 2024</p>
      </div>
    </div>

    {/* Second Announcement - Registration Confirmation */}
    <div className="flex items-center gap-4 flex-row-reverse">
      <div className="border-[#5ff6ff] flex w-[70px] font-popins flex-col items-center border-r-[3px] border-t-[3px] text-white rounded-lg">
        <div className="border-[#5ff6ff] flex items-center justify-center w-full h-6 border-l-[3px] border-b-[3px] rounded-tr-md rounded-tl-md relative">
          <div className="w-1 h-1 rounded-full mx-1 bg-[#5ff6ff]"></div>
          <div className="w-1 h-1 rounded-full mx-1 bg-[#5ff6ff]"></div>
          <div className="absolute -top-2 left-3 w-1 h-4 rounded-lg bg-[#5ff6ff]"></div>
          <div className="absolute -top-2 right-3 w-1 h-4 rounded-lg bg-white bg-[#5ff6ff]"></div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-2xl font-bold flex items-center justify-center">2</span>
          <span className="text-sm font-semibold flex items-center justify-center">DEC</span>
        </div>
      </div>
      <div className="border-b-4">
        <h5 className="text-white font-bold text-base whitespace-nowrap">Course Confirmation</h5>
        <p className="bg-[#5ff6ff] rounded-sm px-1 my-1 text-xs md:text-base font-semibold text-black">Dec 2, 2024 - Dec 5, 2024</p>
      </div>
    </div>

    {/* Third Announcement - Course Start Date */}
    <div className="flex items-center gap-4">
      <div className="border-[#5ff6ff] flex w-[70px] font-popins flex-col items-center border-l-[3px] border-t-[3px] text-white rounded-lg">
        <div className="border-[#5ff6ff] flex items-center justify-center w-full h-6 border-r-[4px] border-b-[3px] rounded-tr-md rounded-tl-md relative">
          <div className="w-1 h-1 rounded-full mx-1 bg-[#5ff6ff]"></div>
          <div className="w-1 h-1 rounded-full mx-1 bg-[#5ff6ff]"></div>
          <div className="absolute -top-2 left-3 w-1 h-4 rounded-lg bg-[#5ff6ff]"></div>
          <div className="absolute -top-2 right-3 w-1 h-4 rounded-lg bg-white bg-[#5ff6ff]"></div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-2xl font-bold flex items-center justify-center">8</span>
          <span className="text-sm font-semibold flex items-center justify-center">DEC</span>
        </div>
      </div>
      <div className="border-b-4">
        <h5 className="text-white font-bold text-base whitespace-nowrap">Course Start Date</h5>
        <p className="bg-[#5ff6ff] rounded-sm px-1 my-1 text-xs md:text-base font-semibold text-black">Dec 8, 2024</p>
      </div>
    </div>
  </div>
  <a href="/auth/signup">
    <button className="mt-6 bg-white w-full text-black py-3 px-4 text-base md:text-xl rounded-lg font-semibold hover:bg-opacity-90">Explore More</button>
  </a>
</div>

          
        </div>
      </div>
    </div>
  );
};

export default Contest;
