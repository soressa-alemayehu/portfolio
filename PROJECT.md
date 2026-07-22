# PROJECT.md

## Project Overview

Build a production-ready personal portfolio website for a Full Stack Developer. The website should showcase projects, technical skills, experience, education, services, achievements, and contact information while providing a premium user experience suitable for recruiters, hiring managers, and potential clients.

The project must be built with scalability, maintainability, accessibility, and performance in mind.

---

# Technology Stack

Frontend
- React 19
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Lucide React

CMS
- Sanity CMS

Deployment
- Cloudflare Pages

Version Control
- GitHub

Package Manager
- npm

---

# Architecture

Use a feature-based architecture instead of organizing by file type.

Example:

src/
    app/
    assets/
    components/
    features/
    hooks/
    layouts/
    pages/
    services/
    utils/
    types/

Every feature should be isolated and reusable.

---

# Content Management

All editable content must come from Sanity CMS.

Do not hardcode:

- Hero section
- About
- Skills
- Experience
- Projects
- Services
- Certifications
- Resume URL
- Testimonials
- Contact information
- Navigation
- Footer
- Social media
- SEO metadata

The frontend should fetch content dynamically.

---

# Pages

Create:

- Home
- About
- Projects
- Project Details
- Experience
- Services
- Resume
- Contact
- 404

---

# Components

Create reusable components.

Examples:

Navbar

Footer

Hero

Section Title

Buttons

Cards

Project Cards

Project Gallery

Timeline

Skills Grid

Badge

Statistics

Testimonials

Contact Form

Modal

Loading Skeleton

Empty State

Error State

Scroll Progress

Back To Top

Theme Toggle

---

# Performance

Optimize for:

- Lighthouse score above 95
- Lazy loading
- Image optimization
- Code splitting
- Tree shaking
- Responsive images

---

# Accessibility

Follow WCAG guidelines.

Include:

- Semantic HTML
- Keyboard navigation
- Proper aria labels
- Focus indicators
- Contrast compliance

---

# SEO

Implement:

- Dynamic metadata
- Open Graph
- Twitter Cards
- Structured Data
- Sitemap
- robots.txt
- Canonical URLs

---

# Animations

Use Framer Motion.

Animations should feel professional and subtle.

Examples:

- Fade
- Slide
- Stagger
- Scroll reveal
- Hover effects
- Page transitions

Avoid distracting animations.

---

# Responsive Design

Support:

Desktop

Laptop

Tablet

Mobile

---

# Sanity CMS Collections

Hero

About

Projects

Experience

Skills

Services

Education

Testimonials

Certificates

Social Links

Navigation

Footer

SEO

Site Settings

Resume

Blog (future ready)

---

# Future Scalability

Architecture should allow future addition of:

Authentication

Blog

Admin Dashboard

Analytics

Internationalization

Search

Dark Mode

Portfolio Analytics

AI Assistant

---

# Code Quality

Use:

Reusable components

Custom hooks

Clean architecture

Type safety

Meaningful naming

Maintainable folder structure

No duplicated code

No hardcoded values

---

# Deployment

Deploy using:

GitHub

Cloudflare Pages

Environment variables

Sanity Production Dataset

---

# Goal

Build a premium-quality portfolio that demonstrates modern frontend engineering practices while remaining easy to maintain through Sanity CMS.