# ARCHITECTURE.md

# Rudra Bandekar — Portfolio Website Architecture

## 0. Document Purpose

This document defines the technical architecture of Rudra Bandekar's personal developer portfolio.

It describes:

* Application structure
* Technology choices
* Component architecture
* Data architecture
* Styling architecture
* State management
* External integrations
* Deployment
* CI/CD
* SEO
* Performance
* Security
* Scalability
* Future architectural evolution

The initial implementation must remain simple and production-ready.

Do not implement future architecture until the corresponding requirements actually exist.

---

# 1. Architecture Principles

The architecture follows these priorities:

```text id="k6z8s1"
Correctness
     ↓
Security
     ↓
Accessibility
     ↓
Maintainability
     ↓
Performance
     ↓
SEO
     ↓
Scalability
     ↓
Visual enhancement
```

The project should use the simplest architecture that satisfies the current requirements.

Complexity must be justified by a real requirement.

---

# 2. Current Product Scope

The initial portfolio is a primarily static personal website.

Core content includes:

* Hero
* About
* Skills
* Projects
* Experience
* Education
* Achievements
* GitHub
* Contact
* Footer

The primary purpose is to present Rudra's professional identity, technical skills, projects, education, and development activity.

---

# 3. Version 1 Architecture

The initial system should use a client-side frontend with structured local content.

```text id="5x1yqf"
                         ┌────────────────────┐
                         │      Visitor       │
                         └──────────┬─────────┘
                                    │
                                    ▼
                         ┌────────────────────┐
                         │   Static Hosting   │
                         │                    │
                         │ Portfolio Frontend │
                         └──────────┬─────────┘
                                    │
                                    ▼
                         ┌────────────────────┐
                         │ React Application  │
                         │   TypeScript       │
                         └──────────┬─────────┘
                                    │
              ┌─────────────────────┼─────────────────────┐
              │                     │                     │
              ▼                     ▼                     ▼
       Local Portfolio Data    Static Assets       External Links
              │                     │               GitHub / LinkedIn
              ▼                     ▼
        UI Components        Images / Resume
```

Version 1 does **not** require:

* Custom backend
* Database
* Authentication
* Admin dashboard
* CMS
* Custom API
* Server-side application logic

---

# 4. Technology Stack

## 4.1 Frontend

### Primary Stack

```text id="7t4bqv"
React
TypeScript
Vite
```

### Reasoning

This stack is appropriate for the current portfolio because:

* The website is primarily static.
* React provides reusable component architecture.
* TypeScript provides type safety.
* Vite provides a fast development and build workflow.
* Static deployment is straightforward.
* The stack reinforces skills relevant to frontend and full-stack development.

---

# 5. Framework Decision

## React + TypeScript + Vite

Initial implementation:

```text id="s8nd8j"
React
   +
TypeScript
   +
Vite
```

This is the default Version 1 architecture.

---

## Next.js

Next.js is not required for Version 1.

It may become appropriate if the portfolio later requires substantial:

* Server-side rendering
* Static generation across many routes
* Dynamic project pages
* Blog infrastructure
* Server-side data fetching
* Content management
* Backend capabilities

If these requirements emerge, the architecture should be reevaluated rather than prematurely introducing Next.js.

The decision and reasoning must be recorded in `DECISIONS.md`.

---

# 6. Styling Architecture

The project should use one primary styling strategy.

Preferred initial approach:

```text id="n1p4yx"
CSS
+
Design Tokens
+
Component-level organization
```

Tailwind CSS may be used if selected during project initialization.

Do not combine:

* Tailwind
* CSS Modules
* styled-components
* another styling framework

without a specific architectural reason.

The final styling decision must be documented in `DECISIONS.md`.

---

# 7. Design System

All visual decisions should follow `DESIGN.md`.

Design tokens should centralize values such as:

```text id="c0g1kw"
Colors
Typography
Spacing
Border radius
Shadows
Transitions
Breakpoints
```

Components should consume these tokens rather than duplicating arbitrary values.

---

# 8. Icon Architecture

Use a single consistent icon library if icons are required.

Preferred candidate:

```text
Lucide
```

Icons should not be added merely for decoration.

Interactive icons must have accessible labels.

---

# 9. Animation Architecture

Animation should be lightweight.

Preferred order:

```text id="ubt1v9"
CSS transitions
      ↓
CSS animations
      ↓
Lightweight animation library
```

A JavaScript animation library should only be introduced when native CSS is insufficient.

