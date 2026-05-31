// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Project page on GitHub Pages: https://alphamag92.github.io/Francesco_Travel
// If you move to a custom domain later: set `base: '/'` and `site: 'https://your-domain'`.
export default defineConfig({
  site: 'https://alphamag92.github.io',
  base: '/Francesco_Travel',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [react(), sitemap()],
  image: {
    // Allow the Google My Maps embed and remote covers if ever needed.
    domains: [],
  },
});
