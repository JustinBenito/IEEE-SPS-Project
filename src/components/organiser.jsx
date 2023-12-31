import React from 'react';
import Mam from '../assets/mam.png'
const Organiser = () => {
  return (
    <div className='text-center mt-5 border-gray-100 max-w-5xl mx-auto mb-12'>
      <h1 className='text-3xl p-4 font-bold border-b-2 mb-6'>Organiser</h1>

      {/* Centered circular image */}
      <div className='mx-auto w-64 h-64 rounded-full overflow-hidden'>
        <img
          src={Mam} // Replace with the actual path to your image
          alt='Dr. P Vijayalakshmi'
          className='object-cover w-full h-full'
        />

      </div>

      {/* Name, title, and affiliation */}
      <div className='mt-4'>
        <p className='text-xl font-semibold'>Dr. P Vijayalakshmi</p>
        <p className='text-lg text-gray-500'>Professor and Head of the Department of ECE</p>
        <p className='text-md text-blue-600'>SSN College of Engineering</p>
      </div>
    </div>
  );
};

export default Organiser;
