import React from 'react';

const Hero = () => {
  return (
    <div>
      <div
        className="relative w-full h-[380px] md:h-[480px] 2xl:h-[630px] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: 'url("/I-am-Sccientist-Banner-1.png")', // Image path from the public folder
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
      </div>

      <div className="bg-purple-800 text-white h-[240px] md:h-[120px]">
        <div className="w-full md:w-[70%] mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex-1 text-base md:text-xl text-center sm:text-left pt-3 md:pt-0">
       
            <p className="font-inter text-xl font-bold leading-4 text-center underline underline-offset-4 decoration-transparent">
              A day in the life. Please join us as we walk through a day of a Ed student. Request a tour
            </p>
          </div>
          <div className="bg-gradient-to-r mt-3 md:mt-0 from-[#2E98FC] to-[#E01CF4] py-4 px-6 h-[120px] text-center flex flex-col items-center justify-center">
            <p className="font-inter font-bold text-base md:text-xl">Admissions to Competition Starts In</p>
            <div className="ml-4 flex space-x-2 mt-3 font-inter">
              <div className="text-center">
                <p className="text-lg font-bold">00</p>
                <p className="text-sm">Days</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold">00</p>
                <p className="text-sm">Hours</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold">00</p>
                <p className="text-sm">Minutes</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold">00</p>
                <p className="text-sm">Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
