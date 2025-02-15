import IntroSection from '@/components/introduction'
import RecentProjects from '@/components/recent-project'
import React from 'react'

const Home = () => {
  return (
    <section className='py-24'>
      <div className='container max-w-5xl'>
        <IntroSection />
        <RecentProjects />
      </div>
    </section>
  )
}

export default Home
