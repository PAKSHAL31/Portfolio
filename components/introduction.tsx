import React from 'react'
import { Button } from './ui/button'
import { FaFileDownload } from 'react-icons/fa'
import Photo from './photo'
import AnimatedText from '@/components/AnimatedText'
import Stats from './stats'

const IntroSection = () => {
  return (
    <div className='min-h-screen'>
      {/* Intro Section */}
      <section className='flex flex-col items-center justify-center pb-8 pt-20 xl:flex-row'>
        <div className='flex w-full flex-col items-center justify-between px-6 py-2 xl:flex-row xl:py-20'>
          {/* Text Section */}
          <div className='max-w-2xl text-center xl:max-w-lg xl:text-left order-2 xl:order-none'>
            <span className='title text-xl font-semibold'>
              Software Developer
            </span>
            <h1 className='mt-2 leading-tight'>
              <AnimatedText text={["I'm Pakshal", 'Ranawat']} />
            </h1>
            <p className='mt-4 max-w-[600px] text-lg leading-relaxed text-gray-700'>
              I'm a passionate software developer with experience in web and
              mobile development. I’m diligent, responsible, and always eager to
              explore new technologies and programming languages.
            </p>

            <div className='mt-6 flex flex-col items-center gap-6 xl:flex-row'>
              <Button
                variant='outline'
                size='lg'
                className='flex items-center gap-2 border-green-500 uppercase text-green-500 hover:bg-green-500 hover:text-white'
              >
                <span>Download CV</span>
                <FaFileDownload className='text-xl' />
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='mt-12'>
        <Stats />
      </section>
    </div>
  )
}

export default IntroSection

{
  /* <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pt-8 pb-24 md:flex-row md:items-center'>
    <div className='mt-2 flex-1 md:mt-0'>
      <h1 className='title no-underline text-3xl font-bold'>Hey, I&#39;m Pakshal Ranawat.</h1>
      <p className='mt-3 font-light text-muted-foreground'>
        I&#39;m a passionate software developer with experience in web and mobile development. I&#39;m 
        diligent, responsible, passionate and committed towards work while exploring newer technologies and programming languages.
      </p>
    </div>
    <div className='relative'>
      <Image
        className='flex-1 rounded-lg grayscale-0 dark:grayscale'
        src={myImage}
        alt='Hamed Bahram'
        width={175}
        height={175}
        priority
      />
    </div>
  </section> */
}
