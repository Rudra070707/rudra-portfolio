import { useEffect, useState } from 'react'

const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open)
  }

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a
          className="navbar__brand"
          href="#home"
          aria-label="Rudra Bandekar home"
          onClick={closeMenu}
        >
          <span
            className="navbar__brand-mark"
            aria-hidden="true"
          >
            RB
          </span>

          <span className="navbar__brand-name">
            Rudra Bandekar
          </span>
        </a>

        <nav
          id="primary-navigation"
          className={`navbar__nav ${
            isMenuOpen ? 'navbar__nav--open' : ''
          }`}
          aria-label="Primary navigation"
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className={`navbar__menu-button ${
            isMenuOpen ? 'navbar__menu-button--open' : ''
          }`}
          type="button"
          aria-label={
            isMenuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}

export default Navbar