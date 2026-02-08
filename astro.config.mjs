// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cumaliguzel88.github.io',
  base: '/serdarmetal/',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/en/')
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
