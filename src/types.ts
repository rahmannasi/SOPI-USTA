export type Language = 'tr' | 'fa' | 'en';

export interface ServiceRequest {
  language: Language;
  service: string;
  problem: string;
  description: string;
  area: string;
  address: string;
  name: string;
  phone: string;
  createdAt: string;
}

export interface ProblemCategory {
  id: string;
  name: {
    tr: string;
    fa: string;
    en: string;
  };
  subOptions: {
    tr: string[];
    fa: string[];
    en: string[];
  };
  iconName: string;
}
