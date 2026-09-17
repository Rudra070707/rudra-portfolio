import { skillGroups } from '../../data/skills'

function Skills() {
  return (
    <section
      id="skills"
      className="section skills"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">Skills</p>

          <h2 id="skills-title" className="section__title">
            Technologies I use to build software.
          </h2>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <article
              className="skills__group"
              key={group.category}
            >
              <h3 className="skills__group-title">
                {group.category}
              </h3>

              <ul
                className="skills__list"
                aria-label={`${group.category} skills`}
              >
                {group.skills.map((skill) => (
                  <li
                    className="skills__item"
                    key={skill}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills