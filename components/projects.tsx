import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProjectMetadata } from '@/lib/project'
import { formatDate } from '@/lib/utils'

const AllProjects = ({ projects }: { projects: ProjectMetadata[] }) => {
  return (
    <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
      {projects.map(project => (
        <li key={project.slug} className='group relative'>
          <Link href={`/projects/${project.slug}`}>
            {project.image && (
              <div className='h-80 w-full overflow-hidden bg-muted sm:h-60'>
                <Image
                  src={project.image}
                  alt={project.title || ''}
                  fill
                  className='rounded-lg object-cover object-center transition-transform duration-500 group-hover:scale-105'
                />
              </div>
            )}

            <div className='absolute inset-[1px] rounded-lg bg-background/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

            <div className='absolute inset-x-0 bottom-0 translate-y-2 px-6 py-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100'>
              <h2 className='title line-clamp-1 text-xl no-underline'>
                {project.title}
              </h2>
              <p className='line-clamp-1 text-sm text-muted-foreground'>
                {project.summary}
              </p>
              <p className='text-xs font-light text-muted-foreground'>
                {formatDate(project.publishedOn ?? '')}
              </p>

              {project.skills && project.skills.length > 0 && (
                <div className='mt-2 flex flex-wrap gap-2'>
                  {project.skills.map((skill, index) => (
                    <span
                      key={index}
                      className='rounded-md bg-gray-200 px-2 py-1 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-100'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default AllProjects
