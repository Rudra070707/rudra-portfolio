import { experience } from '../../data/experience'

function Experience() {
  return (
    <section
      id="experience"
      className="section experience"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">Experience</p>

          <h2 id="experience-title" className="section__title">
            Experience
          </h2>
        </div>

        <div className="experience__list">
          {experience.map((item) => (
            <article
              className="experience-card"
              key={`${item.role}-${item.period}`}
            >
              <div
                className="experience-card__timeline"
                aria-hidden="true"
              >
                <span className="experience-card__dot" />
              </div>

              <div className="experience-card__content">
                <div className="experience-card__top">
                  <div className="experience-card__heading">
                    <p className="experience-card__period">
                      {item.period}
                    </p>

                    <h3 className="experience-card__role">
                      {item.role}
                    </h3>

                    <p className="experience-card__organization">
                      {item.organization}
                    </p>
                  </div>
                </div>

                <p className="experience-card__description">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience