# Portfolio Testing Strategy

This document defines the testing and verification strategy for the Rudra Bandekar personal portfolio.

The goal is to provide strong confidence in correctness, accessibility, responsiveness, performance, and production readiness without introducing unnecessary testing complexity.

Testing requirements should remain proportional to the actual application.

---

# 1. Testing Philosophy

Testing should verify **real user-facing behavior**, not implementation details for their own sake.

The preferred verification flow is:

```text id="6x0wz4"
Static Analysis
      ↓
Unit Tests
      ↓
Component Tests
      ↓
Integration Tests
      ↓
End-to-End Tests
      ↓
Accessibility Review
      ↓
Responsive / Browser Review
      ↓
Performance Review
      ↓
Production Build
      ↓
Deployment Verification
```

Not every level is required for every change.

A simple static content change does not require a complete E2E suite.

---

# 2. Testing Principles

Follow these principles:

* Test behavior rather than implementation details.
* Test important user journeys.
* Prefer simple tests with meaningful coverage.
* Do not write tests solely to increase a coverage percentage.
* Do not claim a test passed unless it was actually executed.
* Manual verification remains important for visual interfaces.
* Accessibility testing is part of normal testing.
* Responsive behavior must be verified.
* Production builds must be tested before deployment.

---

# 3. Static Analysis

The project should use appropriate static quality checks.

Expected checks may include:

* TypeScript type checking
* ESLint
* Formatting
* Build validation

Potential commands:

```bash id="i0x7pz"
npm run lint
npm run typecheck
```

The exact commands depend on the initialized project configuration.

Do not document a command as available until it actually exists in `package.json`.

---

# 4. Type Checking

TypeScript errors should be resolved before production deployment.

Check for:

* Invalid props
* Incorrect data structures
* Missing properties
* Invalid imports
* Incorrect function arguments
* Unsafe type assertions
* Unnecessary `any`

Potential command:

```bash id="5skgve"
npm run typecheck
```

If a dedicated typecheck script does not exist, use the project's configured TypeScript command.

---

# 5. Unit Testing

Unit tests should be used for meaningful pure logic.

Potential examples:

* Utility functions
* Data transformations
* Formatting functions
* Validation logic
* Small reusable calculations

Do not write unit tests for trivial JSX markup that provides no meaningful behavior.

---

# 6. Component Testing

Important interactive components should be tested where meaningful.

Potential components include:

* Navigation
* Mobile navigation menu
* Project cards
* Buttons
* Interactive UI components
* External-link behavior

Verify:

* Correct rendering
* User interaction
* Keyboard interaction
* Accessible names
* Focus behavior
* Conditional states
* Error states where applicable

## Current V1 Note

The following are **not currently required** because they are not part of the V1 product:

* Theme toggle
* Contact form
* Resume interaction

If these features are introduced later, corresponding tests should be added.

---

# 7. Integration Testing

Integration tests should verify that important pieces of the application work together.

For example:

```text id="04v6ri"
Portfolio Data
      ↓
Project Section
      ↓
Project Card
      ↓
GitHub / Live Demo Link
```

Another important flow:

```text id="rjkt6u"
Navigation
      ↓
Section Anchor
      ↓
Correct Page Section
```

Integration testing should focus on user-visible behavior.

---

# 8. End-to-End Testing

E2E testing should cover critical user journeys rather than every possible interaction.

A representative V1 flow:

```text id="mt7n0j"
Open Portfolio
      ↓
View Hero
      ↓
Navigate to Projects
      ↓
View Featured Projects
      ↓
Open Project GitHub / Live Demo
```

Another:

```text id="x1m2n3"
Open Portfolio
      ↓
Use Navigation
      ↓
Navigate to About / Skills / Education
      ↓
Navigate to Contact
      ↓
Open LinkedIn or GitHub
```

E2E tests should verify that important navigation and external-link actions work as expected.

---

# 9. Recommended Testing Tools

Potential testing stack:

## Unit / Component

**Vitest**

Suitable for lightweight JavaScript/TypeScript testing.

## React Components

**Testing Library**

Useful for testing React behavior from the user's perspective.

## End-to-End

**Playwright**

Useful for:

* Browser automation
* Responsive verification
* Navigation testing
* Cross-browser testing

Tool selection should remain proportional to project complexity.

Do not add a testing framework solely for the appearance of having more tooling.

---

# 10. Accessibility Testing

Accessibility must be tested both automatically and manually.

Check:

* Semantic HTML
* Heading hierarchy
* Keyboard navigation
* Focus order
* Focus visibility
* Accessible names
* Link purpose
* Button behavior
* Image alt text
* Color contrast
* Reduced-motion behavior
* Mobile touch usability

Potential tools:

* Lighthouse
* axe
* Browser accessibility tools
* Keyboard-only navigation

## Keyboard Test

The site should be navigable using:

```text id="w3x7t8"
Tab
Shift + Tab
Enter
Space
Escape
```

where appropriate.

No essential functionality should depend exclusively on a mouse.

---

# 11. Responsive Testing

Test the portfolio at representative viewport widths.

## Mobile

```text id="p0n5o5"
320px
375px
390px
```

## Tablet

```text id="y2v5z1"
768px
```

## Desktop

```text id="2qv3qm"
1024px
1280px
1440px
```

## Large Desktop

```text id="h8u5v6"
1920px
```

Check for:

* Horizontal overflow
* Broken grids
* Text overflow
* Incorrect spacing
* Unusable buttons
* Navigation problems
* Incorrect image scaling
* Unexpected wrapping
* Excessively large or small typography

---

# 12. Browser Testing

Verify the portfolio in current versions of:

* Chrome
* Edge
* Firefox
* Safari

Prioritize critical functionality:

* Page loading
* Navigation
* Anchor links
* Responsive layout
* Project links
* Interactive controls
* Keyboard behavior

If testing on every browser is not practical during local development, document which browsers were actually verified.

Never claim cross-browser verification that was not performed.

---

# 13. Performance Testing

Measure actual performance rather than relying on assumptions.

Review:

* Lighthouse performance
* Core Web Vitals
* Bundle size
* JavaScript execution
* Image sizes
* Network requests
* Rendering cost
* Animation performance

Important metrics include:

* **LCP — Largest Contentful Paint**
* **INP — Interaction to Next Paint**
* **CLS — Cumulative Layout Shift**

Performance should be evaluated on representative mobile and desktop conditions where practical.

---

# 14. Lighthouse Targets

The PRD defines the following targets:

```text id="bqf2a7"
Performance:      >= 90
Accessibility:    >= 90
Best Practices:   >= 90
SEO:              >= 90
```

These are targets, not guarantees.

If a target is missed:

1. Identify the actual cause.
2. Determine whether the issue materially affects users.
3. Fix reasonable issues.
4. Re-measure.
5. Document significant remaining limitations.

Do not artificially manipulate Lighthouse scores at the expense of real usability.

---

# 15. Security Testing

Verify:

* No secrets are committed.
* No private API keys are exposed.
* No credentials exist in frontend code.
* No unnecessary unsafe HTML injection exists.
* External links are handled appropriately.
* Dependencies are reviewed for known vulnerabilities.
* Future user input is validated where applicable.

Potential command:

```bash id="cw5b2n"
npm audit
```

Audit results should be interpreted rather than blindly applying potentially breaking fixes.

---

# 16. Secret Detection

Before deployment, inspect the repository for accidental secrets.

Check for:

```text id="u8cz0b"
.env
API keys
Passwords
Tokens
Credentials
Private certificates
```

`.env.example` may contain variable names but must not contain real credentials.

Public frontend configuration must not be treated as secret.

---

# 17. Production Build Testing

Before deployment, run the configured production build.

Typical command:

```bash id="1l7z0x"
npm run build
```

The build must complete successfully.

After building, verify:

* No build errors
* No missing assets
* No broken imports
* Generated files are present
* Production behavior matches development behavior where relevant

---

# 18. Preview / Production Verification

Where supported, test the production build through a local preview or deployed environment.

Typical workflow:

```text id="w8e4ub"
Build
  ↓
Preview
  ↓
Open in Browser
  ↓
Test Navigation
  ↓
Test Projects
  ↓
Test External Links
  ↓
Check Console
```

This catches issues that may not appear during development.

---

# 19. Link Testing

Verify all displayed links.

## Required V1 Links

* Navigation anchors
* GitHub profile
* LinkedIn profile
* FitTrack GitHub
* FitTrack live demo
* Python File Organizer GitHub

Memorix links should only be tested if verified links are later added.

## Conditional Links

The following should only be tested when implemented:

* Resume
* Email
* Contact form
* GitHub API links
* Blog links

No displayed link should lead to an unintended or dead destination.

---

# 20. Visual Testing

Manually inspect:

* Typography
* Spacing
* Alignment
* Section hierarchy
* Project cards
* Images
* Buttons
* Navigation
* Hover states
* Focus states
* Animation
* Mobile layout
* Desktop layout
* Dark visual consistency

The interface should match the requirements defined in:

`DESIGN.md`

Visual testing should use actual browser viewport sizes rather than relying only on a resized development window.

---

# 21. Animation Testing

Verify that:

* Animations are subtle.
* Animations do not interfere with interaction.
* Hover effects work correctly.
* Navigation transitions do not block usage.
* No unnecessary infinite animations exist.
* Performance remains acceptable.

Test reduced motion using:

```text id="v9m7sm"
prefers-reduced-motion: reduce
```

When reduced motion is enabled:

* Non-essential animation should be reduced or removed.
* Content must remain fully accessible.
* Navigation and interactions must continue working.

---

# 22. Console Testing

Check the browser console during manual verification.

Investigate:

* JavaScript errors
* Failed network requests
* Missing assets
* React warnings
* Accessibility-related warnings
* Unexpected runtime exceptions

Do not treat expected development tooling messages as application failures without context.

The production deployment should have no known critical console errors.

---

# 23. Regression Testing

After a meaningful feature or structural change:

1. Run relevant automated tests.
2. Run type checking.
3. Run linting where configured.
4. Build the application.
5. Check navigation.
6. Check affected sections.
7. Check responsive layouts.
8. Check console errors.
9. Re-test important user journeys.

The scope of regression testing should match the size and risk of the change.

---

# 24. Content Regression Testing

After changing portfolio content, verify:

* Name
* Professional title
* Education
* Skills
* Project descriptions
* Project technologies
* Project links
* GitHub
* LinkedIn
* Achievements

Ensure that:

* No information was accidentally removed.
* No fabricated information was introduced.
* No links became stale.
* No formatting issues were introduced.

---

# 25. Data Validation

Structured portfolio data should remain compatible with its TypeScript models.

Verify:

* Required fields exist.
* Optional fields are genuinely optional.
* URLs are valid where provided.
* Project technology lists are accurate.
* Empty or placeholder values are not unintentionally rendered.

If an optional resource does not exist, prefer omitting it rather than rendering a fake link.

---

# 26. Test Coverage Philosophy

Coverage percentage is not the primary success metric.

Prioritize coverage of:

* Important user journeys
* Interactive components
* Navigation
* Project data
* Utility logic
* Accessibility-critical behavior
* Error handling where applicable

Do not create large amounts of low-value tests solely to achieve an arbitrary coverage number.

---

# 27. Definition of Tested

A feature should only be described as tested when the relevant verification was actually performed.

Use precise statements such as:

```text id="t9r2sp"
Build passed.
Lint passed.
Type checking passed.
Component tests passed.
E2E tests passed.
Manual mobile verification completed.
Accessibility review completed.
```

If something was not tested, say so.

Never claim:

```text id="a2k6n0"
All tests passed.
Fully verified.
Production ready.
```

without evidence.

---

# 28. Minimum Pre-Deployment Checklist

## Build

* [ ] Production build passes.
* [ ] No TypeScript errors.
* [ ] Lint passes where configured.
* [ ] Relevant automated tests pass.

## Functionality

* [ ] Navigation works.
* [ ] Project cards render correctly.
* [ ] Project links work.
* [ ] GitHub link works.
* [ ] LinkedIn link works.
* [ ] No critical console errors.

## Responsive

* [ ] Mobile verified.
* [ ] Tablet verified.
* [ ] Desktop verified.
* [ ] Large-screen layout reviewed.
* [ ] No accidental horizontal overflow.

## Accessibility

* [ ] Keyboard navigation verified.
* [ ] Focus states verified.
* [ ] Heading hierarchy reviewed.
* [ ] Image alt text reviewed.
* [ ] Contrast reviewed.
* [ ] Reduced-motion behavior verified.

## Performance

* [ ] Lighthouse reviewed.
* [ ] Images optimized.
* [ ] Bundle size reviewed.
* [ ] Core Web Vitals considered.
* [ ] Expensive animations reviewed.

## Security

* [ ] No secrets committed.
* [ ] No API keys exposed.
* [ ] Dependencies reviewed.
* [ ] External links handled safely.

## Content

* [ ] Personal information verified.
* [ ] Project information verified.
* [ ] Education verified.
* [ ] No fabricated achievements.
* [ ] No fake statistics.
* [ ] No fake certifications.
* [ ] No fake experience.

## Conditional Features

Only when actually implemented:

* [ ] Resume verified.
* [ ] Email verified.
* [ ] Contact form verified.
* [ ] GitHub API verified.

## Deployment

* [ ] Production deployment succeeds.
* [ ] Deployed site loads correctly.
* [ ] Critical links work on the deployed site.
* [ ] Final browser review completed.

---

# 29. Testing Records

Meaningful testing results should be recorded when useful.

Example:

```text id="i6z6lq"
Date:
Change:
Environment:
Checks:
Result:
Known Issues:
```

Example:

```text id="6r3z8y"
Date: YYYY-MM-DD
Change: Initial portfolio implementation
Environment: Chrome / Desktop / Mobile
Checks:
- TypeScript
- ESLint
- Production build
- Responsive review
- Accessibility review

Result:
Passed

Known Issues:
None
```

Only record results that were actually obtained.

---

# 30. Final Testing Principle

Testing exists to provide confidence in the real product.

The objective is not to maximize the number of tests.

The objective is to ensure that the portfolio is:

```text id="h9y2sl"
Correct
  ↓
Accessible
  ↓
Responsive
  ↓
Secure
  ↓
Performant
  ↓
Maintainable
  ↓
Production Ready
```

**Never claim verification that has not actually been performed.**
