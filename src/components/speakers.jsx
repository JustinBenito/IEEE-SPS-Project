import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import hemaImage from '../assets/hema.jpg';
import maha from '../assets/maha.jpg';
import naga from '../assets/naga.jpg';
import umesh from '../assets/umesh.jpeg';
import deep from '../assets/deep.jpeg';

import { forwardRef } from 'react';

const speakersData = [
     {
      name: "Dr. Hema A Murthy",
      imagePath: hemaImage,
      designation: "Professor",
      college: "CSE, IIT Madras"
    },
    {
      name: "Dr. S Umesh",
      imagePath: umesh,
      designation: "Professor",
      college: "CSE, IIT Madras"
    },
    {
      name: "Dr. S. R. Mahadeva Prasanna",
      imagePath: maha,
      designation: "Professor",
      college: "IIT Dharwad"
    },
    {
      name: "Dr. T Nagarajan",
      imagePath: naga,
      designation: "Professor and Head of Department of CSE",
      college: "SNU Chennai"
    },
    {
      name: "Dr. K. T Deepak",
      imagePath: deep,
      designation: "Assistant Professor",
      college: "IIIT Dhanbad"
    }
  
];

const Speakers = React.forwardRef((props, ref) => {
    const [isFlipped, setIsFlipped] = useState(Array(speakersData.length).fill(false));
  
    const handleMouseEnter = (index) => () => {
      setIsFlipped((prevIsFlipped) => {
        const newIsFlipped = [...prevIsFlipped];
        newIsFlipped[index] = true;
        return newIsFlipped;
      });
    };
  
    const handleMouseLeave = (index) => () => {
      setIsFlipped((prevIsFlipped) => {
        const newIsFlipped = [...prevIsFlipped];
        newIsFlipped[index] = false;
        return newIsFlipped;
      });
    };
  
    // Use a useEffect to detect touch devices and enable the click event
    useEffect(() => {
      const isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints > 0;
      if (isTouchDevice) {
        document.body.classList.add('touch-device');
      }
    }, []);
  
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    return (
<div className='max-w-5xl mx-auto ' ref={ref}>
        <h1 className='text-3xl text-center p-4 font-bold mt-5 border-b-2'>Speakers</h1>
  
        <div className='flex flex-wrap justify-center'>
          {speakersData.map((speaker, index) => (
            <div
              key={index}
              className='text-center mx-4 my-4'
              onMouseEnter={handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave(index)}
            >
              <ReactCardFlip
                isFlipped={isFlipped[index]}
                flipDirection="horizontal"
                containerStyle={{
                  width: '100%',
                  height: '100%',
                }}
              >
                {/* Front of the card */}
                <div>
                <div
                  className='w-64 h-64 rounded-full overflow-hidden cursor-pointer'
                >
                  <img
                    src={speaker.imagePath}
                    alt={speaker.name}
                    className='object-cover w-full h-full'
                  />

                </div>
                <p className='text-xl font-semibold text-black'>{speaker.name}</p>
                </div>
  
                {/* Back of the card */}
                <div className='flex flex-col justify-center items-center bg-[#005197] gap-3 rounded-full w-64 h-64 overflow-hidden'>
                  <p className='text-xl text-white font-semibold'>{speaker.name}</p>
                  <p className='text-lg text-white opacity-40'>{speaker.designation}</p>
                  <p className='text-md text-black'>{speaker.college}</p>
                  {isMobile && (
                  <button onClick={handleMouseLeave(index)} className='bg-white p-1 rounded-lg'>Click to flip</button>
                )}
                </div>
              </ReactCardFlip>
            </div>
          ))}
        </div>
      </div>
    );
  }
)


export default Speakers;