The portfolio explicitly does not require:

* Three.js
* WebGL
* 3D scenes
* Heavy particle systems

Animation must respect:

```text id="h6f7uj"
prefers-reduced-motion
```

---

# 10. Application Structure

Recommended application layers:

```text id="q0t7dw"
Application
    │
    ├── Layout
    │
    ├── Sections
    │
    ├── Components
    │
    ├── Data
    │
    ├── Types
    │
    ├── Hooks
    │
    └── Utilities
```

Keep dependencies flowing toward lower-level reusable functionality where practical.

Avoid unnecessary circular dependencies.

---

# 11. Recommended Folder Structure

```text id="9hj4pk"
portfolio/
│
├── public/
│   ├── images/
│   ├── icons/
│   ├── resume/
│   ├── favicon/
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── sections/
│   │   ├── projects/
│   │   └── ui/
│   │
│   ├── data/
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── education.ts
│   │   ├── experience.ts
│   │   ├── achievements.ts
│   │   └── social.ts
│   │
│   ├── hooks/
│   │
│   ├── lib/
│   │
│   ├── types/
│   │
│   ├── styles/
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── .env.example
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── ARCHITECTURE.md
├── DECISIONS.md
├── DESIGN.md
├── MEMORY.md
├── PORTFOLIO_SPEC.md
├── PRD.md
├── RULES.md
├── TESTING.md
├── README.md
├── package.json
├── tsconfig.json
├── vite.config.ts
└── index.html
```

The actual structure may be simplified if some directories are unnecessary.

Do not create empty architectural layers merely to match this diagram.

---

# 12. Component Architecture

Components should be organized by responsibility.

Example:

```text id="2k5p8f"
components/
│
├── layout/
│   ├── Navbar
│   └── Footer
│
├── navigation/
│   └── MobileMenu
│
├── sections/
│   ├── Hero
│   ├── About
│   ├── Skills
│   ├── Projects
│   ├── Experience
│   ├── Education
│   ├── Achievements
│   ├── GitHub
│   └── Contact
│
├── projects/
│   └── ProjectCard
│
└── ui/
    ├── Button
    ├── Badge
    └── SectionHeading
```

Only create components when they provide meaningful reuse, separation, or clarity.

---

# 13. Component Responsibility

A component should have a clear responsibility.

Example:

```text id="f1v7cu"
ProjectsSection
      │
      ├── receives project data
      │
      └── renders ProjectCard
                         │
                         ├── Project title
                         ├── Description
                         ├── Technology badges
                         └── Project links
```

Avoid components that simultaneously:

* Fetch unrelated data
* Manage global state
* Render large unrelated UI sections
* Contain business logic
* Handle unrelated concerns

---

# 14. Data Architecture

Portfolio content must be separated from UI implementation.

Preferred structure:

```text id="8t8s7e"
Typed Data
    ↓
Component
    ↓
Rendered UI
```

Example:

```ts id="l6pk0a"
projects.ts
     ↓
ProjectsSection
     ↓
ProjectCard
```

---

# 15. Portfolio Data Models

Important domain models should be typed.

Potential structures:

```text id="b0q8pu"
Project
Skill
SkillCategory
EducationEntry
ExperienceEntry
Achievement
SocialLink
```

A project may contain:

```text id="8o1p3r"
id
name
category
description
technologies
githubUrl
liveUrl
image
featured
```

Optional fields should be represented as optional rather than filled with fake values.

For example:

```text
liveUrl: undefined
```

is preferable to:

```text
liveUrl: "https://example.com"
```

---

# 16. Current Portfolio Data

The initial project data includes:

### FitTrack

```text id="6t4d1m"
Type: Full-Stack Web Application
GitHub: Available
Live Demo: Available
```

### Memorix

```text id="7g7k4x"
Type: AI / PWA
GitHub: Not currently available
Live Demo: Not currently available
```

### Python File Organizer

```text id="5xk1p8"
Type: Desktop Application
GitHub: Available
Live Demo: Not applicable
```

The UI must conditionally render links based on availability.

---

# 17. State Management

Version 1 does not require a global state-management library.

Use:

* React local state
* Component state
* URL state where appropriate
* Browser APIs where appropriate

Examples of local state:

* Mobile menu open/closed
* Theme state if implemented
* UI interaction state

Do not introduce Redux, Zustand, or another global state solution unless real requirements justify it.

---

# 18. Routing

Version 1 should remain a single-page portfolio unless project detail pages are explicitly introduced.

