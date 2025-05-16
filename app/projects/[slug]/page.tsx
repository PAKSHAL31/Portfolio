import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { formatDate } from '@/lib/utils'
import { getProjectBySlug, getProjects } from '@/lib/project'
import { MDXRemote } from 'next-mdx-remote/rsc'

// pre-generates the pages at build time based on the available project in the folder/app.
export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map(project => ({ slug: project.slug })) || null
}

// await params propmis {intially not awaiting it - gave errors}
const Project = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params
  console.log(params.slug)
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const { metadata, content } = project
  const { title, author, image, publishedOn, skills } = metadata
  const colorClasses = [
    'bg-red-500',
    'bg-green-500',
    'bg-blue-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-teal-500',
    'bg-emerald-500',
    'bg-orange-500',
    'bg-sky-500',
    'bg-lime-500'
  ]

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-4xl'>
        <Link
          href='/projects'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to projects</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(publishedOn ?? '')}
          </p>
          {skills && skills.length > 0 && (
            <div className='mt-4 flex flex-wrap gap-2'>
              {skills && skills.length > 0 && (
                <div className='mt-4 flex flex-wrap gap-2'>
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`rounded-md px-2 py-1 text-xs font-medium text-white ${
                        colorClasses[
                          Math.floor(Math.random() * colorClasses.length)
                        ]
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </header>

        <main className='prose mt-10 max-w-full dark:prose-invert'>
          <MDXRemote source={content} />
        </main>
      </div>
    </section>
  )
}

export default Project
