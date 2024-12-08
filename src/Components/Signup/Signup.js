import React from 'react';

const Signup = () => {
  return (
    <div className="w-full pb-4 md:pb-0 h-auto md:h-[350px] xl:h-[300px] bg-[#5D3794] relative px-2">
    
      <div className="h-6 w-16 lg:h-14 lg:w-40 bg-[#C406B9] rounded-tr-full rounded-br-full absolute left-0 bottom-0"></div>

      <div className="h-6 w-16 lg:h-14 lg:w-40 bg-[#C406B9] rounded-tl-full rounded-bl-full absolute right-0 top-3"></div>
  
      <div className="w-6 h-6 md:w-20 md:h-20 rounded-full bg-[#408CFB] absolute top-4 left-10 md:top-6 lg:left-28 2xl:left-36 shadow-xl"></div>
      
 
      <div className="w-6 h-6 md:w-20 md:h-20 rounded-full bg-[#408CFB] absolute bottom-4 right-10 md:bottom-6 lg:right-28 2xl:right-40 shadow-xl"></div>
      

      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#97DB4E] absolute bottom-4 left-8 md:bottom-8 lg:left-24 shadow-xl"></div>
      
 
      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#97DB4E] absolute top-6 right-8 md:top-14 lg:right-24 shadow-xl"></div>
      
  
      <div className="flex flex-col justify-center items-center">
 
        <div className="font-misri font-bold text-[40px] leading-[44px] text-white text-center pt-14 md:pt-12 w-3/4">
          Test Your Limits—Sign Up for Remote Competitions and Rise to the Top!
        </div>
        

        <p className="w-full md:w-[65%] 2xl:w-[45%] font-poppins text-[16px] font-normal leading-[25px] text-center text-white mt-2">
  Build your own online tests and assessments with AI Scientist for free
</p>

        

        <a href="/auth/signup">
          <button className="font-semibold text-base md:text-xl font-poppins bg-[linear-gradient(90deg,_#2E98FC_0%,_#E01CF4_100%)] py-2 md:py-3 px-2 md:px-6 text-white rounded-full mt-4 md:mt-8 transform transition-all duration-500 ease-in-out hover:opacity-90">
            Get started for free →
          </button>
        </a>
      </div>
    </div>
  );
};

export default Signup;
