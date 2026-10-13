// ============================================================
//  PROJECTS DATA
//  Two lists: `software` and `art`. The Projects page shows
//  software by default, with a button to switch to 3D art.
//
//  The filter dropdowns build themselves from whatever you
//  write here — add a new language or tool to a project and it
//  appears in the dropdown automatically.
// ============================================================

export type SoftwareProject = {
  title: string;
  date: string;
  meta?: string;
  href?: string | null;
  /** Programming languages only */
  languages: string[];
  /** Frameworks, libraries, databases, software */
  tools: string[];
  /** One string per paragraph */
  body: string[];
};

export type Media =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; poster?: string; alt: string };

export type ArtProject = {
  title: string;
  date: string;
  meta?: string;
  href?: string | null;
  /** Software you used: Blender, ZBrush, Maya, Substance Painter… */
  tools: string[];
  /** What you actually did: Sculpting, Retopology, Weight painting… */
  skills: string[];
  body: string[];
  /** Images and videos. Put the files in public/art/ */
  media: Media[];
  /** Optional media width: 'small' | 'medium' (default) | 'large' */
  size?: 'small' | 'medium' | 'large';
};

// ------------------------------------------------------------
//  SOFTWARE
// ------------------------------------------------------------

export const software: SoftwareProject[] = [
  {
    title: 'HPC AI Agents',
    date: '2026',
    meta: 'Project',
    href: 'https://github.com/JosephSAlemu/FULL-MAW',
    languages: ['Python', 'Bash'],
    tools: ['LangChain', 'PBS Pro', 'Intel MPI', 'academy-agents', 'FastMCP', 'Parsl'],
    body: [
      'Orchestrated a multi-agent workflow in Python on RHEL Linux using academy-agents, PBS Pro, Intel MPI, LangChain, FastMCP, and Parsl, running parallel, distributed agents across nodes of Aurora, an exascale supercomputer.',
      'The workflow abstracts away the technical details, so non-technical researchers can run HPC jobs themselves.',
    ],
  },
  {
    title: 'STL Implementation',
    date: '2026',
    meta: 'Project',
    href: 'https://github.com/cpp-stl/stl',
    languages: ['C++'],
    tools: ['CMake', 'Valgrind', 'GoogleTest'],
    body: [
      'Implemented the STL containers vector, string, and their iterators against the standard library specification.'
    ],
  },
  {
    title: 'CUDA Triangle Stripping',
    date: '2026',
    meta: 'Project',
    href: '',
    languages: ['C++'],
    tools: ['CUDA', 'NVIDIA Nsight Compute'],
    body: ['Wrote CUDA kernels to perform triangle stripping on 3D models.'],
  },
  {
    title: 'CUDA Image Detection',
    date: '2026',
    meta: 'Project',
    href: '',
    languages: ['C++'],
    tools: ['CUDA', 'NVIDIA Nsight Compute'],
    body: [
      'Parallelized sections of a C++ image processing tool using CUDA.',
      'CUDA: wrote kernels for blurring, dilation, erosion, and binarization, using shared memory to cache image regions that had already been read.',
      'Benchmarking: compared the CUDA kernel times against the original CPU times, then used NVIDIA Nsight Compute to find the most efficient kernel configuration for my GPU architecture.'
    ],
  },
  {
    title: 'AI Agent Testing Tool',
    date: '2026',
    meta: 'Project',
    href: '',
    languages: ['Java'],
    tools: ['Maven', 'JUnit 5', 'FastMCP', 'GitHub Actions'],
    body: [
      'Built an AI agent workflow that writes unit and integration tests for an existing codebase, using MCP tools and skill files.',
    ],
  },
  {
    title: 'OWL2 Ontology Parser',
    date: '2026',
    meta: 'DePaul University — Research assistant',
    href: null,
    languages: ['Java'],
    tools: [],
    body: [
      'Built a tool that parses the OWL2 ontology format and converts it into the custom ontology format used by our compiler’s knowledge base.',
    ],
  },
  {
    title: 'ML MouseBrain',
    date: '2025',
    meta: 'Motorola Solutions — Research assistant',
    href: 'https://github.com/JosephSAlemu/MLMouseBrain',
    languages: ['Python'],
    tools: ['scikit-learn', 'NumPy', 'Pandas'],
    // NOTE: this description was duplicated from SocioApp in the version
    // you sent, so I replaced it with a summary drawn from your ICBCB
    // paper. Expand it with the actual methods you used.
    body: [
      'Machine learning work mapping the medullary reticular formation in the developing mouse brain, to help uncover the neural control of orofacial behaviors. This research became my first-author ICBCB 2026 paper.',
    ],
  },
  {
    title: 'SocioApp',
    date: '2025',
    meta: 'Project',
    href: null,
    languages: ['Python', 'JavaScript', 'SQL'],
    tools: ['Django', 'Docker Compose', 'scikit-learn'],
    body: [
      'Worked with a team to build a full-stack application that predicts gentrification in Chicago. I scraped permit data, median income, crime rates, and other features from the Chicago Data Portal and other city government sites, then cleaned and normalized the data and fed it into a linear regression model.',
      'Frontend: integrated the Google Maps UI into the site, with custom markers.',
      'Backend: in Django, set up the REST API, the core logic, the database design, and containerization with Docker Compose.'
    ],
  },
  {
    title: 'Java Order Matching System',
    date: '2024',
    meta: 'Project',
    href: 'https://github.com/JosephSAlemu/Java-Trading-System',
    languages: ['Java'],
    tools: [],
    body: ['Built an order matching system in Java using common object-oriented design patterns, with error handling throughout.'],
  },
  {
    title: 'Foreign Exchange Trading Tool',
    date: '2024',
    meta: 'Northern Trust Hackathon',
    href: null,
    languages: ['Python', 'JavaScript'],
    tools: ['Django', 'React'],
    body: ['Built a website that displays live foreign exchange conversion rates.'],
  },
  {
    title: 'Merchant Revenue Forecasting',
    date: '2024',
    meta: 'Arifpay — Data science internship',
    href: null,
    languages: ['Python', 'SQL'],
    tools: ['MySQL', 'Pandas', 'statsmodels'],
    body: ['Extracted and cleaned thousands of transactions from Arifpay’s POS tool using MySQL and Pandas, then applied time-series methods (an ARIMA model) to the historical data to forecast merchant profit and inform Arifpay’s pricing decisions.'],
  },
  {
    title: 'Alpha-Beta Pruning',
    date: '2024',
    meta: 'Project',
    href: null,
    languages: ['Java'],
    tools: [],
    body: ['Used alpha-beta pruning to find the best move in a game of tic-tac-toe.'],
  },
  {
    title: 'Gymtelligent',
    date: '2023',
    meta: '1871 Hackathon',
    href: null,
    languages: ['JavaScript'],
    tools: ['Next.js', 'ChatGPT Plugins API'],
    body: [
      'Built an app with a friend to help users track gym workouts, as alpha testers for ChatGPT plugins. The plugin feature was later scrapped by OpenAI.',
    ],
  },
  {
    title: 'SentimentSolved',
    date: '2023',
    meta: 'IIT HackRTC',
    href: 'https://github.com/jia-seed/sentimentsolved',
    languages: ['JavaScript', 'Python'],
    tools: ['Next.js', 'Three.js', 'Tailwind CSS', 'HTML', 'Flask', 'TensorFlow', 'Blender'],
    body: [
      'Worked in a team of 6 to build a computer vision tool that analyzes facial expressions, aiding people with social-emotional agnosia during real-time conversation.',
      'Frontend: built the homepage UI in Next.js, and modeled a 3D asset displayed through Three.js (eventually cut).',
    ],
  },
  {
    title: 'Alice Maze',
    date: '2023',
    meta: 'UChicago Uncommon Hacks',
    href: null,
    languages: ['C#'],
    tools: ['Unity', 'Blender', 'Substance Painter'],
    body: [
      'An Alice in Wonderland themed maze game.',
      'Game development: wrote the core logic for coin collection and character collision.',
      '3D modeling: modeled every character and the full environment from scratch.',
    ],
  },
  {
    title: 'Attorney Consultation Microservice',
    date: '2023',
    meta: 'Lex Nimble Solutions — SWE internship',
    href: null,
    languages: ['Java', 'JavaScript', 'SQL'],
    tools: ['Spring Boot', 'Hibernate ORM', 'MySQL', 'Next.js', 'Tailwind CSS', 'HTML', 'Postman'],
    body: [
      'Full-stack work alongside a senior software engineer.',
      'Diagrams: designed the sequence and entity-relationship diagrams defining how attorneys, the calendar, and users relate to each other.',
      'Backend: built the core business logic in Spring Boot, connected to MySQL through Hibernate ORM.',
      'Frontend: built the UI in Next.js and wrote the REST endpoints so users could submit consultation requests.',
      'Testing: exercised the endpoints in Postman to confirm they reject malformed input.',
    ],
  },
];

// ------------------------------------------------------------
//  3D ART
//  Replace the placeholder media with your own renders.
//  Images: public/art/your-render.jpg  ->  '/art/your-render.jpg'
//  Video:  public/art/turntable.mp4    ->  '/art/turntable.mp4'
// ------------------------------------------------------------

export const art: ArtProject[] = [
  {
    title: 'Gun Guitar',
    date: '2026',
    meta: 'Personal model',
    href: null,
    tools: ['ZBrush', 'Blender'],
    skills: ['Hard-surface modeling', 'Retopology'],
    body: [
      'Built a high-resolution version of the guitar, handled the booleans and mesh cleanup in ZBrush, then retopologized it in Blender.',
    ],
    media: [{ type: 'image', src: '/art/guitar.jpg', alt: 'Gun guitar model, front view' }],
  },
];

// ------------------------------------------------------------
//  Helper: collect every unique value for a field, sorted.
//  Used to populate the filter dropdowns.
// ------------------------------------------------------------

export function optionsFor<T>(items: T[], key: keyof T): string[] {
  const all = items.flatMap((item) => (item[key] as unknown as string[]) ?? []);
  return [...new Set(all)].sort((a, b) => a.localeCompare(b));
}
