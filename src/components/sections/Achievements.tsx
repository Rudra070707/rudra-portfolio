import { achievements } from '../../data/achievements'

function Achievements() {
  return (
    <section
      id="achievements"
      className="section achievements"
      aria-labelledby="achievements-title"
    >
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">Achievements</p>

          <h2
            id="achievements-title"
            className="section__title"
          >
            Highlights
          </h2>

          <p className="section__description">
            A few milestones from my academic and project journey.
          </p>
        </div>

        <div className="achievements__grid">
          {achievements.map((achievement, index) => (
            <article
              className="achievement-card"
              key={achievement.title}
            >
              <div className="achievement-card__top">
                <span
                  className="achievement-card__index"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="achievement-card__title">
                {achievement.title}
              </h3>

              <p className="achievement-card__description">
                {achievement.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements