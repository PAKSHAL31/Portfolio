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
    const slugs = projects.map(project => ({ slug: project.slug }))
  
    return slugs
  }

const Project = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params
    const project = await getProjectBySlug(slug)
  
    if (!project) {
      notFound()
    }
  
    const { metadata, content } = project
    const { title, author, image, publishedOn } = metadata
  
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
          </header>
  
          <main className='prose mt-16 dark:prose-invert max-w-full'>
            <MDXRemote source={content} />
          </main>
        </div>
      </section>
    )
}

export default Project


