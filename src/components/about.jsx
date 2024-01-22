import React from 'react';

const About = () => {
  return (
    <div className=' mt-5 border-gray-100 max-w-5xl px-2 mx-auto gap-2 relative text-white'>
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
        This meticulously crafted program will offer participants a comprehensive course that explores recent advances and state-of-the-art techniques in this rapidly evolving field. We aim to provide an engaging and informative experience for all attendees.
        </p>
        <p className='mb-4'>
          The School is opened to the grand fraternity of SPS members throughout the world.
        </p>
      </div>
    </div>
  );
};

export default About;
