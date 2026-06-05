// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://banderaskyworks.com',
  // Emit `about.html` rather than `about/index.html` so existing indexed URLs
  // (and the canonical tags / sitemap from the old static site) keep working.
  build: {
    format: 'file',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
