function About() {
  return (
    <section
      id="about"
      className="section about"
      aria-labelledby="about-title"
    >
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">About</p>

          <h2 id="about-title" className="section__title">
            About Me
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__content">
            <p>
              I&apos;m a Computer Engineering student with a Diploma in
              Computer Engineering and a strong interest in software
              development.
            </p>

            <p>
              I enjoy building practical projects, learning new technologies,
              and continuously improving my programming and problem-solving
              skills.
            </p>

            <p>
              My current focus is strengthening my foundations across
              frontend, backend, databases, and modern software development
              while turning what I learn into useful software.
            </p>
          </div>

          <aside
            className="about__card"
            aria-label="Education summary"
          >
            <div className="about__card-section">
              <span className="about__card-label">
                Current Focus
              </span>

              <h3>Computer Engineering</h3>

              <p>
                Bachelor of Engineering
                <br />
                VIVA Institute of Technology
              </p>
            </div>

            <div
              className="about__card-divider"
              aria-hidden="true"
            />

            <div className="about__card-section">
              <span className="about__card-label">
                Previous Education
              </span>

              <p>
                Diploma in Computer Engineering
                <br />
                VIVA College of Diploma Engg. &amp; Tech
              </p>

              <strong>87.12%</strong>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default About