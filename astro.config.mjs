// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://banderaskyworks.com',
  // Emit `about.html` rather than `about/index.html` so existing indexed URLs
  // (and the canonical tags / sitemap from the old static site) keep working.
  build: {
    format: 'file',
  },
  integrations: [
    sitemap({
      // The integration emits extensionless URLs; rewrite them to the
      // `.html` form the site actually serves (see build.format above)
      // so sitemap entries match the canonical tags.
      serialize(item) {
        const { pathname } = new URL(item.url);
        if (pathname !== '/' && pathname !== '') item.url = `${item.url}.html`;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
