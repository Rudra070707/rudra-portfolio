# AGENTS.md

# Rudra Bandekar — Portfolio Engineering Instructions

## 0. Purpose

This file is the primary instruction and context entry point for AI coding agents working on this repository.

All AI agents must read and follow this file before inspecting, modifying, creating, deleting, or refactoring project files.

This repository contains the personal developer portfolio of **Rudra Bandekar**, a Computer Engineering student and developer.

The portfolio is a real professional product intended to represent Rudra's technical identity to:

* Recruiters
* Hiring managers
* Software engineers
* Internship coordinators
* Potential collaborators
* Potential clients

Treat the project as a production-quality application, not as a temporary student demo.

---

# 1. Project Mission

Build and continuously improve a portfolio that is:

* Professional
* Modern
* Fast
* Responsive
* Accessible
* Secure
* Maintainable
* SEO-friendly
* Technically credible
* Easy to evolve

The portfolio should demonstrate both **software engineering ability** and **product/design judgment**.

The implementation should favor engineering quality over unnecessary visual complexity.

---

# 2. Mandatory Project Context

Before making any meaningful change, understand the project's current state.

Read the following documents when they exist:

1. `AGENTS.md`
2. `PRD.md`
3. `DESIGN.md`
4. `ARCHITECTURE.md`
5. `RULES.md`
6. `MEMORY.md`
7. `DECISIONS.md`
8. `TESTING.md`
9. `PORTFOLIO_SPEC.md`

### Priority

Use this order when information conflicts:

1. Explicit user instruction
2. `PRD.md`
3. `PORTFOLIO_SPEC.md`
4. `DESIGN.md`
5. `ARCHITECTURE.md`
6. `RULES.md`
7. `DECISIONS.md`
8. `MEMORY.md`
9. Existing implementation

Do not silently resolve important conflicts.

If a conflict materially affects implementation, explain it before proceeding.

---

# 3. Project Identity

The portfolio represents:

**Name:** Rudra Bandekar

**Professional Identity:** Computer Engineering Student & Developer

**Tagline:**

> Building practical software, learning by building.

**Location:** Nanded, Maharashtra, India

**Current Education:** Bachelor of Engineering in Computer Engineering

**Expected Graduation:** 2029

The portfolio must accurately represent the user's current career stage.

Do not present the user as an experienced professional, senior engineer, expert, or employed developer unless verified information supports that claim.

---

# 4. Core Engineering Principles

Prioritize engineering decisions in this general order:

```text
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
Scalability
    ↓
Visual enhancement
```

Visual effects must never compromise the fundamentals.

---

# 5. Before Coding

Before modifying the codebase:

1. Inspect the repository structure.
2. Read the relevant documentation.
3. Identify the application's current architecture.
4. Inspect the relevant source files.
5. Understand existing dependencies.
6. Determine how the requested feature currently works.
7. Check whether similar functionality already exists.
8. Identify potential side effects.
9. Determine the smallest appropriate change.
10. Only then implement.

Do not start by blindly rewriting files.

---

# 6. Preserve Existing Work

Existing working functionality must be preserved unless the user explicitly requests a change.

When modifying code:

* Do not overwrite unrelated work.
* Do not remove features without approval.
* Do not replace working architecture unnecessarily.
* Do not perform broad refactors for a small feature.
* Do not modify unrelated files merely for stylistic consistency.

If existing code is imperfect but unrelated to the requested task, leave it unchanged unless it creates a direct problem.

---

# 7. Implementation Standards

Write code that is:

* Readable
* Modular
* Maintainable
* Testable
* Reusable where appropriate
* Type-safe where applicable
* Secure
* Performant
* Consistent with the existing architecture

Prefer straightforward implementations over clever implementations.

Do not introduce abstraction unless it provides a real benefit.

---

# 8. Simplicity and Complexity

Follow:

* KISS
* YAGNI
* DRY where duplication is meaningful
* SOLID where appropriate

