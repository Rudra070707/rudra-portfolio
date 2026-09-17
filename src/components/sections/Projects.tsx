import { projects } from '../../data/projects'
import ProjectCard from '../projects/ProjectCard'

function Projects() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .sort((a, b) => a.order - b.order)

  return (
    <section
      id="projects"
      className="section projects"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">Projects</p>

          <h2 id="projects-title" className="section__title">
            Featured Projects
          </h2>

          <p className="section__description">
            Selected projects that reflect my practical software development
            work.
          </p>
        </div>

        <div className="projects__grid">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects