import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tina from "./tina/tina.js";
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [
    react(),
    tina(),
    mdx(),
  ],
});