Do not apply design patterns merely to demonstrate knowledge.

Every abstraction should have a reason.

Avoid:

* Premature optimization
* Premature abstraction
* Unnecessary state management
* Unnecessary dependencies
* Excessive component fragmentation
* Over-engineered architecture

---

# 9. Frontend Standards

Use semantic HTML whenever possible.

Prefer:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
<button>
<a>
```

over using generic `<div>` elements for everything.

Interactive elements must use appropriate semantic controls.

Do not create clickable `<div>` elements when a button or link is appropriate.

---

# 10. React Standards

When React is used:

* Prefer functional components.
* Keep components focused.
* Keep presentation separate from data where practical.
* Avoid unnecessary state.
* Avoid unnecessary effects.
* Avoid unnecessary memoization.
* Keep component APIs understandable.
* Reuse components only when reuse improves maintainability.

Do not use:

* `useEffect`
* `useMemo`
* `useCallback`

without a concrete reason.

---

# 11. TypeScript Standards

When TypeScript is used:

Prefer strong typing.

Avoid:

```ts
any
```

unless there is a documented and justified reason.

Prefer:

```ts
unknown
```

when data is genuinely unknown.

Create explicit types for important domain structures such as:

* Projects
* Skills
* Education
* Experience
* Certifications
* Navigation items

Do not duplicate the same type definition across multiple files.

---

# 12. Naming Conventions

## Variables

Use descriptive camelCase.

```ts
const featuredProjects = [];
const projectCount = 3;
```

Avoid:

```ts
const x = [];
const p = 3;
```

## Functions

Use descriptive camelCase.

```ts
getFeaturedProjects()
formatProjectDate()
handleNavigationClick()
```

## Components

Use PascalCase.

```text
ProjectCard.tsx
SkillsSection.tsx
Navbar.tsx
```

## Types

Use PascalCase.

```ts
Project
SkillCategory
ExperienceEntry
```

Names must communicate purpose.

---

# 13. Styling Standards

Follow `DESIGN.md`.

Do not introduce arbitrary:

* Colors
* Fonts
* Font sizes
* Spacing
* Breakpoints
* Shadows
* Borders
* Animations

when an existing design token or component pattern already exists.

Prefer centralized design tokens.

Avoid excessive use of:

```css
!important
```

Avoid deeply nested selectors and unnecessary CSS specificity.

---

# 14. Responsive Design

The website must work across:

* Mobile
* Tablet
* Laptop
* Desktop
* Large displays

Use a mobile-first approach.

Do not optimize only for the developer's own device.

Every significant UI change should be considered at multiple viewport sizes.

---

# 15. Accessibility

Accessibility is a first-class engineering requirement.

Consider:

* Keyboard navigation
* Focus visibility
* Focus order
* Semantic HTML
* Screen-reader support
* Accessible labels
* Color contrast
* Form accessibility
* Reduced-motion preferences
* Appropriate ARIA usage

Do not use ARIA when native semantic HTML already provides the required behavior.

---

# 16. Animation

Animations should improve:

* Feedback
* Hierarchy
* Navigation
* Visual continuity

They should not exist merely for decoration.

Prefer:

* CSS transitions
* CSS animations
* Lightweight motion

Avoid:

* Excessive animations
* Heavy particle effects
* Continuous CPU-intensive effects
* Excessive parallax
* Unnecessary 3D
* Animation on every element

Always consider:

```css
prefers-reduced-motion
```

---

# 17. Performance

Performance is a product requirement.

Prefer:

* Optimized images
* Responsive images
* Lazy loading where appropriate
* Efficient rendering
* Small dependency footprint
* Minimal JavaScript
* Code splitting where beneficial
* Static generation where appropriate
* Browser caching

Do not optimize based purely on assumptions.

When performance becomes a concern:

1. Measure.
2. Identify the bottleneck.
3. Fix the bottleneck.
4. Measure again.

---

# 18. Security

Never commit or expose:

* API keys
* Passwords
* Authentication tokens
* Private credentials
* Private certificates
* Production secrets
* `.env` files containing secrets

Use environment variables where secrets are required.

Maintain:

```text
.env
```

outside version control.

Provide:

```text
.env.example
```

with variable names only.

Remember:

> Everything shipped to the browser should be considered publicly visible.

Never place a secret API credential directly in frontend source code.

---

# 19. Dependency Management

Before adding a dependency, determine:

1. Whether it is actually required.
2. Whether native browser functionality can solve the problem.
3. Whether an existing dependency already provides the capability.
4. Whether the dependency is actively maintained.
5. Its bundle-size impact.
6. Its security and maintenance implications.
7. Whether it fits the project's architecture.

Do not install packages merely because they are popular.

Keep dependencies minimal.

---

# 20. Personal Content Integrity

This is a professional portfolio.

Never fabricate or exaggerate:

* Work experience
* Internships
* Certifications
* Awards
* Clients
* Employment
* Technical skills
* Project metrics
* User counts
* Performance numbers
* GitHub statistics
* Credentials
* Achievements

If information is missing:

```text
TODO: Add verified information.
```

or request the required information from the user.

Accuracy is more important than making the portfolio appear more impressive.

---

# 21. Project Presentation

Projects are one of the most important parts of this portfolio.

Project information should clearly communicate:

* Problem
* Purpose
* Features
* Technologies
* Engineering work
* Repository
* Deployment where available

Do not add fake metrics or claims.

If a project does not have a GitHub repository or live deployment, do not create fake links.

---

# 22. External Links

Before adding an external link:

* Verify the URL when possible.
* Ensure it points to the intended destination.
* Do not fabricate URLs.

Examples:

* GitHub
* LinkedIn
* Project deployments
* Certification credentials

Broken or unavailable links should not be presented as functional.

---

# 23. Git Practices

Use Git consistently.

Commit messages should follow:

```text
type(scope): description
```

Examples:

```text
feat(hero): add portfolio introduction

