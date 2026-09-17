# Engineering Rules

This document defines the engineering rules for the Rudra Bandekar personal portfolio.

These rules apply to implementation, refactoring, debugging, dependency changes, content changes, styling, testing, and deployment.

When a rule conflicts with an explicit higher-priority project instruction, follow the priority defined in `AGENTS.md`.

---

# 1. Engineering Priority

Use the following priority order:

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
SEO
    ↓
Scalability
    ↓
Visual Enhancement
```

Visual polish must never justify:

* Broken functionality
* Security weaknesses
* Accessibility regressions
* Poor maintainability
* Significant performance degradation

The simplest correct solution should generally be preferred.

---

# 2. Inspect Before Changing

Before modifying existing code:

1. Inspect the relevant files.
2. Understand the current implementation.
3. Identify dependencies and relationships.
4. Check existing project conventions.
5. Make the smallest safe change.

Do not rewrite files simply because a different implementation looks cleaner.

Preserve working functionality unless the task explicitly requires changing it.

---

# 3. Naming Conventions

## Variables

Use descriptive camelCase.

```ts
const featuredProjects = [];
const projectCount = 5;
const selectedProject = project;
```

Avoid meaningless names:

```ts
const x = [];
const p = 5;
const a = project;
```

Short names are acceptable for conventional local concepts such as:

```ts
i
id
x
y
```

when their meaning is immediately clear from context.

---

# 4. React Components

React component names must use PascalCase.

Examples:

```text
ProjectCard.tsx
Navbar.tsx
SkillsSection.tsx
HeroSection.tsx
```

Prefer focused functional components.

A component should generally have one clear responsibility.

Avoid creating components purely for abstraction without a meaningful benefit.

---

# 5. Functions

Use descriptive camelCase names.

Examples:

```ts
getFeaturedProjects()
formatProjectDate()
handleNavigation()
handleMenuToggle()
```

Function names should communicate intent.

Avoid:

```ts
doThing()
process()
handle()
run()
```

when a more descriptive name is practical.

---

# 6. Constants

Constants should use descriptive names.

For constants representing fixed configuration or limits, use uppercase snake case where appropriate:

```ts
const MAX_PROJECTS_PER_SECTION = 6;
const MOBILE_BREAKPOINT = 640;
```

Avoid unexplained magic numbers.

If a number is meaningful to the design system, prefer a design token or named constant.

---

# 7. TypeScript

TypeScript should provide meaningful type safety rather than being bypassed.

Prefer explicit types for important structures:

```ts
interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}
```

Avoid:

```ts
any
```

unless there is a documented and justified reason.

Prefer:

```ts
unknown
```

when the type is genuinely unknown.

Do not use type assertions simply to silence TypeScript errors.

Fix the underlying type problem whenever practical.

---

# 8. Type and Interface Naming

Use PascalCase for:

* Interfaces
* Types
* Enums
* Component types

Examples:

```ts
interface Project {}

type SkillCategory = {};

