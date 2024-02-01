import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NET from 'vanta/src/vanta.net';
import React, {useEffect, useRef} from "react";
import Nav from "./components/nav"; // Import the Nav component
import Heading from "./components/heading"; // Import the Heading component
import Scope from "./components/scope"; // Import other components as needed
import Topics from "./components/topics";
import Speakers from "./components/speakers";
import About from "./components/about";
import FAQ from "./components/faq";
import Schedule from "./components/schedule";
import Organiser from "./components/organiser";
import Footer from "./components/footer";
import SSN from "./components/ssn";

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
