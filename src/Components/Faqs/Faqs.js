import React, { useState } from 'react';

const Faqs = () => {

  const [openIndex, setOpenIndex] = useState(null);


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="h-auto text-white py-6 md:py-16 bg-gradient-to-r from-[#1C032F] to-[#0032AB]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold font-misri mt-3 text-center">Frequently Asked Questions</h2>
          <div className="w-28 h-1 rounded-lg bg-white mt-4"></div>
        </div>
        <div className="mx-auto max-w-[800px] space-y-4">
          {[
            "Who can enter the Immerse Essay Competition?",
            "Why should I enter the Immerse Education Essay Competition?",
            "How are essays graded and scholarships awarded?",
            "If I win a scholarship, which location can I use it for?"
          ].map((question, index) => (
            <div key={index} className="border border-[#FFFFFF] bg-gradient-to-r from-[#1C032FB2] to-[#0032ABB2] rounded-lg shadow-lg">
              <button
                className="w-full text-left px-6 py-4 font-inter text-base md:text-xl font-semibold focus:outline-none flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                {question}
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    height="15"
                    width="15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
                  </svg>
                </span>
              </button>
           
              {openIndex === index && (
                <div className="px-6 py-4 text-base md:text-lg text-white bg-gradient-to-r from-[#1C032FB2] to-[#0032ABB2] rounded-b-lg">
        
                  <p>This is the content for the FAQ {index + 1}. Add detailed answers here.</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
