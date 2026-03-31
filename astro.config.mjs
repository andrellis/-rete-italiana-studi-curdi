import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://www.reteitalianastudicurdi.it',
  output: "hybrid",
  adapter: cloudflare()
});