function Contact() {
  return (
    <section
      id="contact"
      className="section section--contact"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact__content">
          <div className="section__header">
            <p className="section__eyebrow">Contact</p>

            <h2
              id="contact-title"
              className="section__title"
            >
              Let&apos;s Connect
            </h2>

            <p className="section__description">
              I&apos;m open to connecting about software development,
              internships, projects, and learning opportunities.
            </p>
          </div>

          <div className="contact__actions">
            <a
              className="contact__link contact__link--primary"
              href="https://github.com/Rudra070707"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <span aria-hidden="true">↗</span>
            </a>

            <a
              className="contact__link"
              href="https://www.linkedin.com/in/rudra-bandekar-565050356/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LinkedIn</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact