import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import fallbackData from '../data/portfolioData.json';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || '';
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2026-07-21';

export const isSanityConfigured = !!projectId;

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;

const builder = client ? createImageUrlBuilder(client) : null;

// Helper to get url for sanity images
export function urlFor(source: any) {
  if (!builder || !source) return '';
  return builder.image(source).url();
}

export interface CertificationItem {
  title: string;
  issuer: string;
  level: string;
  icon: string;
}

export interface PortfolioData {
  siteSettings: typeof fallbackData.siteSettings;
  hero: typeof fallbackData.hero;
  about: typeof fallbackData.about;
  stats: typeof fallbackData.stats;
  skills: typeof fallbackData.skills;
  projects: typeof fallbackData.projects;
  experience: typeof fallbackData.experience;
  education: typeof fallbackData.education;
  certifications: CertificationItem[];
  services: typeof fallbackData.services;
  testimonials: typeof fallbackData.testimonials;
  socialLinks: typeof fallbackData.socialLinks;
  contact: typeof fallbackData.contact;
}

export async function fetchPortfolioData(): Promise<PortfolioData> {
  if (!client) {
    console.log('Sanity not configured, using local fallback data.');
    return fallbackData as PortfolioData;
  }

  try {
    const query = `{
      "siteSettings": *[_type == "siteSettings"][0],
      "hero": *[_type == "hero"][0],
      "about": *[_type == "about"][0],
      "stats": *[_type == "stats"] | order(_createdAt asc),
      "skills": *[_type == "skills"] | order(_createdAt asc),
      "projects": *[_type == "projects"] | order(featured desc, _createdAt desc),
      "experience": *[_type == "experience"] | order(date desc),
      "education": *[_type == "education"] | order(date desc),
      "certifications": *[_type == "certifications"] | order(_createdAt asc),
      "services": *[_type == "services"] | order(_createdAt asc),
      "testimonials": *[_type == "testimonials"] | order(_createdAt asc),
      "socialLinks": *[_type == "socialLinks"][0],
      "contact": *[_type == "contact"][0]
    }`;

    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('Sanity query timeout')), 3500)
    );

    const data: any = await Promise.race([client.fetch(query), timeoutPromise]);

    return {
      siteSettings: { ...fallbackData.siteSettings, ...(data.siteSettings || {}) },
      hero: { ...fallbackData.hero, ...(data.hero || {}) },
      about: {
        ...fallbackData.about,
        ...(data.about || {}),
        paragraphs: (data.about?.paragraphs && data.about.paragraphs.length > 0) ? data.about.paragraphs : fallbackData.about.paragraphs,
      },
      stats: (data.stats && data.stats.length > 0) ? data.stats : fallbackData.stats,
      skills: (data.skills && data.skills.length > 0) ? data.skills.map((sg: any) => ({
        ...sg,
        items: sg.items || [],
      })) : fallbackData.skills,
      projects: (data.projects && data.projects.length > 0) ? data.projects.map((proj: any) => ({
        ...proj,
        id: proj.id?.current || proj.id || 'project',
        techStack: proj.techStack || [],
        metrics: proj.metrics || [],
        image: proj.image ? urlFor(proj.image) : proj.imageUrl || '',
      })) : fallbackData.projects,
      experience: (data.experience && data.experience.length > 0) ? data.experience.map((exp: any) => ({
        ...exp,
        description: exp.description || [],
        skills: exp.skills || [],
      })) : fallbackData.experience,
      education: (data.education && data.education.length > 0) ? data.education : fallbackData.education,
      certifications: (data.certifications && data.certifications.length > 0) ? data.certifications : fallbackData.certifications,
      services: (data.services && data.services.length > 0) ? data.services : fallbackData.services,
      testimonials: (data.testimonials && data.testimonials.length > 0) ? data.testimonials : fallbackData.testimonials,
      socialLinks: { ...fallbackData.socialLinks, ...(data.socialLinks || {}) },
      contact: { ...fallbackData.contact, ...(data.contact || {}) },
    };
  } catch (error) {
    console.error('Failed to fetch from Sanity CMS, falling back to local data:', error);
    return fallbackData as PortfolioData;
  }
}
