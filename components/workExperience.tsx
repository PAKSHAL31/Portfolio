'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

const EXPERIENCES = [
  {
    img: '/images/logos/c-icon.png',
    year: '07/2022 - 07/2023',
    role: 'Software Developer in Test',
    company: 'Link Group',
    description: [
      'UI Testing: Developed automated test suites using JUnit, Java, and Selenium, leveraging a BDD framework with Cucumber to enhance clarity and collaboration.',
      'Microservices Testing: Conducted comprehensive testing for microservices using C#, Selenium, and SpecFlow to ensure seamless integration and functionality.',
      'Test Reporting: Generated detailed reports for test cases, providing insights into test coverage, failures, and areas for improvement.',
      'CI/CD Automation: Utilized GitLab CI/CD pipelines to automate test execution, enabling efficient regression testing after each development cycle and producing weekly reports to track progress and identify issues early.'
    ],
    technologies: [
      'JUnit',
      'Java',
      'Selenium',
      'C#',
      'SpecFlow',
      'GitLab CI/CD',
      'Cucumber'
    ]
  },
  {
    img: '/images/logos/web-icon.png',
    year: '10/2021 - 12/2021',
    role: 'Web Development Intern',
    company: 'Shantighar Social Service Society',
    description: [
      'Created a web application using HTML, CSS, and JavaScript to support women and children in crisis.',
      'Ensured the application was responsive and compatible across browsers to maximize accessibility.',
      'Followed web development best practices to improve performance and maintainability.'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap','MySQL']
  },
  {
    img: '/images/logos/android-icon.png',
    year: '11/2020 - 10/2021',
    role: 'App Development Intern',
    company: 'YWCA of Bombay',
    description: [
      'Developed a mobile application using Flutter and Dart for effective user interaction and experience.',
      'Integrated Firebase for real-time database management and user authentication.',
      'Enhanced UI/UX and optimized app performance through efficient data handling and design.'
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'Android Development']
  },
  {
    img: '/images/logos/wd-icon.png',
    year: '03/2021 - 05/2021',
    role: 'Web Development Intern',
    company: 'DBIT Placement Cell',
    description: [
      'Built a responsive website using HTML, CSS, and JavaScript to enhance user experience.',
      'Improved page speed and usability through optimized front-end techniques.',
      'Implemented SEO strategies to boost Google search rankings and platform visibility.'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'SEO Optimization']
  }
]

const WorkExperience = () => {
  const { resolvedTheme } = useTheme()

  return (
    <section id='experience' className='relative mb-24'>
      {/* Vertical Line */}

      <h2 className='title -my-6 mb-12 text-4xl'>Work Experience</h2>
      <div className='absolute bottom-0 left-8 top-14 hidden w-1 bg-gray-300 lg:block'></div>

      <div className='relative flex flex-col space-y-12 px-6 xl:px-16'>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative flex flex-col items-start space-y-6 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl md:flex-row md:items-center md:space-x-6 md:space-y-0 ${
              resolvedTheme === 'dark'
                ? 'bg-gray-800 text-white'
                : 'bg-white text-gray-900'
            }`}
          >
            {/* Icon */}
            <div className='flex-shrink-0'>
              <Image
                src={experience.img}
                alt={experience.company}
                width={90}
                height={90}
                className='rounded-full border border-gray-400 object-cover'
              />
            </div>

            <div className='w-full'>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                {experience.year}
              </p>
              <h6 className='text-lg font-semibold'>{experience.role}</h6>
              <span className='text-sm text-gray-600 dark:text-gray-300'>
                {experience.company}
              </span>
              <ul className='my-4 ml-5 list-disc space-y-2 text-sm'>
                {experience.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>

              <div className='flex flex-wrap'>
                {experience.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className='mr-2 mt-2 rounded-full border border-gray-400 px-2 py-1 text-sm text-gray-600 dark:border-gray-600 dark:text-gray-300'
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
  )
}

export default WorkExperience
