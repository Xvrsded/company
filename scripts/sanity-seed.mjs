import { spawn } from 'node:child_process';

const datasetArg = process.argv[2];
const dataset = datasetArg || process.env.SANITY_DATASET || 'production';
const seedFile = './sanity/seed/companyContent.ndjson';

const command = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const args = ['sanity', 'dataset', 'import', seedFile, dataset, '--replace'];

const child = spawn(command, args, {
  stdio: 'inherit',
  shell: false
});

child.on('exit', (code) => {
  process.exit(code ?? 1);
});

child.on('error', (error) => {
  console.error('Failed to run Sanity seed import:', error.message);
  process.exit(1);
});
