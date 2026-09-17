function Hero() {
  return (
    <section
      id="home"
      className="hero"
      aria-labelledby="hero-title"
    >
      <div className="container hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span
              className="hero__eyebrow-line"
              aria-hidden="true"
            />
            Hello, I&apos;m
          </p>

          <h1 id="hero-title" className="hero__name">
            Rudra Bandekar
          </h1>

          <p className="hero__role">
            Computer Engineering Student &amp; Developer
          </p>

          <p className="hero__tagline">
            Building practical software, learning by building.
          </p>

          <p className="hero__description">
            I build practical software, explore modern technologies,
            and continuously strengthen my programming and
            problem-solving skills.
          </p>

          <div className="hero__actions">
            <a
              className="button button--primary"
              href="#projects"
            >
              View My Projects
              <span aria-hidden="true">↓</span>
            </a>

            <a
              className="button button--secondary"
              href="https://github.com/Rudra070707"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div
            className="hero__socials"
            aria-label="Professional links"
          >
            <a
              href="https://github.com/Rudra070707"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/rudra-bandekar-565050356/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <a
          className="hero__scroll"
          href="#about"
          aria-label="Scroll to About section"
        >
          <span
            className="hero__scroll-line"
            aria-hidden="true"
          />
          <span>Scroll to explore</span>
        </a>
      </div>
    </section>
  )
}

export default Hero