Primary sections:

```text id="8a2a0m"
/
  #about
  #skills
  #projects
  #experience
  #education
  #achievements
  #github
  #contact
```

Use semantic anchor navigation where appropriate.

A routing library should not be added solely because the project is using React.

---

# 19. Database

## Version 1

No database.

All portfolio content can be stored in typed local data files.

---

## Future Database

A database should only be introduced if requirements require persistent dynamic data.

Potential future requirements:

* CMS
* Admin dashboard
* Blog management
* User-generated content
* Server-side analytics storage

Possible future architecture:

```text id="f9qf2s"
Frontend
    ↓
Backend/API
    ↓
Database
```

The database technology must be selected based on actual requirements.

---

# 20. API Architecture

## Version 1

No custom backend API.

The portfolio can use external services where necessary.

Potential future integration:

```text id="x4t2xg"
Portfolio
    │
    └──── GitHub API
              │
              └── Public repositories/activity
```

External services must be treated as unreliable dependencies.

If an external service fails:

> The core portfolio must continue functioning.

---

# 21. GitHub Integration Strategy

## Version 1

Use static links to:

```text id="0x9m4a"
https://github.com/Rudra070707
```

and individual project repositories.

## Future

A GitHub API integration may provide:

* Repository information
* Public activity
* Repository statistics

The API must never become a single point of failure for the portfolio.

---

# 22. Contact Architecture

Version 1 should not contain a fake contact form.

The current portfolio does not have a verified public email address.

Therefore:

```text id="u3p9g1"
GitHub
LinkedIn
```

should be used as the available contact methods.

Once a verified email address is provided, an email CTA may be added.

A contact form can be introduced later through:

1. Third-party form service
2. Serverless function
3. Custom backend

Selection should be based on actual requirements.

---

# 23. Environment Variables

Environment variables should only be used for configuration or secrets that genuinely require them.

Example:

```text id="0f3z5x"
.env
.env.example
```

Never expose private secrets in client-side code.

Important distinction:

> A frontend environment variable is not automatically secret.

Any value bundled into the frontend should be treated as public.

---

# 24. Static Assets

Static assets should be organized under `public/` or `src/assets/` according to how they are consumed.

Examples:

```text id="j9e6r3"
public/
├── images/
├── icons/
├── resume/
└── favicon/
```

Images should be:

* Properly sized
* Compressed
* Optimized
* Served in appropriate formats where practical

---

# 25. Resume Architecture

A resume is not currently available.

Therefore Version 1 must not contain a fake resume file or fake download link.

When a verified resume is created:

```text id="8m7t9j"
public/resume/Rudra-Bandekar-Resume.pdf
```

may be used.

The portfolio should link only to the actual current resume.

---

# 26. SEO Architecture

The portfolio should use:

* Semantic HTML
* Descriptive page title
* Meta description
* Open Graph metadata
* Appropriate heading hierarchy
* Canonical URL where appropriate
* robots.txt
* sitemap where appropriate
* Structured data where genuinely useful

Do not keyword-stuff content.

SEO content must remain natural and truthful.

---

# 27. Accessibility Architecture

Accessibility is part of the architecture rather than a final polish step.

The application must support:

* Keyboard navigation
* Focus management
* Semantic elements
* Accessible names
* Appropriate contrast
* Reduced motion
* Accessible navigation
* Accessible external links
* Accessible interactive controls

---

# 28. Performance Architecture

Primary performance strategy:

```text id="7grt7k"
Static Content
      +
Optimized Assets
      +
Minimal JavaScript
      +
Efficient Components
      +
Limited Dependencies
      ↓
Fast Portfolio
```

Avoid unnecessary:

* API requests
* JavaScript execution
* Large libraries
* Heavy animation
* Large images
* Runtime computation

Performance should be measured rather than assumed.

---

# 29. Core Web Performance

Performance reviews should consider:

* LCP
* INP
* CLS
* JavaScript bundle size
* Image size
* Network requests
* Font loading

Use Lighthouse and browser developer tools where appropriate.

---

# 30. Security Architecture

Version 1 has a relatively small attack surface because it does not require:

* Authentication
* Database
* Custom backend
* Private user data

Security requirements still include:

* No exposed secrets
* Safe external links
* Dependency hygiene
* Secure third-party integrations
* Input validation for future forms
* Safe handling of external API responses

---

# 31. Future Backend Security

If a backend is introduced, it must consider:

