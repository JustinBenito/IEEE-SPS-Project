import React from 'react';
import Mam from '../assets/mam.png'
import Ramani from '../assets/ramani.jpg'
import venkat from '../assets/venkat.jpg';
import actlin from '../assets/actlin.jpg';
import { useState, useEffect, useRef } from 'react';
import ReactCardFlip from 'react-card-flip';

const Organiser = () => {
  const organiser = [
    {
      name: "Dr. P Vijayalakshmi",
      imagePath: Mam,
      designation: "Professor and Head of the Department of ECE",
      college: "ECE, SSN College of Engineering",
      profile: "https://www.ssn.edu.in/staff-members/dr-p-vijayalakshmi/"
    },
    {
      name: "Dr. N. Venkateswaran",
      imagePath: venkat,
      designation: "Professor",
      college: "Biomedical Engineering, SSN College of Engineering",
      profile: "https://www.snuchennai.edu.in/dr-t-nagarajan/"
    },
    {
      name: "Dr. B. Ramani",
      imagePath: Ramani,
      designation: "Associate Professor",
      college: "ECE, SSN College of Engineering",
      profile: "https://www.ssn.edu.in/staff-members/dr-b-ramani/"
    },
    {
      name: "Dr. M.P.Actlin Jeeva",
      imagePath: actlin,
      designation: "Assistant Professor",
      college: "ECE, SSN College of Engineering",
      profile: "https://www.ssn.edu.in/staff-members/dr-m-p-actlin-jeeva-assistant-professor/"
    },
  ];

  const [isFlipped, setIsFlipped] = useState(Array(organiser.length).fill(false));


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


  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  return (
    <div className='text-center mt-5 border-gray-100 max-w-5xl mx-auto mb-12'>
      <h1 className='text-3xl p-4 font-bold border-b-2 mb-6 flex-col'>Organisers</h1>

        <div className='flex flex-wrap justify-center' >
      {organiser.map((speaker, index) => (
            <div
              key={index}
              className='text-center mx-4 my-4'
              onMouseEnter={handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave(index)}
              custom={index} // Pass the index as a custom prop
            >
      <a href={speaker.profile} target="_blank" rel="noopener noreferrer">
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
                      href={speaker.profile}
                      className='object-cover w-full h-full'
                    />
                    
                  </div>
                  <p className='text-xl font-semibold text-black'>{speaker.name}</p>

                </div>

                {/* Back of the card */}
                <div className=''>
                <div className='p-4 flex flex-col justify-center items-center bg-[#005197] gap-3 rounded-full w-64 h-64 overflow-hidden'>
                  <p className='text-xl text-white font-semibold'>{speaker.name}</p>
                  <p className='text-lg text-white opacity-40'>{speaker.designation}</p>
                  <p className='text-md text-black'>{speaker.college}</p>
                  {isMobile && (
                    <button onClick={handleMouseLeave(index)} className='bg-white p-1 rounded-lg'>Click to flip</button>
                  )}
                </div>
                <p className='text-xl font-semibold text-black'>{speaker.name}</p>
                </div>
              </ReactCardFlip>
              </a>
            </div>
          ))}

   
</div>
    </div>
  );
};

export default Organiser;
