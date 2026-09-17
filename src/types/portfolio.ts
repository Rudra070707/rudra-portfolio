export interface Project {
  id: string
  name: string
  category: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  order: number
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface Education {
  degree: string
  institution: string
  year: string
  result?: string
  status?: string
}

export interface Experience {
  role: string
  organization: string
  period: string
  description: string
}

export interface Achievement {
  title: string
  description: string
}

export interface SocialLink {
  label: string
  url: string
}