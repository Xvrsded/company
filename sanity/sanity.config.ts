import { schemaTypes } from './schemaTypes';

const defineConfig = <T>(config: T): T => config;
const visionTool = () => ({ name: 'vision' });

const projectId = process.env.SANITY_STUDIO_PROJECT_ID ?? '<your-project-id>';
const dataset = process.env.SANITY_STUDIO_DATASET ?? 'production';

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
