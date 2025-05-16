import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const projectDirectory = path.join(process.cwd(), 'content', 'projects')

export type Project = {
  metadata: ProjectMetadata
  content: string
}

export type ProjectMetadata = {
  title?: string
  summary?: string
  author?: string
  publishedOn?: string
  image?: string
  slug: string
  skills?: string[] 
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const filePath = path.join(projectDirectory, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    const { data, content } = matter(fileContent)
    return { metadata: { ...data, slug }, content }
  } catch (e) {
    console.log(e)
    return null
  }
}

export async function getProjects(limit?: number): Promise<ProjectMetadata[]> {
  const files = fs.readdirSync(projectDirectory)

  const projects = files
    .map(file => getProjectMetadata(file))
    .sort((a, b) => {
      if (new Date(a.publishedOn ?? '') < new Date(b.publishedOn ?? '')) {
        return 1
      } else {
        return -1
      }
    })

  if (limit) {
    return projects.slice(0, limit)
  }

  return projects
}

export function getProjectMetadata(filepath: string): ProjectMetadata {
  const slug = filepath.replace(/\.mdx$/, '')
  const filePath = path.join(projectDirectory, filepath)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
  const { data } = matter(fileContent)
  return { ...data, slug }
}