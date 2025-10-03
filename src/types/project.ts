
export type Project = {
  slug: string;
  name: string;
  description: string;         
  summary?: string;             
  highlights?: string[];        
  technologies: string[];
  images: { src: string; alt: string }[];
  liveUrl?: string;
  repoUrl?: string;
  extra?: {
    credentials?: {
      admin?: { user: string; pass: string };
      operador?: { user: string; pass: string };
    };
  };
};

