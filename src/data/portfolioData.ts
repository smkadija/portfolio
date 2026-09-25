import { Project, ServiceItem, ProcessStep, ElsewhereLink } from '../types';

export const PERSONAL_INFO = {
  name: 'S M KADIJA',
  shortName: 'SMK',
  title: 'UI/UX DESIGNER • WEB DEVELOPER',
  location: 'Sylhet, Bangladesh',
  locationDisplay: 'BASED IN BANGLADESH',
  worldwideDisplay: 'AVAILABLE WORLDWIDE',
  availabilityBadge: 'AVAILABLE',
  email: 'smkadija1@gmail.com',
  fiverrUrl: 'https://www.fiverr.com/sellers/smkadija',
  behanceUrl: 'https://www.behance.net/smkadija',
  githubUrl: 'https://github.com/smkadija',
  linkedinUrl: 'https://www.linkedin.com/in/smmunni/',
  profileImages: {
    main: '/images/profile/profile-main.jpg',
    about: '/images/profile/profile-about.jpg',
  }
};

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    title: 'GRAPHIC DESIGN',
    description: 'Brand visuals, social content and marketing assets.',
  },
  {
    number: '02',
    title: 'UI/UX DESIGN',
    description: 'Mobile apps, websites and digital interfaces.',
  },
  {
    number: '03',
    title: 'WEB',
    description: 'Responsive websites and front-end experiences.',
  },
  {
    number: '04',
    title: 'SHOPIFY',
    description: 'E-commerce interfaces and theme customization.',
  },
];

export const PROJECTS: Project[] = [
  // 01 — COFFEE APP
  {
    id: 'coffee-app',
    title: 'Coffee App',
    category: 'UI/UX',
    categoryDisplay: 'UI/UX DESIGN • MOBILE',
    oneLiner: 'A refined mobile coffee ordering experience focused on intuitive navigation and visual clarity.',
    tools: ['Figma', 'Design Systems', 'Prototyping'],
    thumbnail: '/images/projects/coffee-app/thumbnail.jpg',
    images: [
      '/images/projects/coffee-app/01.jpg',
      '/images/projects/coffee-app/02.jpg',
      '/images/projects/coffee-app/03.jpg',
      '/images/projects/coffee-app/04.jpg'
    ],
    layoutSpan: 'standard',
    year: '2025',
    behanceUrl: 'https://www.behance.net/smkadija',
  },

  // 02 — VPN APP
  {
    id: 'vpn-app',
    title: 'VPN App',
    category: 'UI/UX',
    categoryDisplay: 'UI/UX DESIGN • MOBILE',
    oneLiner: 'A modern mobile VPN interface designed around clarity, trust and effortless interaction.',
    tools: ['Figma', 'Mobile UI', 'Dark Mode'],
    thumbnail: '/images/projects/vpn-app/thumbnail.jpg',
    images: [
      '/images/projects/vpn-app/01.jpg',
      '/images/projects/vpn-app/02.jpg'
    ],
    layoutSpan: 'standard',
    year: '2025',
    behanceUrl: 'https://www.behance.net/smkadija',
  },

  // 03 — GRAPHIC DESIGN
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    category: 'GRAPHIC DESIGN',
    categoryDisplay: 'GRAPHIC DESIGN • VISUAL COMMUNICATION',
    oneLiner: 'Creative visual assets designed to communicate ideas, strengthen brands and engage audiences.',
    tools: ['Illustrator', 'Photoshop', 'Typography', 'Visual Design'],
    thumbnail: '/images/projects/graphic-design/thumbnail.jpg',
    images: [
      '/images/projects/graphic-design/01.jpg',
      '/images/projects/graphic-design/02.jpg',
      '/images/projects/graphic-design/03.jpg',
      '/images/projects/graphic-design/04.jpg',
      '/images/projects/graphic-design/05.jpg',
      '/images/projects/graphic-design/06.jpg',
      '/images/projects/graphic-design/07.jpg',
      '/images/projects/graphic-design/08.jpg',
      '/images/projects/graphic-design/09.jpg',
      '/images/projects/graphic-design/10.jpg',
      '/images/projects/graphic-design/11.jpg',
      '/images/projects/graphic-design/12.jpg'
    ],
    layoutSpan: 'standard',
    year: '2025',
    behanceUrl: 'https://www.behance.net/smkadija',
  },

  // 04 — BRANDING
  {
    id: 'branding',
    title: 'Branding',
    category: 'GRAPHIC DESIGN',
    categoryDisplay: 'BRANDING • VISUAL IDENTITY',
    oneLiner: 'Brand identities and visual systems developed to create clear, memorable and consistent brand experiences.',
    tools: ['Illustrator', 'Figma', 'Photoshop', 'Art Direction'],
    thumbnail: '/images/projects/branding/thumbnail.jpg',
    images: [
      '/images/projects/branding/thumbnail.jpg',
      '/images/projects/branding/01.jpg',
      '/images/projects/branding/02.jpg'
    ],
    layoutSpan: 'standard',
    year: '2025',
    behanceUrl: 'https://www.behance.net/smkadija',
  },

  // 05 — SHOPIFY
  {
    id: 'shopify',
    title: 'Shopify',
    category: 'SHOPIFY',
    categoryDisplay: 'SHOPIFY • E-COMMERCE',
    oneLiner: 'E-commerce storefront design focused on clean presentation, usability and a cohesive shopping experience.',
    tools: ['Shopify', 'Liquid', 'Figma', 'UX'],
    thumbnail: '/images/projects/shopify/thumbnail.jpg',
    images: [
      '/images/projects/shopify/01.jpg',
      '/images/projects/shopify/02.jpg'
    ],
    layoutSpan: 'standard',
    year: '2024',
    behanceUrl: 'https://www.behance.net/smkadija',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'Understand the project, goals, audience and requirements.',
  },
  {
    number: '02',
    title: 'DESIGN',
    description: 'Develop the visual direction, structure and interface.',
  },
  {
    number: '03',
    title: 'REFINE',
    description: 'Iterate, review and polish the final experience.',
  },
  {
    number: '04',
    title: 'DELIVER',
    description: 'Prepare and deliver the final design or development work.',
  },
];

export const CAPABILITIES = {
  design: [
    'Figma',
    'Illustrator',
    'Photoshop',
    'InDesign',
    'UI/UX',
    'Typography',
    'Design Systems',
  ],
  development: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'PHP',
    'Flutter',
    'Dart',
    'Firebase',
  ],
};

export const ELSEWHERE_LINKS: ElsewhereLink[] = [
  {
    platform: 'BEHANCE',
    subtitle: 'Visual work',
    actionText: 'Visual work →',
    url: PERSONAL_INFO.behanceUrl,
  },
  {
    platform: 'GITHUB',
    subtitle: 'Development',
    actionText: 'Development →',
    url: PERSONAL_INFO.githubUrl,
  },
  {
    platform: 'LINKEDIN',
    subtitle: 'Professional',
    actionText: 'Professional →',
    url: PERSONAL_INFO.linkedinUrl,
  },
  {
    platform: 'FIVERR',
    subtitle: 'Hire me',
    actionText: 'Hire me →',
    url: PERSONAL_INFO.fiverrUrl,
  },
];