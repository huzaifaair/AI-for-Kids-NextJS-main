import React from 'react';

const Prize = () => {
    return (
        <div className="text-white py-6 md:py-16 bg-[#390276]">
            <div className="flex flex-col items-center">
                <p className="font-misri mt-3 text-2xl md:text-4xl font-bold">Latest Prizes</p>
                <h2 className="text-3xl md:text-5xl font-bold font-misri mt-3 text-center">Find Out the Latest Competition Prizes</h2>
                <div className="w-28 h-1 rounded-lg bg-white mt-4"></div>
            </div>

            <div className="w-full md:w-[80%] 2xl:w-[65%] mx-auto text-center px-6 mt-12">
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">

   
                    <div className="w-full md:w-full flex flex-col justify-center items-center md:mt-8 order-2 md:order-1">
                        <div className="flex justify-start items-center gap-2 mb-4 2xl:mb-8">
                            <img
                                alt="Silver"
                                loading="lazy"
                                width="49.61"
                                height="49.61"
                                decoding="async"
                                style={{
                                    color: "transparent",
                                    opacity: "1",
                                    width: "49.61px",
                                    height: "49.61px",
                                }}
                                src="/vector.png" 
                            />
                            <h3 className="text-2xl md:text-3xl font-medium font-inter">Runners-Up</h3>
                        </div>
                        <div className="bg-[rgba(200,14,189,1)] p-6 rounded-2xl shadow-lg w-full flex flex-col justify-between">
                            <p className="font-inter flex items-center justify-center text-base md:text-xl font-medium h-auto">
                                40 runners-up will be awarded
                                partial scholarships of 75% to
                                study their chosen subject with
                                Immerse.
                            </p>
                        </div>
                    </div>

    
                    <div className="w-full md:w-full flex flex-col justify-center items-center order-1 md:order-2">
                        <div className="flex justify-start items-center gap-2 mb-4 2xl:mb-8">
                            <img
                                alt="Gold"
                                loading="lazy"
                                width="49.61"
                                height="49.61"
                                decoding="async"
                                style={{
                                    color: "transparent",
                                    opacity: "1", 
                                    width: "49.61px",
                                    height: "49.61px",
                                }}
                                src="/vector.png" 
                            />
                            <h3 className="text-2xl md:text-3xl font-medium font-inter">First-Place</h3>
                        </div>
                        <div className="flex justify-center items-center border border-[rgba(255,255,255,1)] border-opacity-70 text-base md:text-xl p-6 rounded-2xl shadow-lg w-full h-auto flex-col md:mb-12 md:py-8">
                            <p className="font-inter font-medium">10 winners will receive a 100%
                                scholarship for their exceptional
                                work. Take a look at previous essay competition winners</p>
                        </div>
                    </div>

              
                    <div className="w-full md:w-full h-auto flex flex-col justify-center items-center md:mt-8 order-3">
                        <div className="flex justify-start items-center gap-2 mb-4 2xl:mb-8">
                            <img
                                alt="Bronze"
                                loading="lazy"
                                width="49.61"
                                height="49.61"
                                decoding="async"
                                style={{
                                    color: "transparent",
                                    opacity: "1", 
                                    width: "49.61px",
                                    height: "49.61px",
                                }}
                                src="/vector.png"
                            />
                            <h3 className="text-2xl md:text-3xl font-medium font-inter">Runners-Up</h3>
                        </div>
                        <div className="bg-[rgba(200,14,189,1)] h-auto p-6 rounded-2xl shadow-lg w-full flex flex-col justify-center items-center">
                            <p className="font-inter flex justify-center items-center text-base md:text-xl font-medium h-auto">
                                The last category of 150 entrants
                                receive partial scholarships
                                worth 50%.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="bg-[linear-gradient(90deg,_#2E98FC_0%,_#E01CF4_100%)] p-8 rounded-2xl shadow-lg mt-4 mb-8">
                    <h2 className="text-3xl md:text-5xl font-bold font-misri">Merit Awards</h2>
                    <p className="font-inter font-bold text-base md:text-xl">
                        Any student who submits a full-length essay, but doesn’t receive a scholarship, will be eligible for the option
                        of a £1000 award for our residential programmes, a £500 award for our Online Research Programmes, or a
                        our Online Research Programmes.
                    </p>
                </div>
                <button className=" font-semibold w-fit text-base md:text-xl font-popins bg-[rgba(200,14,189,1)] py-2 md:py-3 px-2 md:px-6 text-white rounded-lg transform transition-all duration-500 ease-in-out hover:opacity-90">
                  Explore More
                </button>
            </div>
        </div>
    );
}

export default Prize;
