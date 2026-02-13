export interface Social {
  name: string;
  url: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description?: string;
  tags?: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  name: string;
  description: string;
  tech?: string[];
  url?: string;
  github?: string;
}

export interface Education {
  degree: string;
  school: string;
  year: string;
}

export interface CVData {
  name: string;
  title: string;
  email: string;
  location?: string;
  bio?: string;
  socials?: Social[];
  experience?: Experience[];
  skills?: SkillGroup[];
  projects?: Project[];
  education?: Education[];
}
