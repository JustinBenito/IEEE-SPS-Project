import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Schedule = () => {

const speakers = [
{
date: "05.02.2024 · Monday",
session: "Forenoon",
speaker: "Dr. Hema A. Murthy",
uni: `Professor/CSE \n
Indian Institute of Technology Madras`,
title: "Signal Processing Guided Machine Learning",
day: "Day-1",
bg: "#e4f6f8",
icon: "#0e4c92"
},
{
  date: "05.02.2024 · Monday",
  session: "Afternoon",
  speaker: "Dr. T. Nagarajan",
  uni: `Professor & Head/CSE, \n
  Shiv Nadar University, Chennai`,
  title: "Signal Processing for Machine Learning",
  day: "Day-1",
  bg: "#e4f6f8",
  icon: "#0e4c92"
},
{
  date: "06.02.2023 · Tuesday",
  session: "Forenoon",
  speaker: "Dr. S. R. Mahadeva Prasanna",
  uni: `Professor/CSE \n
  Indian Institute of Technology Dharwad`,
  title: "Speaker Recognition and Machine Learning",
  day: "Day-2",
  bg: "#FED7C2",
  icon: "#FF4C00"
},
{
  date: "06.02.2023 · Tuesday",
  session: "Afternoon",
  speaker: "Dr. Sri Rama Murty Kodukula",
  uni: `Professor/EE \n
  Indian Institute of Technology Hyderabad`,
  title: "Neural Comb Filtering for Speech Enhancement",
  day: "Day-2",
  bg: "#FED7C2",
  icon: "#FF4C00"
},
{
  date: "07.02.2023 · Wednesday",
  session: "Forenoon",
  speaker: "Dr. Prasanta Kumar Ghosh",
  uni: `Associate Professor/EE
  Indian Institute of Science Bengaluru`,
  title: "Challenges and Opportunities in Dysarthric Speech Processing",
  day: "Day-3",
  bg: "#FFCCCB",
  icon: "#610c04"
},
{
  date: "07.02.2023 · Wednesday",
  session: "Afternoon",
  speaker: "Dr. P. Vijayalakshmi",
  uni: `Professor & Head/ECE,
  Sri Sivasubramaniya Nadar
  College of Engineering, Chennai.`,
  title: "Assistive Speech Technology",
  day: "Day-3",
  bg: "#FFCCCB",
  icon: "#610c04"
},

{
  date: "08.02.2023 · Thursday",
  session: "Forenoon",
  speaker: "Dr. G. Anushiya Rachel",
  uni: `Assistant Professor/CSE,
  Shiv Nadar University, Chennai`,
  title: "Towards Human-like speech synthesis?",
  day: "Day-4",
  bg: "#CFFED5",
  icon: "#2DBD01"
},

{
  date: "08.02.2023 · Thursday",
  session: "Afternoon",
  speaker: "Dr. S. Umesh",
  uni: `Professor/CSE
  Indian Institute of Technology Madras`,
  title: "Self-supervised Learning Algorithms for Speech Recognition",
  day: "Day-4",
  bg: "#CFFED5",
  icon: "#2DBD01"
},

{
  date: "09.02.2023 · Friday",
  session: "Forenoon",
  speaker: "Dr. K. T. Deepak",
  uni: `Assistant Professor/CSE
  Indian Institute of Information Technology
  Dharwad`,
  title:"Role of Transformer models in Speech Technology",
  day: "Day-5",
  bg: "#fff0f5",
  icon: "#551a8b"
},

{
  date: "09.02.2023 · Friday",
  session: "Afternoon",
  speaker: "Ms. Shwetha Somasundaram",
  uni: `Research Associate, Adobe`,
  title: "Large Language Models",
  day: "Day-5",
  bg: "#fff0f5",
  icon: "#551a8b"
},
]


  return (
  <div>
  <h1 className='text-center font-bold text-4xl mt-8 mb-8'>Schedule</h1>
  <VerticalTimeline lineColor="gray">
        {
            speakers.map((exp,index)=>(
                <React.Fragment key={index} >
                <VerticalTimelineElement
                contentStyle={{
                    background: `${exp.bg}`,
                    boxShadow: "none",
                    border: "1px solid rgba(0,0,0,0.05)",
                    textAlign:"left",
                    padding: "1.3rem"
                }}
                date={exp.date}
                
                icon={exp.day}
                iconStyle={{
                  background: `${exp.icon}`,
                  fontWeight: "bold",
                  color:"white",
                  fontSize: "1rem",
                  textAlign: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center' // This is added for vertical centering
              }}
              
                contentArrowStyle={{
                    borderRight: "0.4rem solid #9ca3af"
                }}
                >
                    <h3 className="font-bold text-2xl capitalize ">{exp.title}</h3>
                    <p className="font-normal !mt-0 text-md">{exp.speaker}</p>
                    <p className="!mt-0 text-sm text-slate-600">{exp.uni}</p>
                    <p className="!mt-0 text-sm text-slate-600">{exp.session}</p>
                    <p className="!mt-0 text-sm text-slate-600">{exp.date}</p>
                </VerticalTimelineElement>
                </React.Fragment>
            ))
        }
    </VerticalTimeline>
  
  </div>
  );
}

export default Schedule;