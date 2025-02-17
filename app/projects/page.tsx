import AllProjects from '@/components/projects'
import { getProjects } from '@/lib/project'
import React from 'react'

const ProjectsPage = async () => {
    const projects = await getProjects()

    return (
      <section className='pb-24 pt-40'>
        <div className='container max-w-6xl'>
          <h1 className='title mb-12'>Projects</h1>
  
          <AllProjects projects={projects} />
        </div>
      </section>
    )
}

export default ProjectsPage
