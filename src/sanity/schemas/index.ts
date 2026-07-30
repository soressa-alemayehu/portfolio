import { defineField, defineType } from 'sanity';

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'logoText', title: 'Logo Text', type: 'string' }),
    defineField({ name: 'systemStatusText', title: 'System Status Text', type: 'string' }),
    defineField({ name: 'resumeUrl', title: 'Resume PDF URL', type: 'string' }),
  ],
});

export const heroType = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Developer Name', type: 'string' }),
    defineField({ name: 'title', title: 'Professional Title', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'text' }),
    defineField({ name: 'ctaText', title: 'Primary CTA Text', type: 'string' }),
    defineField({ name: 'secondaryCtaText', title: 'Secondary CTA Text', type: 'string' }),
  ],
});

export const aboutType = defineType({
  name: 'about',
  title: 'About Section',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
    }),
    defineField({ name: 'quote', title: 'Quote Text', type: 'text' }),
  ],
});

export const statsType = defineType({
  name: 'stats',
  title: 'Statistics Item',
  type: 'document',
  fields: [
    defineField({ name: 'value', title: 'Value (e.g. 50+)', type: 'string' }),
    defineField({ name: 'label', title: 'Label', type: 'string' }),
  ],
});

export const skillsType = defineType({
  name: 'skills',
  title: 'Skills Category',
  type: 'document',
  fields: [
    defineField({ name: 'category', title: 'Category (e.g. Frontend)', type: 'string' }),
    defineField({
      name: 'items',
      title: 'Skills list',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
});

export const projectsType = defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({ name: 'id', title: 'Unique ID / Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'description', title: 'Brief Description', type: 'text' }),
    defineField({ name: 'longDescription', title: 'Detailed Case Study (Text fallback)', type: 'text' }),
    defineField({
      name: 'body',
      title: 'Formatted Rich Text Case Study (Styles, Headings, Bullets, Quotes)',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
              { title: 'Underline', value: 'underline' },
            ],
          },
        },
      ],
    }),
    defineField({ name: 'category', title: 'Category (e.g. Web, AI, Tools)', type: 'string' }),
    defineField({
      name: 'techStack',
      title: 'Technology Stack',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'image', title: 'Main Project Thumbnail Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'galleryImages',
      title: 'Additional Case Study Screenshots / Gallery (3+ Images)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'metrics',
      title: 'Key Metrics / Results',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'highlights',
      title: 'Key Architecture & Technical Highlights',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'links',
      title: 'Project Links',
      type: 'object',
      fields: [
        { name: 'live', title: 'Live Demo URL', type: 'string' },
        { name: 'github', title: 'GitHub Repo URL', type: 'string' },
      ],
    }),
    defineField({ name: 'featured', title: 'Featured Project (shows on Home)', type: 'boolean' }),
  ],
});

export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({ name: 'role', title: 'Job Title', type: 'string' }),
    defineField({ name: 'company', title: 'Company Name', type: 'string' }),
    defineField({ name: 'type', title: 'Location Type (e.g. Remote, Onsite)', type: 'string' }),
    defineField({ name: 'date', title: 'Date Range (e.g. 2022 - Present)', type: 'string' }),
    defineField({
      name: 'description',
      title: 'Bullet Points',
      type: 'array',
      of: [{ type: 'text' }],
    }),
    defineField({
      name: 'skills',
      title: 'Key Technologies',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
});

export const educationType = defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({ name: 'degree', title: 'Degree Title', type: 'string' }),
    defineField({ name: 'school', title: 'University / Institution', type: 'string' }),
    defineField({ name: 'date', title: 'Date / Graduation Year', type: 'string' }),
    defineField({ name: 'details', title: 'Details / Specialization', type: 'string' }),
    defineField({ name: 'featured', title: 'Featured Item', type: 'boolean' }),
  ],
});

export const certificationsType = defineType({
  name: 'certifications',
  title: 'Certifications',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Certification Name', type: 'string' }),
    defineField({ name: 'issuer', title: 'Issuing Body', type: 'string' }),
    defineField({ name: 'level', title: 'Level / Badge Name', type: 'string' }),
    defineField({ name: 'icon', title: 'Lucide Icon Name (e.g. shield, code, database, terminal, cpu, cloud)', type: 'string' }),
  ],
});

export const servicesType = defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Service Name', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'icon', title: 'Lucide Icon Name', type: 'string' }),
    defineField({ name: 'badge', title: 'Optional Badge (e.g. POPULAR)', type: 'string' }),
  ],
});

export const testimonialsType = defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({ name: 'quote', title: 'Quote Text', type: 'text' }),
    defineField({ name: 'stars', title: 'Stars Count (1-5)', type: 'number', validation: Rule => Rule.min(1).max(5) }),
    defineField({ name: 'name', title: 'Reviewer Name', type: 'string' }),
    defineField({ name: 'role', title: 'Reviewer Title / Role', type: 'string' }),
    defineField({ name: 'avatar', title: 'Initials (e.g. SJ)', type: 'string' }),
  ],
});

export const schemaTypes = [
  siteSettingsType,
  heroType,
  aboutType,
  statsType,
  skillsType,
  projectsType,
  experienceType,
  educationType,
  certificationsType,
  servicesType,
  testimonialsType,
];
