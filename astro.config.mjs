import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Joytyping',
    social: {
        github: 'https://github.com/thehaxwell/joytyping',
    },
  }), svelte()]
});
