import { education } from '../../data/education'

function Education() {
  return (
    <section
      id="education"
      className="section education"
      aria-labelledby="education-title"
    >
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">Education</p>

          <h2 id="education-title" className="section__title">
            Education
          </h2>

          <p className="section__description">
            My academic journey in computer engineering.
          </p>
        </div>

        <div className="education__list">
          {education.map((item) => (
            <article
              className="education-card"
              key={`${item.degree}-${item.year}`}
            >
              <div className="education-card__main">
                <p className="education-card__year">
                  {item.year}
                </p>

                <h3 className="education-card__degree">
                  {item.degree}
                </h3>

                <p className="education-card__institution">
                  {item.institution}
                </p>
              </div>

              <div className="education-card__meta">
                {item.status && (
                  <span className="education-card__status">
                    {item.status}
                  </span>
                )}

                {item.result && (
                  <strong className="education-card__result">
                    {item.result}
                  </strong>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education