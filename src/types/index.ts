export type ProjectCategory =
  | 'Branding'
  | 'Graphic Design'
  | 'Digital Marketing'
  | 'Web Design & Development'
  | 'Video Production'
  | 'Motion Graphics';

export interface Project {
  id: string;
  title: string;
  client: string;
  year: string;
  category: ProjectCategory;
  shortDescription: string;
  coverImage: string;
  featured: boolean;
  services: string[];
  overview: {
    client: string;
    year: string;
    services: string[];
    summary: string;
  };
  challenge: string;
  strategy: string;
  creative: string;
  execution: string;
  galleryImages: string[];
  results?: {
    verified: boolean;
    metrics?: { label: string; value: string }[];
    statement: string;
  };
}

export interface ServiceItem {
  number: string;
  title: string;
  slug: string;
  shortDescription: string;
  deliverables: string[];
  capabilities: string[];
  highlight: string;
}

export interface ProjectIntakeData {
  name: string;
  email: string;
  brand: string;
  service: string;
  description: string;
  budget: string;
  deadline: string;
  additionalInfo?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  timestamp: string;
  quickActions?: string[];
  intakeSummary?: ProjectIntakeData;
  isSubmissionCard?: boolean;
}