```text id="1d5wjy"
Authentication
Authorization
Input Validation
Rate Limiting
CSRF where applicable
CORS
Secure Headers
Secret Management
Logging
Monitoring
Error Handling
```

Do not introduce backend infrastructure until the product requirements justify it.

---

# 32. Deployment Architecture

The initial portfolio should be deployable as a static application.

Potential platforms:

* Vercel
* Netlify
* Cloudflare Pages
* GitHub Pages

The final platform should be selected based on:

* Build compatibility
* Deployment simplicity
* Performance
* Domain configuration
* CI/CD support
* Project requirements

---

# 33. CI/CD Architecture

Recommended future pipeline:

```text id="2s4y4k"
Developer
    │
    ▼
Git Push
    │
    ▼
GitHub
    │
    ▼
GitHub Actions
    │
    ├── Install
    ├── Lint
    ├── Type Check
    ├── Test
    └── Build
           │
           ▼
       Deployment
```

CI should prevent known broken builds from being deployed.

---

# 34. Deployment Environment

Separate:

```text id="3t0v8e"
Development
    ↓
Preview
    ↓
Production
```

where the selected deployment platform supports these environments.

Production configuration must never contain development-only behavior unnecessarily.

---

# 35. Scalability Strategy

The initial portfolio intentionally favors simplicity.

Future evolution may follow:

```text id="v6x8tw"
Version 1
Static Portfolio
      ↓
Version 2
Project Detail Pages + Blog
      ↓
Version 3
Content Management
      ↓
Version 4
API / Serverless Functions
      ↓
Version 5
Database + Advanced Features
```

This is a possible evolution, not a required roadmap.

Each transition requires a new requirements analysis.

---

# 36. Future Project Detail Architecture

If detailed project pages are introduced:

```text id="4q1d9b"
/
├── /projects
├── /projects/fittrack
├── /projects/memorix
└── /projects/python-file-organizer
```

Each project page may contain:

* Overview
* Problem
* Features
* Architecture
* Technology
* Technical challenges
* Engineering decisions
* Screenshots
* Links

Do not implement this routing until the feature is approved.

---

# 37. Future Blog Architecture

A future technical blog may use:

```text id="8a6r0c"
Markdown / MDX
       ↓
Content Processing
       ↓
Blog Pages
       ↓
Static Generation
```

A database-backed CMS is not required merely to create a blog.

---

# 38. Error and Failure Strategy

External services must fail gracefully.

For example:

```text id="e5m9cs"
GitHub API unavailable
        ↓
Show static GitHub profile link
        ↓
Portfolio remains functional
```

Do not allow optional integrations to break core content.

---

# 39. Observability

Version 1 does not require complex observability infrastructure.

Future production systems may introduce:

* Error tracking
* Performance monitoring
* Analytics
* Logging

Only collect analytics that are genuinely useful and appropriately disclosed.

---

# 40. Architecture Decision Rules

Any significant architectural change must answer:

1. What requirement requires the change?
2. What problem does it solve?
3. What alternatives were considered?
4. What are the trade-offs?
5. What maintenance cost does it introduce?
6. Does it affect performance?
7. Does it affect security?
8. Does it affect accessibility?
9. Does it affect deployment?
10. Is the complexity justified?

Important decisions must be recorded in `DECISIONS.md`.

---

# 41. Architecture Anti-Patterns

Do not introduce:

* Backend without a requirement
* Database without persistent-data requirements
* Global state without shared-state requirements
* Routing library without routing requirements
* Animation library for simple CSS transitions
* UI framework without design justification
* Multiple CSS systems without justification
* API integration solely to make the portfolio look "advanced"
* Fake dynamic statistics
* Fake GitHub data
* Unnecessary microservices
* Premature abstractions

---

# 42. Architecture Review Checklist

Before major architectural changes:

* [ ] Requirements reviewed
* [ ] Existing architecture inspected
* [ ] Alternatives considered
* [ ] Performance considered
* [ ] Security considered
* [ ] Accessibility considered
* [ ] Deployment impact considered
* [ ] Maintenance impact considered
* [ ] Complexity justified
* [ ] `DECISIONS.md` updated

---

# 43. Final Architecture Principle

The portfolio should demonstrate good engineering judgment.

The objective is not to build the most technologically complicated portfolio.

The objective is to build a portfolio that is:

**Fast → Accessible → Secure → Maintainable → Professional → Extensible**

Use today's requirements to design today's architecture.

Do not build tomorrow's infrastructure before tomorrow's requirements exist.
