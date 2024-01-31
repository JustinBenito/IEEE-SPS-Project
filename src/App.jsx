import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NET from 'vanta/src/vanta.net';
import React, {useEffect, useRef} from "react";
import Nav from "./components/Nav"; // Import the Nav component
import Heading from "./components/Heading"; // Import the Heading component
import Scope from "./components/Scope"; // Import other components as needed
import Topics from "./components/Topics";
import Speakers from "./components/Speakers";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Schedule from "./components/Schedule";
import Organiser from "./components/Organiser";
import Footer from "./components/Footer";
import SSN from "./components/SSN";

function App() {
  const location = useLocation();
  const pathname = location.pathname;

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

  const speakerRef = useRef(null);

  return (
    <>
      <Nav ref={speakerRef}/> 
      <div className='flex justify-center items-center min-h-[400px]' id='bg'>
        <Heading />
      </div>
      <Routes>
        {/* Normal routes */}
        <Route path="/" element={
          <>
        <Scope />
        <Topics />
        <Speakers />
        <About />
        <FAQ />
        <Schedule />
        <Organiser />
        </>
        } />
        
        <Route path="/ssn" element={<SSN />} />      
      </Routes>
      <Footer />
    </>
  );
}

export default App;
