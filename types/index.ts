// types/index.ts

export interface Service {
  id: string;
  icon: string;
  nameAr: string;
  nameEn: string;
  descAr: string;
  descEn: string;
  slug: string;
}

export interface Project {
  id: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  category: "brand" | "web" | "ecom" | "ai";
  tagAr: string;
  tagEn: string;
  gradient: string;
  emoji: string;
  client: string;
  year: string;
}

export interface Testimonial {
  id: string;
  nameAr: string;
  titleAr: string;
  textAr: string;
  initials: string;
  avatarGradient: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  questionAr: string;
  answerAr: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  details: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  titleAr: string;
  excerptAr: string;
  categoryAr: string;
  date: string;
  readTime: string;
  gradient: string;
}

export interface NavItem {
  labelAr: string;
  labelEn: string;
  href: string;
}

export interface TeamMember {
  nameAr: string;
  roleAr: string;
  roleEn: string;
  emoji: string;
  gradient: string;
  skills: string[];
}
