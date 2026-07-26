import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
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

const builder = client ? imageUrlBuilder(client) : null;

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

    const data = await client.fetch(query);

    return {
      siteSettings: data.siteSettings || fallbackData.siteSettings,
      hero: data.hero || fallbackData.hero,
      about: data.about || fallbackData.about,
      stats: data.stats && data.stats.length > 0 ? data.stats : fallbackData.stats,
      skills: data.skills && data.skills.length > 0 ? data.skills : fallbackData.skills,
      projects: data.projects && data.projects.length > 0 ? data.projects.map((proj: any) => ({
        ...proj,
        image: proj.image ? urlFor(proj.image) : proj.imageUrl || '',
      })) : fallbackData.projects,
      experience: data.experience && data.experience.length > 0 ? data.experience : fallbackData.experience,
      education: data.education && data.education.length > 0 ? data.education : fallbackData.education,
      certifications: data.certifications && data.certifications.length > 0 ? data.certifications : fallbackData.certifications,
      services: data.services && data.services.length > 0 ? data.services : fallbackData.services,
      testimonials: data.testimonials && data.testimonials.length > 0 ? data.testimonials : fallbackData.testimonials,
      socialLinks: data.socialLinks || fallbackData.socialLinks,
      contact: data.contact || fallbackData.contact,
    };
  } catch (error) {
    console.error('Failed to fetch from Sanity CMS, falling back to local data:', error);
    return fallbackData as PortfolioData;
  }
}
