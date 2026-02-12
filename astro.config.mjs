// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://serdarmetal.com',
  base: '/',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/en/')
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
