"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import ProgressBar from "./progressBar";

const skills = [
  { text: "React", value: 80 },
  { text: "Next Js", value: 50 },
  { text: "JavaScript", value: 75 },
  { text: "MySQL", value: 95 },
  { text: "Tailwind CSS", value: 65 },
  { text: "Java", value: 60 },
  { text: "C++", value: 90 },
  { text: "Python", value: 90 },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Detects when section is in view

  return (
    <section id="skills" className="mb-36">
      <h2 className='title -my-6 mb-12 text-4xl'>Skills</h2>

        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <ProgressBar
              key={index}
              text={skill.text}
              value={skill.value}
              isVisible={isInView}
            />
          ))}
        </div>
    </section>
  );
};

export default SkillsSection;


// <div className='min-h-screen'>
//       <h2 className='title -my-6 mb-12 text-4xl'>Skills</h2>