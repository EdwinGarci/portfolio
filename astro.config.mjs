// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://fidel-gt-dev.netlify.app/',
  integrations: [tailwind()],
  output: 'static',
  adapter: node({
    mode: 'standalone'
  })
});