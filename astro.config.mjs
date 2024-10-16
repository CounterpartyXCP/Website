import { defineConfig } from 'astro/config';
import tina from "./tina/tina.js";
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

export default defineConfig({
  integrations: [react(), tina(), mdx(), tailwind(), icon()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/styles/global.css";`
        }
      }
    }
  }
});