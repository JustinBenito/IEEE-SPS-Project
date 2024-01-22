import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
 const FAQ =() => {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <div className='text-center mt-5 px-2 border-gray-100 max-w-5xl mx-auto gap-2'>

<h1
        className='text-3xl p-4 font-bold border-b-2 mb-6'>Frequently Asked Questions</h1>
      <Accordion open={open === 1} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
         What is the Registration Fees
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal justify-start text-start">
        1. Non SPS members-Faculty: Rs. 500 <br></br>
2. SPS members – Faculty: Rs. 300 <br></br>
3. Non SPS members - UG/PG/PHD Scholars: 500 <br></br>
4. SPS members - UG/PG/PHD Scholars: Rs. 300 <br></br>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors ${
            open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          What is the cost to students for living arrangements? 
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal text-start">
        20 USD per day for a student participant if required 

        </AccordionBody>
      </Accordion>

      <Accordion open={open === 3} className="mb-2 rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors ${
            open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Are free dorm accommodations available for students?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal text-start">
        No, we do not provide free accommodations for students
        </AccordionBody>
      </Accordion>


      <Accordion open={open === 4} className="mb-2  rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className={`border-b-0 transition-colors ${
            open === 4 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Will students be accommodated under low/free housing?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal text-start">
        No, students will not be accommodated under low/free housing
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 5} className="mb-2  rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className={`border-b-0 transition-colors ${
            open === 5 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
         Will lunches be provided?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal text-start">
        Yes, business lunch will be provided
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 6} className="mb-2  rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(6)}
          className={`border-b-0 transition-colors ${
            open === 6 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
         Will a travel grant program be offered?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-base font-normal text-start">
        No, Travel grant is not being offered
        </AccordionBody>
      </Accordion>

     
    </div>
  );
}
export default FAQ


