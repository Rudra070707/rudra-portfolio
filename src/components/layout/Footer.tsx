function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__identity">
          <a
            className="footer__brand"
            href="#home"
            aria-label="Back to Rudra Bandekar home"
          >
            <span
              className="footer__brand-mark"
              aria-hidden="true"
            >
              RB
            </span>

            <span className="footer__brand-name">
              Rudra Bandekar
            </span>
          </a>

          <p className="footer__tagline">
            Building practical software, learning by building.
          </p>
        </div>

        <nav
          className="footer__links"
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
        </nav>
      </div>

      <div className="container footer__bottom">
        <p>
          © {currentYear} Rudra Bandekar. All rights reserved.
        </p>

        <a
          href="#home"
          className="footer__back-to-top"
        >
          Back to top
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer