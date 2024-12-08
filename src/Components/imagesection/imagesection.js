import React from 'react';

const Imagesection = () => {
  return (
    <div className="bg-[#280253] w-full h-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {/* Image 1 */}
        <div className="relative w-full h-0 pb-[65%]">
          <img
            alt="Image 1"
            loading="lazy"
            decoding="async"
            className="rounded-md"
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              objectFit: 'cover',
              color: 'transparent',
            }}
            src="/img1.png" // Image from public folder
          />
        </div>

        {/* Image 2 */}
        <div className="relative w-full h-0 pb-[65%]">
          <img
            alt="Image 2"
            loading="lazy"
            decoding="async"
            className="rounded-md"
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              objectFit: 'cover',
              color: 'transparent',
            }}
            src="/img2.png" // Image from public folder
          />
        </div>

        {/* Image 3 */}
        <div className="relative w-full h-0 pb-[65%]">
          <img
            alt="Image 3"
            loading="lazy"
            decoding="async"
            className="rounded-md"
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              objectFit: 'cover',
              color: 'transparent',
            }}
            src="/img3.png" // Image from public folder
          />
        </div>

        {/* Image 4 */}
        <div className="relative w-full h-0 pb-[65%]">
          <img
            alt="Image 4"
            loading="lazy"
            decoding="async"
            className="rounded-md"
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              objectFit: 'cover',
              color: 'transparent',
            }}
            src="/img4.png" // Image from public folder
          />
        </div>

        {/* Image 5 */}
        <div className="relative w-full h-0 pb-[65%]">
          <img
            alt="Image 5"
            loading="lazy"
            decoding="async"
            className="rounded-md"
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              objectFit: 'cover',
              color: 'transparent',
            }}
            src="/img5.png" // Image from public folder
          />
        </div>
      </div>
    </div>
  );
};

export default Imagesection;
