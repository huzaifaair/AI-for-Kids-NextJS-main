import React from 'react';

const Courses = () => {
    return (
        <div className="min-h-screen bg-[#210145] text-white py-6 md:py-12 2xl:py-14 px-4 flex flex-col items-center"
            style={{
                backgroundImage: `url(/bg1.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            <div className="flex flex-col items-center">
                <div className="text-[18px] font-[700] leading-[32px] text-center font-misri mt-3">
                    Popular Courses
                </div>

                <div className="text-[50px] font-[700] leading-[44px] text-center font-misri mt-6">
                    Discover Your Perfect Course
                </div>

                <div className="w-28 h-1 rounded-lg bg-gradient-to-r from-[rgba(46,152,252,1)] to-[rgba(224,28,244,1)] mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid xl:grid-cols-3 gap-3 2xl:gap-6 mx-auto mt-14 md:w-[87%] 2xl:w-[75%] w-full">

                {/* First course */}
                <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[linear-gradient(90deg,rgba(35,3,63)32.12%,rgba(0,50,171,0.7)100%)] rounded-xl w-full border-2 2xl:border-4  border-white transition-all ease-in-out duration-500 hover:scale-105">
                    <img alt="AI Basic Course" loading="lazy" width="300" height="200" className="w-full h-auto rounded-tl-xl rounded-tr-xl"
                        src="/img_04.png" />
                    <div className="flex flex-col p-3 2xl:p-5 mt-3">
                        <h3 className="text-white font-inter text-base 2xl:text-xl font-bold text-center">● Become A Machine Learning Master</h3>
                        <div className="flex items-center justify-between mt-4 space-x-4">
                            <div className="flex items-center space-x-2">
                                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
                                </svg>
                                <p className="text-xs 2xl:text-base font-semibold">12 Hours 50 Minutes</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path>
                                </svg>
                                <p className="text-xs 2xl:text-base font-semibold">0 Students</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"></path>
                                </svg>
                                <p className="text-xs 2xl:text-base font-semibold">16 Lessons</p>
                            </div>
                        </div>
                        <div className="flex justify-center mt-4">
                            <a href="/select-course">
                            <button className="font-semibold w-fit text-sm md:text-lg font-popins bg-[linear-gradient(90deg,_#2E98FC_0%,_#E01CF4_100%)] py-1 md:py-2 px-2 md:px-4 text-white rounded-lg transform transition-all duration-500 ease-in-out hover:opacity-90">
                                    Register Now
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Second course */}
                <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[linear-gradient(90deg,rgba(35,3,63)32.12%,rgba(0,50,171,0.7)100%)] rounded-xl w-full border-2 2xl:border-4  border-white transition-all ease-in-out duration-500 hover:scale-105">
                    <img alt="AI Basic Course" loading="lazy" width="300" height="200" className="w-full h-auto rounded-tl-xl rounded-tr-xl"
                        src="/img_03.png" />
                    <div className="flex flex-col p-3 2xl:p-5 mt-3">
                        <h3 className="text-white font-inter text-base 2xl:text-xl font-bold text-center">● Deep Learning For Beginners</h3>
                        <div className="flex items-center justify-between mt-4 space-x-4">
                            <div className="flex items-center space-x-2">
                                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
                                </svg>
                                <p className="text-xs 2xl:text-base font-semibold">8 Hours 30 Minutes</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path>
                                </svg>
                                <p className="text-xs 2xl:text-base font-semibold">0 Students</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"></path>
                                </svg>
                                <p className="text-xs 2xl:text-base font-semibold">14 Lessons</p>
                            </div>
                        </div>
                        <div className="flex justify-center mt-4">
                            <a href="/select-course">
                            <button className="font-semibold w-fit text-sm md:text-lg font-popins bg-[linear-gradient(90deg,_#2E98FC_0%,_#E01CF4_100%)] py-1 md:py-2 px-2 md:px-4 text-white rounded-lg transform transition-all duration-500 ease-in-out hover:opacity-90">
                                    Register Now
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Third course */}
                <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[linear-gradient(90deg,rgba(35,3,63)32.12%,rgba(0,50,171,0.7)100%)] rounded-xl w-full border-2 2xl:border-4  border-white transition-all ease-in-out duration-500 hover:scale-105">
                    <img alt="AI Basic Course" loading="lazy" width="300" height="200" className="w-full h-auto rounded-tl-xl rounded-tr-xl"
                        src="/img_02.png" />
                    <div className="flex flex-col p-3 2xl:p-5 mt-3">
                        <h3 className="text-white font-inter text-base 2xl:text-xl font-bold text-center">● AI Mastery for Professionals</h3>
                        <div className="flex items-center justify-between mt-4 space-x-4">
                            <div className="flex items-center space-x-2">
                                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
                                </svg>
                                <p className="text-xs 2xl:text-base font-semibold">10 Hours 15 Minutes</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path>
                                </svg>
                                <p className="text-xs 2xl:text-base font-semibold">18 Students</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"></path>
                                </svg>
                                <p className="text-xs 2xl:text-base font-semibold">20 Lessons</p>
                            </div>
                        </div>
                        <div className="flex justify-center mt-4">
                            <a href="/select-course">
                                <button className="font-semibold w-fit text-sm md:text-lg font-popins bg-[linear-gradient(90deg,_#2E98FC_0%,_#E01CF4_100%)] py-1 md:py-2 px-2 md:px-4 text-white rounded-lg transform transition-all duration-500 ease-in-out hover:opacity-90">
                                    Register Now
                                </button>

                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Courses;
