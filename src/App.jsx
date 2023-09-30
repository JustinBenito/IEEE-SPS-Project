import { useState, useEffect } from 'react';
import NET from 'vanta/src/vanta.net';
import './App.css';
import Nav from './components/nav';
import Heading from './components/heading';
import Organiser from './components/organiser';
import Speakers from './components/speakers';
import About from './components/about';
import Footer from './components/footer';

function App() {
  useEffect(() => {
    NET({
      el: "#bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xff2626,
      backgroundColor: 0x6ebb,
      points: 20.00,
      minHeight: 400.00,
      maxDistance: 20.00
    });
  }, []);

  return (
    <>
      <Nav />
      <div className='flex justify-center items-center min-h-[400px]' id='bg' >
        <Heading />
      </div>
      <Organiser />
      <Speakers />
      <About />
      <Footer />
    </>
  );
}

export default App;
