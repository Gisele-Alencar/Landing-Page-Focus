export type ActivePage = 
  | 'home' 
  | 'cursos' 
  | 'projetos' 
  | 'eventos' 
  | 'comunidade' 
  | 'galeria' 
  | 'artigos' 
  | 'store'
  | 'Loja Focus'
  | 'como-participar'
  | 'faq'
  | 'sobre'
  | 'focus-tecnologia'
  | 'contato';

export interface Course {
  id: string;
  title: string;
  category: 'Frontend' | 'Backend' | 'DevOps' | 'UI/UX' | 'Mobile' | 'Cibersegurança';
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  duration: string;
  instructor: string;
  description: string;
  topics: string[];
  enrolledStudents: number;
  rating: number;
  featured?: boolean;
}

export interface ProjectSquad {
  id: string;
  title: string;
  status: 'EM FORMAÇÃO' | 'EM DESENVOLVIMENTO' | 'CONCLUÍDO';
  description: string;
  stack: string[];
  openRoles: { role: string; count: number }[];
  currentMembers: number;
  totalSlots: number;
  leader: string;
  stage: string;
  durationWeeks: number;
  deliverables: string[];
}

export interface CommunityEvent {
  id: string;
  title: string;
  type: 'Hackathon' | 'Demo Day' | 'Workshop' | 'Tech Talk';
  date: string;
  time: string;
  location: string;
  speaker: string;
  speakerRole: string;
  description: string;
  registeredCount: number;
  maxCapacity: number;
  isRegistered?: boolean;
}

export interface CommunityTopic {
  id: string;
  title: string;
  author: string;
  authorAvatar: string;
  category: 'Dúvidas' | 'Showcase' | 'Vagas de Squad' | 'Dicas';
  repliesCount: number;
  likesCount: number;
  timeAgo: string;
  solved?: boolean;
}

export interface GalleryProject {
  id: string;
  title: string;
  squadName: string;
  description: string;
  metrics: string;
  tags: string[];
  deliveredDate: string;
  demoUrl: string;
  githubUrl: string;
  linkedinUrl?: string;
  starsCount: number;
  upvoted?: boolean;
  team: { name: string; role: string }[];
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  authorRole: string;
  readTime: string;
  date: string;
  category: string;
  claps: number;
  tags: string[];
}

export interface StoreItem {
  id: string;
  name: string;
  priceBrl: number;
  focusCoins: number;
  category: 'Vestuário' | 'Acessórios' | 'Hardware' | 'Benefícios';
  description: string;
  inStock: boolean;
  sizes?: string[];
  badge?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StepJourney {
  id: string;
  stepNumber: string;
  shortTitle: string;
  title: string;
  lead: string;
  description: string;
  actionHint: string;
  checklist: string[];
}