feat(projects): add FitTrack project card

fix(navbar): fix mobile navigation behavior

refactor(data): centralize project metadata

style(about): improve responsive spacing

docs(architecture): document deployment structure
```

Keep commits focused.

Avoid mixing unrelated changes into one commit.

---

# 24. Change Management

Before a change:

```text
Understand
    ↓
Plan
    ↓
Implement
    ↓
Verify
```

For larger changes:

```text
Requirement
    ↓
Impact Analysis
    ↓
Implementation Plan
    ↓
Implementation
    ↓
Testing
    ↓
Review
    ↓
Documentation
```

Do not make architectural changes silently.

---

# 25. Architectural Changes

If a change affects:

* Application architecture
* Data flow
* Major dependencies
* Deployment strategy
* API design
* State management
* Routing architecture
* Rendering strategy

then:

1. Explain the reason.
2. Consider alternatives.
3. Consider trade-offs.
4. Update `DECISIONS.md`.

Do not introduce architecture that the current requirements do not justify.

---

# 26. Testing Requirements

After meaningful code changes, run the relevant verification.

Depending on the project:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

Only run commands that actually exist in the project.

Never claim that a test, build, or verification passed unless it was actually executed.

---

# 27. Manual Verification

For UI changes, inspect:

* Desktop layout
* Mobile layout
* Navigation
* Buttons
* Links
* Animations
* Images
* Typography
* Focus states
* Console errors

For responsive changes, test multiple viewport sizes.

---

# 28. Production Build

Before declaring a significant implementation complete:

* Run the production build.
* Verify there are no build errors.
* Review warnings where relevant.
* Verify the generated application behaves correctly.

A successful development server is not sufficient evidence that the production build works.

---

# 29. Documentation Maintenance

Documentation is part of the project.

Update:

### `MEMORY.md`

After meaningful implementation work.

Record:

* What changed
* Current project state
* Important implementation details
* Known issues
* Next steps

### `DECISIONS.md`

When an important technical or architectural decision is made.

Record:

* Decision
* Context
* Alternatives
* Reasoning
* Consequences

Do not fill documentation with trivial information.

---

# 30. Task Completion Protocol

A task is complete only when the following applicable steps have been performed:

```text
Implementation
    ↓
