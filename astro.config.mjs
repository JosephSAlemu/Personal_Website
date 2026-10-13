import { defineConfig } from 'astro/config';

export default defineConfig({
  // Change this to your real domain once it's live.
  // It is only used for sitemap/canonical URLs.
  site: 'https://www.josephalemu.com',

  // Writes /skills/index.html instead of /skills.html
  // GoDaddy's Apache server serves these cleanly at /skills
  build: { format: 'directory' },

  markdown: {
    // Two syntax-highlighting themes, switched by CSS so code blocks
    // match whichever mode the visitor is in.
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
      wrap: false,
    },
  },
});
