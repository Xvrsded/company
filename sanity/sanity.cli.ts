const defineCliConfig = <T>(config: T): T => config;

const projectId = process.env.SANITY_STUDIO_PROJECT_ID ?? '<your-project-id>';
const dataset = process.env.SANITY_STUDIO_DATASET ?? 'production';

export default defineCliConfig({
  api: {
    projectId,
    dataset
  }
});
