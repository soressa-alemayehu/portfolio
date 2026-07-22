import { createClient } from '@sanity/client';
import fallbackData from '../src/data/portfolioData.json' assert { type: 'json' };

const projectId = process.env.VITE_SANITY_PROJECT_ID || 'owmhbk6u';
const dataset = process.env.VITE_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_TOKEN;

if (!token) {
  console.error('Error: SANITY_API_TOKEN is required to run the seed script.');
  console.log('You can generate an API Token in your Sanity project management dashboard: https://www.sanity.io/manage');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2026-07-21',
  token,
  useCdn: false,
});

async function seed() {
  console.log(`Starting content import to Sanity project "${projectId}" (dataset: "${dataset}")...`);

  try {
    // 1. Site Settings
    console.log('Uploading siteSettings...');
    await client.createOrReplace({
      _id: 'siteSettings',
      _type: 'siteSettings',
      ...fallbackData.siteSettings,
    });

    // 2. Hero
    console.log('Uploading hero...');
    await client.createOrReplace({
      _id: 'hero',
      _type: 'hero',
      ...fallbackData.hero,
    });

    // 3. About
    console.log('Uploading about...');
    await client.createOrReplace({
      _id: 'about',
      _type: 'about',
      ...fallbackData.about,
    });

    // 4. Social Links
    console.log('Uploading socialLinks...');
    await client.createOrReplace({
      _id: 'socialLinks',
      _type: 'socialLinks',
      ...fallbackData.socialLinks,
    });

    // 5. Contact
    console.log('Uploading contact...');
    await client.createOrReplace({
      _id: 'contact',
      _type: 'contact',
      ...fallbackData.contact,
    });

    // 6. Stats
    console.log('Uploading stats...');
    for (const [idx, stat] of fallbackData.stats.entries()) {
      await client.createOrReplace({
        _id: `stat-${idx}`,
        _type: 'stats',
        ...stat,
      });
    }

    // 7. Skills
    console.log('Uploading skills...');
    for (const [idx, skillGroup] of fallbackData.skills.entries()) {
      await client.createOrReplace({
        _id: `skill-${idx}`,
        _type: 'skills',
        ...skillGroup,
      });
    }

    // 8. Projects
    console.log('Uploading projects...');
    for (const proj of fallbackData.projects) {
      await client.createOrReplace({
        _id: `project-${proj.id}`,
        _type: 'projects',
        id: { _type: 'slug', current: proj.id },
        title: proj.title,
        tagline: proj.tagline,
        description: proj.description,
        longDescription: proj.longDescription,
        category: proj.category,
        techStack: proj.techStack,
        metrics: proj.metrics,
        links: proj.links,
        featured: proj.featured,
      });
    }

    // 9. Experience
    console.log('Uploading experience...');
    for (const [idx, exp] of fallbackData.experience.entries()) {
      await client.createOrReplace({
        _id: `experience-${idx}`,
        _type: 'experience',
        ...exp,
      });
    }

    // 10. Education
    console.log('Uploading education...');
    for (const [idx, edu] of fallbackData.education.entries()) {
      await client.createOrReplace({
        _id: `education-${idx}`,
        _type: 'education',
        ...edu,
      });
    }

    // 11. Certifications
    console.log('Uploading certifications...');
    for (const [idx, cert] of fallbackData.certifications.entries()) {
      await client.createOrReplace({
        _id: `cert-${idx}`,
        _type: 'certifications',
        ...cert,
      });
    }

    // 12. Services
    console.log('Uploading services...');
    for (const [idx, srv] of fallbackData.services.entries()) {
      await client.createOrReplace({
        _id: `service-${idx}`,
        _type: 'services',
        ...srv,
      });
    }

    console.log('✅ Content seeding completed successfully!');
  } catch (err) {
    console.error('Failed to seed Sanity database:', err);
  }
}

seed();
