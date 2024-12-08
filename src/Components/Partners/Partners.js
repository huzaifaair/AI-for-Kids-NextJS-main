import React from "react";

const Partners = () => {

  const images = [
    "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", 
    "8.png", "9.png", "10.png", "11.png", "12.png", "13.png"
  ];

  return (
    <div className="text-white py-6 md:py-16 bg-[linear-gradient(90deg,rgba(35,3,63)32.12%,rgba(0,50,171,0.7)100%)]">
      <h2 className="text-3xl md:text-5xl font-bold font-misri text-center">Country Partners</h2>
      

      <div className="grid grid-cols-6 w-[90%] md:w-[70%] 2xl:w-[50%] mx-auto mt-8 gap-4 justify-items-center">

        {images.slice(0, 6).map((image, index) => (
          <div
            key={index}
            className="flex justify-center items-center bg-white rounded-lg shadow-lg p-2"
          >
            <img
              alt={`Partner ${index + 1}`}
              loading="lazy"
              width="100"
              height="70"
              decoding="async"
              style={{ color: "transparent" }}
              src={`/${image}`} 
            />
          </div>
        ))}
      </div>

    
      <div className="grid grid-cols-7 w-[90%] md:w-[70%] 2xl:w-[50%] mx-auto mt-4 gap-4 justify-items-center">
       
        {images.slice(6).map((image, index) => (
          <div
            key={index + 6}
            className="flex justify-center items-center bg-white rounded-lg shadow-lg p-2"
          >
            <img
              alt={`Partner ${index + 7}`}
              loading="lazy"
              width="100"
              height="70"
              decoding="async"
              style={{ color: "transparent" }}
              src={`/${image}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
