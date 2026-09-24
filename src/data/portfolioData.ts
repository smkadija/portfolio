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
  {
    id: 'coffee-app',
    title: 'Coffee App',
    category: 'UI/UX',
    categoryDisplay: 'UI/UX DESIGN · MOBILE',
    oneLiner: 'Premium coffee ordering experience.',
    tools: ['Figma', 'Design Systems', 'Prototyping'],
    thumbnail: '/images/projects/coffee-app/thumbnail.jpg',
    images: [
      '/images/projects/coffee-app/01.jpg',
      '/images/projects/coffee-app/02.jpg'
    ],
    layoutSpan: 'standard',
    year: '2025',
    behanceUrl: 'https://www.behance.net/smkadija',
  },
  {
    id: 'smart-city',
    title: 'Smart City Traffic Visualizer',
    category: 'WEB',
    categoryDisplay: 'WEB · INTERACTIVE VISUALIZATION',
    oneLiner: 'Interactive traffic visualization built with Python, PyOpenGL and GLUT.',
    tools: ['Python', 'PyOpenGL', 'GLUT', 'Figma'],
    thumbnail: '/images/projects/smart-city/thumbnail.jpg',
    images: [
      '/images/projects/smart-city/01.jpg',
      '/images/projects/smart-city/02.jpg'
    ],
    layoutSpan: 'standard',
    year: '2025',
    githubUrl: 'https://github.com/smkadija',
  },
  {
    id: 'my-lu',
    title: 'My LU',
    category: 'UI/UX',
    categoryDisplay: 'MOBILE APP · UI',
    oneLiner: 'University campus application concept built with Flutter, Dart and Firebase.',
    tools: ['Flutter', 'Dart', 'Firebase', 'Figma'],
    thumbnail: '/images/projects/my-lu/thumbnail.jpg',
    images: [
      '/images/projects/my-lu/01.jpg',
      '/images/projects/my-lu/02.jpg'
    ],
    layoutSpan: 'standard',
    year: '2024',
    githubUrl: 'https://github.com/smkadija',
  },
  {
    id: 'vpn-app',
    title: 'VPN App',
    category: 'UI/UX',
    categoryDisplay: 'UI/UX DESIGN · MOBILE',
    oneLiner: 'Modern VPN mobile interface focused on clarity, trust and easy interaction.',
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
  {
    id: 'zyra',
    title: 'ZYRA',
    category: 'GRAPHIC DESIGN',
    categoryDisplay: 'BRANDING · FASHION',
    oneLiner: 'Fashion brand identity and digital visual direction.',
    tools: ['Figma', 'Illustrator', 'Art Direction'],
    thumbnail: '/images/projects/zyra/thumbnail.jpg',
    images: [
      '/images/projects/zyra/01.jpg',
      '/images/projects/zyra/02.jpg',
      '/images/projects/zyra/03.jpg'
    ],
    layoutSpan: 'standard',
    year: '2025',
    behanceUrl: 'https://www.behance.net/smkadija',
  },
  {
    id: 'shopify-the-bag-bureau',
    title: 'Shopify / The Bag Bureau',
    category: 'SHOPIFY',
    categoryDisplay: 'SHOPIFY · E-COMMERCE',
    oneLiner: 'Luxury goods storefront design and theme customization.',
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
  {
    id: 'weather-app',
    title: 'Weather App',
    category: 'WEB',
    categoryDisplay: 'WEB DEVELOPMENT',
    oneLiner: 'Responsive weather application with dynamic meteorological metrics.',
    tools: ['JavaScript', 'REST APIs', 'CSS3 / Tailwind'],
    thumbnail: '/images/projects/weather-app/thumbnail.jpg',
    images: [
      '/images/projects/weather-app/01.jpg',
      '/images/projects/weather-app/02.jpg'
    ],
    layoutSpan: 'standard',
    year: '2024',
    githubUrl: 'https://github.com/smkadija',
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    category: 'GRAPHIC DESIGN',
    categoryDisplay: 'GRAPHIC DESIGN · ASSETS',
    oneLiner: 'Curated visual identity, social content and branded assets.',
    tools: ['Illustrator', 'Photoshop', 'Typography'],
    thumbnail: '/images/projects/graphic-design/thumbnail.jpg',
    images: [
      '/images/projects/graphic-design/01.jpg',
      '/images/projects/graphic-design/02.jpg'
    ],
    layoutSpan: 'standard',
    year: '2025',
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
    description: 'Prepare and deliver the final design/development work.',
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
