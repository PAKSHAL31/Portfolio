"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import ProgressBar from "./progressBar";

import {
  SiCplusplus,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiSelenium,
  SiMysql,
  SiTailwindcss,
  SiMongodb,
  SiAmazon,
  SiGit,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";

const skills = [
 { text: "Java", value: 60, icon: <FaJava className="text-[#f89820]" /> },
{ text: "C++", value: 90, icon: <BsCodeSlash className="text-gray-800 dark:text-gray-100" /> },
{ text: "Python", value: 90, icon: <SiPython className="text-yellow-500" /> },
{ text: "React", value: 75, icon: <SiReact className="text-cyan-500" /> },
{ text: "Next.Js", value: 50, icon: <SiNextdotjs className="text-gray-800 dark:text-gray-100" /> },
{ text: "JavaScript", value: 85, icon: <SiJavascript className="text-yellow-400" /> },
{ text: "Selenium", value: 85, icon: <SiSelenium className="text-green-600" /> },
{ text: "MySQL", value: 95, icon: <SiMysql className="text-blue-600" /> },
{ text: "Tailwind CSS", value: 65, icon: <SiTailwindcss className="text-teal-400" /> },
{ text: "MongoDB", value: 80, icon: <SiMongodb className="text-green-500" /> },
{ text: "NoSQL", value: 80, icon: <SiMongodb className="text-green-500" /> },
{ text: "Git", value: 80, icon: <SiGit className="text-orange-600" /> },
{ text: "AWS Lambda", value: 65, icon: <SiAmazon className="text-gray-800 dark:text-gray-100" /> },
{ text: "AWS Cloudfront", value: 65, icon: <SiAmazon className="text-gray-800 dark:text-gray-100" /> },
{ text: "AWS S3", value: 65, icon: <SiAmazon className="text-gray-800 dark:text-gray-100" /> },
];


const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="skills" className="mb-36">
      <h2 className="title mb-12 text-4xl mt-5 xl:mt-0">Skills</h2>

      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <ProgressBar
            key={index}
            text={skill.text}
            value={skill.value}
            icon={skill.icon}
            isVisible={isInView}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
