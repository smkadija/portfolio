export type ProjectCategory = 'ALL' | 'UI/UX' | 'GRAPHIC DESIGN' | 'WEB' | 'SHOPIFY';

export interface Project {
  id: string;
  title: string;
  category: 'UI/UX' | 'GRAPHIC DESIGN' | 'WEB' | 'SHOPIFY';
  categoryDisplay: string;
  oneLiner: string;
  description?: string;
  overview?: string;
  role?: string;
  tools: string[];
  thumbnail: string;
  images: string[];
  layoutSpan?: 'large' | 'standard';
  year?: string;
  behanceUrl?: string;
  githubUrl?: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ElsewhereLink {
  platform: string;
  subtitle: string;
  actionText: string;
  url: string;
}
