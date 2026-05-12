import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://interviews.networkershome.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
