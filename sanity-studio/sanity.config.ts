import { defineConfig } from 'sanity';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID ?? 'your-project-id';
const dataset = process.env.SANITY_STUDIO_DATASET ?? 'production';

if (!projectId || projectId === 'your-project-id') {
  throw new Error(
    'Invalid SANITY_STUDIO_PROJECT_ID. Please set a real project ID in sanity-studio/.env (example: abc123xy).'
  );
}

export default defineConfig({
  name: 'default',
  title: 'Company Content Studio',
  projectId,
  dataset,
  plugins: [visionTool()],
  schema: {
    types: schemaTypes
  }
});
