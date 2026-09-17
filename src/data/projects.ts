import type { Project } from '../types/portfolio'

export const projects: Project[] = [
  {
    id: 'fittrack',
    name: 'FitTrack',
    category: 'Smart Gym Management System',
    description:
      'A full-stack gym management web application for members, workouts, attendance, subscriptions, and other gym operations.',
    technologies: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Axios',
      'Chart.js',
      'Framer Motion',
    ],
    githubUrl: 'https://github.com/Rudra070707/fittrack',
    liveUrl: 'https://fittrack-weld.vercel.app/home',
    featured: true,
    order: 1,
  },
  {
    id: 'memorix',
    name: 'Memorix',
    category: 'AI Voice Study Assistant',
    description:
      'An AI-powered study assistant using voice interaction and AI-generated responses, with PWA support and an accessibility-focused interface.',
    technologies: [
      'React',
      'Vite',
      'JavaScript',
      'Google Gemini API',
      'PWA',
      'Web Speech API',
    ],
    featured: true,
    order: 2,
  },
  {
    id: 'python-file-organizer',
    name: 'Python File Organizer',
    category: 'Desktop Utility',
    description:
      'A desktop application that organizes files into folders based on their file types using Python and Tkinter.',
    technologies: ['Python', 'Tkinter', 'File System Operations'],
    githubUrl: 'https://github.com/Rudra070707/Python-File-Organizer',
    featured: true,
    order: 3,
  },
]