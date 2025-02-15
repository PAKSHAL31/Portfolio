import React from 'react'
import Image from 'next/image'
import myImage from '@/public/images/Pakshal_Photo.jpg'
const IntroSection = () => {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pt-8 pb-24 md:flex-row md:items-center'>
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
  </section>
  )
}

export default IntroSection
