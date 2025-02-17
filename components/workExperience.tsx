"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const EXPERIENCES = [
  {
    img: "/images/logos/c-icon.png",
    year: "07/2022 - 07/2023",
    role: "Technical Tester",
    company: "Link Group",
    description:
      "Created automated test suites for unit testing using JUnit, Java, and Selenium, decreasing manual effort in bug detection by 50%. Strategized Jenkins for CI/CD automation, streamlining the testing process and generating weekly reports. Created an employee Time Portal using Power Apps and Power Automate, improving time tracking efficiency by 30%.",
    technologies: ["JUnit", "Java", "Selenium", "Jenkins", "Power Apps", "Power Automate"],
  },
  {
    img: "/images/logos/web-icon.png",
    year: "10/2021 - 12/2021",
    role: "Web Development Intern",
    company: "Shantighar Social Service Society",
    description:
      "Designed a web application using HTML, CSS, and JavaScript for battered women and children in crisis. Utilized best practices to ensure cross-browser compatibility and performance, improving responsiveness.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    img: "/images/logos/android-icon.png",
    year: "11/2020 - 10/2021",
    role: "App Development Intern",
    company: "YWCA of Bombay",
    description:
      "Developed a mobile application using Flutter and Dart Framework. Used Firebase to manage user inputted data. Enhanced user experience by 40% and optimized API performance by 30% compared to the previous app.",
    technologies: ["Flutter", "Dart", "Firebase"],
  },
  {
    img: "/images/logos/wd-icon.png",
    year: "03/2021 - 05/2021",
    role: "Web Development Intern",
    company: "DBIT Placement Cell",
    description:
      "Developed a responsive website using HTML, CSS, and JavaScript, improving page speed by 80%. Executed SEO strategies to boost website visibility and Google search rankings.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

const WorkExperience = () => {
  const { resolvedTheme } = useTheme();

  return (
    <section id="experience" className="relative mb-24">
      {/* Vertical Line */}
     
      <h2 className="title -my-6 mb-12 text-4xl">Work Experience</h2>
      <div className="absolute left-8 top-14 bottom-0 w-1 bg-gray-300 hidden lg:block"></div>

      <div className="relative flex flex-col space-y-12  px-6 xl:px-16">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-6 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${
              resolvedTheme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
            }`}
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              <Image
                src={experience.img}
                alt={experience.company}
                width={90}
                height={90}
                className="rounded-full border border-gray-400 object-cover"
              />
            </div>

            <div className="w-full">
              <p className="text-sm text-gray-500 dark:text-gray-400">{experience.year}</p>
              <h6 className="text-lg font-semibold">{experience.role}</h6>
              <span className="text-sm text-gray-600 dark:text-gray-300">{experience.company}</span>
              <p className="my-4">{experience.description}</p>

              <div className="flex flex-wrap">
                {experience.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-2 rounded-full border border-gray-400 dark:border-gray-600 px-2 py-1 text-sm text-gray-600 dark:text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