type SocialLink = {};
```

Use descriptive names.

Avoid unnecessary generic names such as:

```ts
interface Data {}
interface Item {}
interface Info {}
```

when a domain-specific name is available.

---

# 9. File Naming

Use clear, predictable filenames.

Examples:

```text
ProjectCard.tsx
projects.ts
skills.ts
useScrollReveal.ts
```

Avoid meaningless or temporary names:

```text
temp.ts
test2.ts
newfile.tsx
final-final.tsx
abc.ts
```

Do not leave temporary implementation files in the production codebase.

---

# 10. Project Structure

Follow the architecture defined in `ARCHITECTURE.md`.

Prefer the documented structure:

```text
src/
├── components/
├── data/
├── hooks/
├── lib/
├── types/
├── styles/
├── App.tsx
└── main.tsx
```

Do not create additional architectural layers without a real requirement.

Do not create empty directories merely to match a documentation diagram.

---

# 11. React Hooks

Use hooks because they solve a real problem.

Avoid unnecessary:

* `useEffect`
* `useMemo`
* `useCallback`
* `useState`
* Custom hooks

Do not use memoization as a default optimization.

Before adding a hook, understand:

* What state or side effect it manages
* Why it is necessary
* Whether a simpler implementation exists

Avoid global state unless a genuine requirement appears.

---

# 12. State Management

Version 1 does not require a global state-management library.

Prefer:

* Component state
* Props
* Derived state
* Browser APIs
* URL/hash state where appropriate

Do not introduce Redux, Zustand, Jotai, or another global state library without a documented requirement.

---

# 13. Semantic HTML

Use semantic HTML wherever appropriate.

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

Do not use `<div>` for every structural or interactive element.

Semantic HTML should be the first accessibility mechanism.

---

# 14. Interactive Elements

Use the correct native element.

Use:

```html
<button>
```

for actions.

Use:

```html
<a>
```

for navigation.

Do not create clickable elements using:

```html
<div>
<span>
```

when a native interactive element is appropriate.

Every interactive element must be keyboard accessible.

---

# 15. Accessibility

Accessibility is part of the definition of done.

Required considerations:

* Semantic HTML
* Keyboard navigation
* Visible focus states
* Logical heading hierarchy
* Sufficient contrast
* Accessible names
* Appropriate labels
* Meaningful alt text
* Reduced-motion support
* Usable touch targets

Do not remove focus indicators without providing an accessible replacement.

Use ARIA only when native HTML semantics are insufficient.

---

# 16. Images

Every meaningful image must have appropriate alt text.

Decorative images should use:

```html
alt=""
```

Images should:

* Be appropriately sized
* Be optimized
* Avoid unnecessary resolution
* Use modern formats where practical
* Include dimensions or aspect-ratio handling where useful to reduce layout shift

Do not use fabricated project screenshots or misleading imagery.

---

# 17. CSS and Styling

Prefer:

* Design tokens
* Reusable patterns
* Component-level organization
* Responsive CSS
* CSS custom properties
* Logical properties where useful

Avoid excessive specificity.

Avoid:

```css
!important
```

unless there is a documented technical reason.

Do not scatter arbitrary colors, spacing, or typography values throughout components.

Prefer semantic variables such as:

```css
var(--color-background)
var(--color-foreground)
var(--color-accent)
var(--spacing-md)
```

---

# 18. Responsive Design

Use mobile-first CSS.

The portfolio must work across:

* Small mobile
* Large mobile
* Tablet
* Laptop
* Desktop
* Large monitors

Do not design exclusively for the developer's current screen.

Check for:

* Horizontal overflow
* Text wrapping problems
* Broken grids
* Unusable buttons
* Navigation issues
* Incorrect image sizing
* Excessive spacing
* Tiny touch targets

Detailed breakpoints are defined in `DESIGN.md`.

---

# 19. Design Consistency

Follow the design system defined in `DESIGN.md`.

Maintain consistency in:

* Typography
* Spacing
* Colors
* Borders
* Radius
* Buttons
* Icons
* Cards
* Animation
* Responsive behavior

Do not introduce a new visual language for an individual section without a clear reason.

---

# 20. Animation

Animation must be purposeful and lightweight.

Prefer:

1. CSS transitions
2. CSS animations
3. Lightweight JavaScript animation only when justified

Animation may be used for:

* Hover states
* Focus transitions
* Navigation
* Small entrance effects
* Limited scroll reveals

Avoid:

* Infinite distracting animations
* Heavy parallax
* Large particle systems
* Excessive page transitions
* Animating every element
* Continuous GPU-intensive effects

Always respect:

```css
prefers-reduced-motion
```

Do not introduce Three.js, WebGL, or 3D effects into Version 1.

---

# 21. Dependencies

Before installing a dependency, determine:

1. Is it actually required?
2. Can the browser platform solve the requirement?
3. Can existing dependencies solve it?
4. Is the package maintained?
5. What is its bundle impact?
6. Does it introduce security or maintenance risk?
7. Does it improve the project enough to justify the cost?

Do not install dependencies simply because they are popular.

Keep the dependency tree intentionally small.

---

# 22. Security

Never commit:

```text
.env
API keys
Passwords
Private tokens
Credentials
Private certificates
```

`.env.example` may contain variable names but must never contain real secrets.

Remember:

> Frontend environment variables are not automatically secret.

Never place a private API key into client-side code.

If a future feature requires a secret, it must be handled through an appropriate server-side or secure service architecture.

---

# 23. External Links

Only verified URLs may be displayed.

External links should use appropriate security attributes when opening new tabs.

For links using:

```html
target="_blank"
```

use appropriate:

```html
rel="noopener noreferrer"
```

where applicable.

Do not create placeholder URLs.

Do not create links that appear functional but lead nowhere.

---

# 24. Content Integrity

Portfolio content represents a real person and must remain factual.

Never fabricate:

* Employment
* Internships
* Employers
* Job titles
* Certifications
* Awards
* Rankings
* Project users
* Revenue
* Performance statistics
* Testimonials
* Client work
* GitHub statistics
* Skills
* Technical experience

If information is unavailable, omit it or mark it clearly for future verification.

Do not make the portfolio appear more impressive by inventing evidence.

---

# 25. Resume Rules

Until a real resume is available:

* Do not create a fake PDF.
* Do not create a placeholder download.
* Do not create a broken resume link.
* Do not claim that a resume is available.

Once a real resume exists, verify that the file opens correctly before linking it.

---

# 26. Contact Rules

Do not create fake contact functionality.

If no real email or message-delivery mechanism exists, provide only verified professional links.

A contact form may be introduced only when:

* A real submission mechanism exists.
* Input is validated appropriately.
* Errors are handled.
* Privacy/security implications are considered.

---

# 27. Error Handling

Do not silently ignore errors.

Handle appropriately:

* Failed external requests
* Missing external data
* Invalid input
* Missing assets
* Failed builds
* API failures
* Configuration errors

Optional external integrations should fail gracefully without breaking the core portfolio.

Errors should be:

* Understandable
* Recoverable where possible
* Useful for debugging
* Appropriate for the user-facing context

Do not expose sensitive internal information in production error messages.

---

# 28. Performance

Do not optimize blindly.

Measure before making performance claims.

Consider:

* Bundle size
* JavaScript execution
* Rendering cost
* Image size
* Network requests
* Layout shifts
* Animation cost
* Core Web Vitals
* Lighthouse results

Avoid premature optimization.

However, do not knowingly introduce expensive functionality when a simpler solution provides the same result.

---

# 29. SEO

Maintain basic technical SEO through:

* Accurate page title
* Accurate meta description
* Semantic HTML
* Logical headings
* Canonical URL where applicable
* Open Graph metadata
* `robots.txt`
* Sitemap where appropriate

Do not use misleading SEO content or keyword stuffing.

---

# 30. Git Rules

Commit messages should be meaningful.

Preferred format:

```text
type(scope): description
```

Examples:

```text
feat(hero): add primary portfolio CTA
fix(nav): repair mobile navigation
docs: update architecture
refactor(projects): simplify project data model
style(cards): refine project card spacing
test(projects): add project data validation
```

Avoid vague commits:

```text
update
changes
fix
final
done
new
```

Keep commits focused when practical.

---

# 31. File and Change Scope

When completing a task:

* Modify only relevant files.
* Avoid unrelated refactoring.
* Preserve existing functionality.
* Do not delete working features without justification.
* Do not rewrite the entire application for a small change.
* Do not modify project documentation unnecessarily.

If a larger change is genuinely required, explain why and document the relevant architectural decision.

---

# 32. Documentation

Documentation must remain synchronized with implementation.

When a meaningful architectural or product decision changes:

* Update the appropriate documentation.
* Add an ADR when required.
* Update `MEMORY.md` with the current state.

Do not allow documentation to describe a system that no longer exists.

---

# 33. Testing

Do not claim that tests passed unless they were actually executed.

Before completion, use the appropriate checks for the change, which may include:

* Type checking
* Linting
* Unit tests
* Component tests
* Integration tests
* Production build
* Browser testing
* Accessibility testing
* Responsive testing
* Link verification

Testing requirements are defined in `TESTING.md`.

---

# 34. Browser Verification

Where appropriate, verify the portfolio in current versions of:

* Chrome
* Edge
* Firefox
* Safari

At minimum, verify important responsive states across mobile, tablet, and desktop dimensions.

Do not assume that a layout works simply because it works on one browser or screen size.

---

# 35. Console and Build Quality

Before declaring an implementation complete:

* No unexpected console errors
* No broken imports
* No TypeScript errors
* No failed production build
* No missing assets
* No obvious broken links
* No unintended horizontal overflow

Warnings should be investigated when they indicate a real problem.

---

# 36. What Not To Do

Do not:

* Rewrite unrelated files.
* Delete existing functionality without justification.
* Introduce unnecessary frameworks.
* Add unnecessary dependencies.
* Add excessive animation.
* Add Three.js or 3D to Version 1.
* Add fake statistics.
* Add fake testimonials.
* Add fake clients.
* Add fake certifications.
* Add fabricated experience.
* Add fake project metrics.
* Add placeholder professional links.
* Commit secrets.
* Ignore accessibility.
* Ignore mobile layouts.
* Hide errors unnecessarily.
* Claim tests passed without running them.
* Optimize without measurement.
* Build infrastructure for hypothetical requirements.

---

# 37. Code Review Checklist

Before considering a task complete:

### Correctness

* [ ] Implementation behaves as intended.
* [ ] Existing functionality remains intact.
* [ ] Edge cases have been considered.

### Type Safety

* [ ] TypeScript types are meaningful.
* [ ] No unnecessary `any`.
* [ ] Type errors are resolved.

### Accessibility

* [ ] Semantic HTML is used.
* [ ] Keyboard navigation works.
* [ ] Focus states are visible.
* [ ] Contrast is appropriate.
* [ ] Images have appropriate alt text.
* [ ] Reduced motion is supported.

### Responsive Design

* [ ] Mobile layout works.
* [ ] Tablet layout works.
* [ ] Desktop layout works.
* [ ] No accidental horizontal overflow.

### Security

* [ ] No secrets committed.
* [ ] External links are handled safely.
* [ ] User input is handled appropriately where applicable.

### Performance

* [ ] No unnecessary dependency added.
* [ ] Images are optimized.
* [ ] Animation remains lightweight.
* [ ] Performance impact has been considered.

### Maintainability

* [ ] Code is readable.
* [ ] Components have focused responsibilities.
* [ ] Naming is clear.
* [ ] No unnecessary abstraction exists.
* [ ] Documentation is updated when required.

### Testing

* [ ] Relevant tests/checks were actually executed.
* [ ] Production build succeeds when applicable.
* [ ] No unexpected console errors remain.

---

# 38. Golden Rule

> **Do not make the code more complicated than the problem requires.**

Prefer:

```text
Simple
    ↓
Correct
    ↓
Accessible
    ↓
Maintainable
    ↓
Fast
    ↓
Polished
```

over:

```text
Complex
    ↓
Over-engineered
    ↓
Hard to maintain
    ↓
Visually impressive
```

The portfolio should demonstrate engineering judgment through **clarity, correctness, quality, and thoughtful implementation** rather than unnecessary complexity.
