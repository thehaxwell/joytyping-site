import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://www.joytyping.com',
  integrations: [
    starlight({
      title: 'Joytyping',
    }),
  ],
});
