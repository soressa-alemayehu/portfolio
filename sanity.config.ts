import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemas';

export default defineConfig({
  name: 'portfolio-cms',
  title: 'DevEngine AI Portfolio CMS',

  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'mock-id',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  basePath: '/studio',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
