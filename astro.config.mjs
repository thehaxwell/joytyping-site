import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import svelte from "@astrojs/svelte";
import { globalVariablesRemarkPlugin } from './global-variables-remark-plugin.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Joytyping',
      social: {
          github: 'https://github.com/thehaxwell/joytyping',
      },
    }),
    svelte()
  ],
  markdown: {
    remarkPlugins: [globalVariablesRemarkPlugin]
  }
});