Review
    ↓
Testing
    ↓
Build
    ↓
Manual verification
    ↓
Documentation update
```

Before reporting completion, check:

* [ ] Requested functionality implemented.
* [ ] Existing functionality preserved.
* [ ] Relevant tests executed.
* [ ] Production build checked where applicable.
* [ ] Responsive behavior reviewed.
* [ ] Accessibility considered.
* [ ] Security considered.
* [ ] Performance considered.
* [ ] No unnecessary dependencies added.
* [ ] Documentation updated where necessary.
* [ ] No unrelated changes introduced.

---

# 31. AI Agent Behavior

AI agents working on this project must:

* Inspect before modifying.
* Reason before rewriting.
* Preserve existing work.
* Follow project documentation.
* Prefer simple solutions.
* Explain important trade-offs.
* Verify changes.
* Be honest about testing status.
* Ask when essential information is missing.
* Keep project documentation synchronized.

AI agents must not:

* Blindly rewrite the project.
* Delete working functionality without approval.
* Invent personal information.
* Invent project information.
* Add unrelated features.
* Add unnecessary dependencies.
* Change architecture without justification.
* Commit secrets.
* Claim unverified results.
* Pretend a task is complete when critical verification has not been performed.

---

# 32. Handling Uncertainty

When information is uncertain:

1. Inspect the repository.
2. Check project documentation.
3. Check existing implementation.
4. Use reliable technical sources when necessary.
5. State the uncertainty.
6. Avoid guessing when guessing could cause damage.

Do not hallucinate:

* APIs
* Library behavior
* Framework capabilities
* Version-specific features
* Configuration options
* Deployment behavior

---

# 33. Avoid Unrelated Improvements

Do not turn a focused task into a general refactoring project.

For example:

If the task is:

> Fix the mobile navbar.

Do not automatically:

* Rewrite the entire navigation architecture.
* Replace the CSS system.
* Install another UI library.
* Redesign unrelated sections.

Make the smallest appropriate change.

---

# 34. Code Quality Standard

Code should satisfy:

```text
Correct
   ↓
Secure
   ↓
Accessible
   ↓
Readable
   ↓
Maintainable
   ↓
Performant
   ↓
Scalable when required
```

"Works on my machine" is not the completion standard.

---

# 35. Portfolio-Specific Design Direction

The portfolio should remain:

* Dark
* Modern
* Developer-oriented
* Professional
* Minimal but visually distinctive

The visual emphasis should be on:

1. Identity
2. Projects
3. Technical skills
4. Education
5. Development activity
6. Contact

Avoid:

* Excessive visual clutter
* Fake terminal interfaces
* Excessive neon styling
* Large 3D scenes
* Unnecessary Three.js
* Generic template aesthetics
* Skill percentage bars
* Fake testimonials
* Fake company logos
* Fake statistics

---

# 36. Long-Term Maintainability

The portfolio will evolve during Rudra's engineering degree.

The architecture should therefore make it easy to add:

* New projects
* Internships
* Certifications
* Achievements
* Technical articles
* Resume versions
* GitHub integrations
* New technologies

without requiring unnecessary rewrites.

Prefer structured data and reusable components where they provide genuine value.

---

# 37. Final Engineering Principle

The goal is not to create the most complicated portfolio.

The goal is to create a portfolio that demonstrates:

> **Good engineering judgment.**

Every implementation should aim to be:

**Correct → Secure → Accessible → Efficient → Maintainable → Scalable when necessary.**

Build only what is justified by the requirements.

When in doubt:

**Inspect first. Understand the system. Make the smallest safe change. Verify it. Document meaningful decisions.**
