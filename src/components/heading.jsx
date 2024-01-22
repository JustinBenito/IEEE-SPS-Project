import React from 'react';

const Heading = () => {
  return (
    <div className='relative flex flex-col p-4 border-[#e9f5ff2d]  md:border-2 justify-center items-center text-white  md:inset-0 backdrop-blur-sm md:backdrop-blur-md md:rounded-xl'>
      {/* Apply the frosted background effect with rounded corners and padding using CSS */}

      <h1 className='text-4xl p-4 border-gray-200 text-center font-bold relative z-10 '>
        2024 IEEE SPS Seasonal School <br />
        on <br />
        Signal Processing Guided Machine Learning Approaches for <br />
        Speech and Audio Applications
      </h1>
      <div className='rounded-xl  bg-gradient-to-r from-[#ffb602] to-[#ff9100] text-white px-4 py-2 text-lg ml-4'>
        Feb 05-09, 2024
      </div>

    </div>
  );
};

export default Heading;
