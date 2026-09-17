import type { Project } from '../../types/portfolio'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const projectIndex = String(project.order).padStart(2, '0')

  return (
    <article
      className="project-card"
      aria-labelledby={`project-${project.id}-title`}
    >
      <div className="project-card__header">
        <div className="project-card__heading">
          <p className="project-card__category">
            {project.category}
          </p>

          <h3
            id={`project-${project.id}-title`}
            className="project-card__title"
          >
            {project.name}
          </h3>
        </div>

        <span
          className="project-card__index"
          aria-label={`Project ${project.order}`}
        >
          {projectIndex}
        </span>
      </div>

      <p className="project-card__description">
        {project.description}
      </p>

      <ul
        className="project-card__technologies"
        aria-label={`${project.name} technologies`}
      >
        {project.technologies.map((technology) => (
          <li key={technology}>
            {technology}
          </li>
        ))}
      </ul>

      <div className="project-card__actions">
        {project.liveUrl && (
          <a
            className="project-card__link project-card__link--primary"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live demo of ${project.name}`}
          >
            Live Demo
            <span aria-hidden="true">↗</span>
          </a>
        )}

        {project.githubUrl && (
          <a
            className="project-card__link"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} source code on GitHub`}
          >
            GitHub
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard