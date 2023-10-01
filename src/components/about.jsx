import React from 'react';

const About = () => {
  return (
    <div
      className='relative text-white p-8'
      
    >
<div
  className=' p-4 rounded-xl'
  style={{
    background: `
      linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)),
      url('https://media.istockphoto.com/id/1285395672/photo/abstract-futuristic-with-connection-lines-on-blue-background-plexus-structure-concept-of.jpg?b=1&s=612x612&w=0&k=20&c=AZwPyEY1H04PwBLvEIR8khtLRA-RzozIm5OeIPgQJRY=')`,
      backgroundSize: '100% 100%', 
    backgroundRepeat: 'no-repeat',
  }}
>
        <h1 className='text-3xl font-bold mb-4'>
        The primary focus of the IEEE SPS Seasonal School in 2024 is to delve into the cutting-edge approaches in Signal Processing Guided Machine Learning for Speech and Audio Applications.
        </h1>
        <p className='mb-4'>
        This seasonal school aims at reinstating signal processing as the foundation of speech and audio signal processing, and aims to explain why it is still relevant. It aims to show that even though signal processing methods are not the only way to solve modern day pattern recognition problems, the principles are still relevant.
        </p>
        <p className='mb-4'>
        The topics in this workshop are aimed to provide students and researchers with the right tools to navigate the array of modern day research problems, and show that signal processing methods can guide design choices in machine learning algorithms.
        </p>
      </div>
    </div>
  );
};

export default About;
