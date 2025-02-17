import Link from 'next/link'
import { getProjects } from '@/lib/project'
import AllProjects from '@/components/projects'

const RecentProjects = async() => {
    const projects = await getProjects(2)

  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12 text-4xl'>Recent projects</h2>
        <AllProjects projects={projects} />

        <Link
          href='/projects'
          className='mt-10 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
        >
          <span>All projects</span>
        </Link>
      </div>
    </section>
  )
}

export default RecentProjects
