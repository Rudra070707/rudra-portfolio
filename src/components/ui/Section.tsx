import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  description?: string
  children?: ReactNode
}

function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section section--${id}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">{eyebrow}</p>

          <h2
            id={`${id}-title`}
            className="section__title"
          >
            {title}
          </h2>

          {description && (
            <p className="section__description">
              {description}
            </p>
          )}
        </div>

        {children}
      </div>
    </section>
  )
}

export default Section