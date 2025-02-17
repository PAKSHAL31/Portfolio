import IntroSection from '@/components/introduction'
import RecentProjects from '@/components/recent-project'
import SkillSection from '@/components/skills'
import WorkExperience from '@/components/workExperience'
import React from 'react'

const Home = () => {
  return (
    <section className='py-5'>
      <div className='container max-w-7xl'>
        <IntroSection />
        <SkillSection />
        <WorkExperience />
        <RecentProjects />
      </div>
    </section>
  )
}

export default Home
