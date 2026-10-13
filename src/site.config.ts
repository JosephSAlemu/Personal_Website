// ============================================================
//  EDIT THIS FILE TO CHANGE YOUR SITE
//  This is the only file you need to touch for the header,
//  your profile card, and the badges on the home page.
// ============================================================

/**
 * HEADER LINKS
 * ------------
 * Add or remove items here and the header updates everywhere.
 *
 * To ADD a page:
 *   1. Add a line below, e.g. { label: 'Teaching', href: '/teaching' }
 *   2. Create the matching file: src/pages/teaching.astro
 *      (copy an existing one like src/pages/awards.astro and edit it)
 *
 * To REMOVE a page:
 *   1. Delete its line below
 *   2. Delete its file from src/pages/
 *
 * For an external link, add `external: true`.
 */
export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Awards', href: '/awards' },
  { label: 'Publications', href: '/publications' },
  { label: 'Books', href: '/books' },
  { label: 'Blogs', href: '/blog' },
];

/**
 * YOUR DETAILS
 * ------------
 * Used on the home page and in the browser tab.
 */
export const profile = {
  name: 'Joseph Alemu',
  // Shown in the browser tab after the page name
  siteName: 'Joseph Alemu',
  role: 'Computer Science Master’s Student @ UChicago',
  // Small logo shown next to the role line. Set to null to hide it.
  roleLogo: { src: '/images/uchicago.svg', alt: 'University of Chicago' },
  focus: 'High-Performance Computing',
  email: 'alemu.s.joseph@gmail.com',

  // Profile picture. Drop your image in public/images/ and point to it.
  // Set to null to show your initials in the circle instead.
  avatar: '/images/headshot.jpg',

  // The bold lines under your name in the left card
  cardTags: ['Software Engineer'],

  // Footer links. Remove any you don't want.
  social: [
    { label: 'GitHub', href: 'https://github.com/JosephSAlemu' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jalemu/' },
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=TRZp1rQAAAAJ&hl=en&oi=sra' },
  ],
};

/**
 * BADGE ROWS on the home page
 * --------------------------
 * Each row is a label plus a list of pills.
 * A pill can show a logo (`logo`), text (`label`), or both.
 */
export const badgeRows = [
  {
    label: 'Research:',
    items: [
      { label: 'DePaul', logo: '/images/depaul.png', href: null },
      { label: 'Motorola Solutions', logo: '/images/motorola.svg', href: null },
      { label: 'Argonne', logo: '/images/argonne.svg', href: null },
    ],
  },
  {
    label: 'Internships:',
    items: [
      { label: 'Arifpay', logo: '/images/arifpay.png', href: null },
      { label: 'Lex Nimble', logo: '/images/lex.png', href: null },
    ],
  },
];

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};
