// astro.config.mjs
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';

// basic config, nothing fancy
export default defineConfig({
  adapter: netlify(),
});
