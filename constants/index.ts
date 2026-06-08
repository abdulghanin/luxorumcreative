// constants/index.ts
import type { Service, Project, Testimonial, FAQItem, NavItem, TeamMember, BlogPost } from "@/types";

export const SITE_CONFIG = {
  name: "Luxorum Creative",
  nameAr: "لوكسوروم كريتيف",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://luxorumcreative.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@luxorumcreative.com",
  whatsapp: "+971 50 503 2186",
  whatsappUrl: "https://wa.me/971505032186",
  location: "Dubai, United Arab Emirates",
  tagline: "Premium Digital Agency for the Gulf",
  description:
    "A premium digital agency specializing in brand identity, web development, and AI solutions for businesses across the UAE and Gulf region.",
  social: {
    instagram: "https://instagram.com/luxorumcreative",
    linkedin: "https://linkedin.com/company/luxorumcreative",
    twitter: "https://twitter.com/luxorumcreative",
    behance: "https://behance.net/luxorumcreative",
  },
};

export const NAV_ITEMS: NavItem[] = [
  { labelAr: "الرئيسية",         labelEn: "Home",            href: "/" },
  { labelAr: "خدماتنا",          labelEn: "Services",        href: "/services" },
  { labelAr: "حلول الذكاء",      labelEn: "AI Solutions",    href: "/ai-solutions" },
  { labelAr: "أعمالنا",          labelEn: "Portfolio",       href: "/portfolio" },
  { labelAr: "من نحن",           labelEn: "About",           href: "/about" },
  { labelAr: "المدونة",          labelEn: "Blog",            href: "/blog" },
  { labelAr: "تواصل معنا",       labelEn: "Contact",         href: "/contact" },
];

export const SERVICES: Service[] = [
  { id: "branding",   icon: "🎨", nameAr: "الهوية البصرية",          nameEn: "Branding & Identity",       descAr: "نبني هويات بصرية قوية.",         descEn: "We build strong, cohesive visual identities that reflect your brand values and stand out in the market.",         slug: "branding" },
  { id: "logo",       icon: "✏️", nameAr: "تصميم الشعارات",           nameEn: "Logo Design",               descAr: "شعارات احترافية فريدة.",           descEn: "Unique professional logos that leave an unforgettable impression and capture the essence of your brand.",         slug: "logo-design" },
  { id: "web-design", icon: "🖌️", nameAr: "تصميم المواقع",            nameEn: "Web Design",                descAr: "تصاميم عصرية ومبتكرة.",            descEn: "Modern, innovative designs that combine visual beauty with an optimal user experience.",                          slug: "web-design" },
  { id: "web-dev",    icon: "💻", nameAr: "تطوير المواقع",             nameEn: "Web Development",           descAr: "مواقع عالية الأداء.",              descEn: "High-performance websites built with cutting-edge technologies, delivering exceptional user experiences.",          slug: "web-development" },
  { id: "ecommerce",  icon: "🛒", nameAr: "المتاجر الإلكترونية",       nameEn: "E-Commerce Development",    descAr: "متاجر تحوّل الزوار.",              descEn: "Complete online stores that convert visitors into customers and multiply your sales with smart features.",          slug: "ecommerce" },
  { id: "ai-consult", icon: "🤖", nameAr: "استشارات الذكاء الاصطناعي", nameEn: "AI Consultation",           descAr: "دمج الذكاء الاصطناعي.",             descEn: "We help you integrate AI into your operations to achieve higher efficiency and productivity.",                      slug: "ai-consultation" },
  { id: "chatbot",    icon: "💬", nameAr: "شات بوت ذكي",              nameEn: "AI Chatbots",               descAr: "روبوتات محادثة متطورة.",            descEn: "Advanced chatbots operating 24/7 in Arabic and English, improving customer experience and reducing support load.",  slug: "ai-chatbots" },
  { id: "automation", icon: "⚡", nameAr: "أتمتة الأعمال",             nameEn: "Business Automation",       descAr: "أنظمة أتمتة ذكية.",                descEn: "Smart automation systems that save time, reduce costs, and improve operational quality.",                          slug: "business-automation" },
  { id: "marketing",  icon: "📈", nameAr: "التسويق الرقمي",            nameEn: "Digital Marketing",         descAr: "حملات تسويقية مدروسة.",            descEn: "Targeted campaigns that reach your ideal audience and achieve measurable, data-driven results.",                   slug: "digital-marketing" },
];

export const PROJECTS: Project[] = [
  { id: "1", titleAr: "هوية شركة عقارية — دبي",      titleEn: "Real Estate Brand Identity — Dubai",       descAr: "هوية بصرية متكاملة لشركة عقارية فاخرة.",                                  descEn: "Complete visual identity for a luxury real estate firm including logo, color system, and marketing collateral.", category: "brand", tagAr: "هوية بصرية",      tagEn: "Brand Identity",      gradient: "linear-gradient(135deg,#1a1040,#2d1f6e)", emoji: "🏢", client: "Emirates Properties Group",    year: "2024" },
  { id: "2", titleAr: "موقع مطعم فاخر — أبوظبي",     titleEn: "Luxury Restaurant Website — Abu Dhabi",    descAr: "موقع راقٍ مع نظام حجز مدمج حقق زيادة 200% في الحجوزات.",               descEn: "Elegant website with integrated booking system achieving 200% increase in reservations.",                        category: "web",   tagAr: "تطوير ويب",        tagEn: "Web Development",      gradient: "linear-gradient(135deg,#0a1628,#163366)", emoji: "🌐", client: "Al Dhahab Restaurant",         year: "2024" },
  { id: "3", titleAr: "متجر عطور — الرياض",           titleEn: "Luxury Perfume Store — Riyadh",            descAr: "متجر إلكتروني متكامل تجاوزت مبيعاته مليون ريال في 6 أشهر.",           descEn: "Full e-commerce store achieving over 1M SAR in sales within the first 6 months.",                               category: "ecom",  tagAr: "متجر إلكتروني",    tagEn: "E-Commerce",           gradient: "linear-gradient(135deg,#1a2640,#0d4f3c)", emoji: "🛍️", client: "Bayt Al Oud Perfumes",         year: "2023" },
  { id: "4", titleAr: "شركة استشارات — الكويت",       titleEn: "Consulting Firm Website — Kuwait",         descAr: "موقع مؤسسي مع لوحة تحكم متكاملة وتقارير ديناميكية.",                  descEn: "Professional corporate website with integrated dashboard and dynamic reporting tools.",                          category: "web",   tagAr: "موقع شركة",        tagEn: "Corporate Website",    gradient: "linear-gradient(135deg,#2a1040,#6b2180)", emoji: "💼", client: "Gulf Consulting Group",        year: "2024" },
  { id: "5", titleAr: "علامة قهوة — المنامة",         titleEn: "Coffee Brand Identity — Manama",           descAr: "هوية كاملة لسلسلة مقاهي تشمل الشعار والتغليف والسوشيال ميديا.",       descEn: "Complete brand identity for a coffee chain including logo, packaging, space design, and social media.",         category: "brand", tagAr: "هوية وتغليف",      tagEn: "Brand & Packaging",    gradient: "linear-gradient(135deg,#402010,#803020)", emoji: "☕", client: "Sabah Coffee Co.",             year: "2023" },
  { id: "6", titleAr: "منصة تقنية — قطر",             titleEn: "AI SaaS Platform — Qatar",                 descAr: "منصة SaaS متكاملة لإدارة المشاريع بميزات ذكاء اصطناعي متقدمة.",       descEn: "Full-featured SaaS platform for project management with advanced AI features and real-time analytics.",         category: "ai",    tagAr: "تطبيق ذكي",        tagEn: "AI Platform",          gradient: "linear-gradient(135deg,#0a2040,#104080)", emoji: "📱", client: "TechHub Qatar",               year: "2024" },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: "1", nameAr: "محمد العبدالله",  titleAr: "Founder — Tech Company, Dubai",          textAr: "Luxorum completely transformed our brand image. The visual identity they created perfectly reflects our values, and the new website doubled our conversion rates.",           initials: "MA", avatarGradient: "linear-gradient(135deg,#6366F1,#a855f7)", rating: 5 },
  { id: "2", nameAr: "Sara Al-Mutairi", titleAr: "CEO — E-Commerce Store, Riyadh",         textAr: "The chatbot they built saves us hours of work every day. Their professionalism and communication are outstanding. I highly recommend them to every Gulf business.",           initials: "SM", avatarGradient: "linear-gradient(135deg,#10b981,#059669)", rating: 5 },
  { id: "3", nameAr: "Khalid Al-Rashid",titleAr: "Chairman — Trading Group, Kuwait",       textAr: "Our online store exceeded expectations from the very first week. The premium design and fast performance made a huge difference in customer experience and sales.",           initials: "KR", avatarGradient: "linear-gradient(135deg,#f59e0b,#d97706)", rating: 5 },
];

export const FAQ_ITEMS: FAQItem[] = [
  { id: "1", questionAr: "How long does a typical project take?",             answerAr: "Timelines vary from 2 weeks for simple design projects to 3 months for full-scale e-commerce platforms. We set a precise timeline at the start of every project and stick to it." },
  { id: "2", questionAr: "Do you offer support and maintenance after launch?", answerAr: "Yes. We offer comprehensive support and maintenance packages including security updates, content updates, and technical troubleshooting. We build long-term partnerships with our clients." },
  { id: "3", questionAr: "What payment methods do you accept?",               answerAr: "We accept bank transfers, credit cards, and local payment apps. We typically require a 50% deposit to start the project with the balance due upon delivery." },
  { id: "4", questionAr: "Do you work with clients outside the UAE?",         answerAr: "Absolutely. We serve clients across all GCC countries and the wider Arab world. We work remotely with high efficiency and constant communication to deliver on time." },
  { id: "5", questionAr: "How can I track my project progress?",              answerAr: "We use modern project management platforms that let you follow every phase, communicate directly with the team, and review and comment on designs in real time." },
  { id: "6", questionAr: "What makes Luxorum different from other agencies?", answerAr: "We combine deep technical expertise with creative design excellence and a genuine understanding of the Gulf market. Every project is treated as a strategic partnership, not just a deliverable." },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { nameAr: "Technical Director",  roleAr: "Full Stack • AI Solutions • Cloud Architecture", roleEn: "Full Stack Development, AI Solutions, Cloud Architecture", emoji: "👨‍💻", gradient: "linear-gradient(135deg,#6366F1,#a855f7)", skills: ["Next.js", "TypeScript", "Python", "AI/ML", "AWS", "PostgreSQL"] },
  { nameAr: "Creative Director",   roleAr: "Branding • Graphic Design • Social Media",       roleEn: "Branding, Graphic Design, Social Media, Client Communication", emoji: "🎨", gradient: "linear-gradient(135deg,#ec4899,#f97316)", skills: ["Figma", "Adobe Suite", "Brand Strategy", "UI/UX", "Motion Design"] },
];

export const BLOG_POSTS: BlogPost[] = [
  { id: "1", slug: "ai-business-gulf",       titleAr: "How AI Is Revolutionizing Gulf Businesses",          excerptAr: "Discover how leading companies in the UAE and Gulf are using artificial intelligence to gain unprecedented competitive advantages and scale their operations.",       categoryAr: "AI & Tech",        date: "2024-12-01", readTime: "5 min", gradient: "linear-gradient(135deg,#1a1040,#2d1f6e)" },
  { id: "2", slug: "web-design-trends-2025", titleAr: "Web Design Trends Shaping 2025",                     excerptAr: "What will define the future of user experience and digital design in the Arab world? We break down the trends every Gulf business needs to know.",                   categoryAr: "Web Design",       date: "2024-11-15", readTime: "4 min", gradient: "linear-gradient(135deg,#0a1628,#163366)" },
  { id: "3", slug: "brand-identity-importance", titleAr: "Why Brand Identity Is an Investment, Not a Cost", excerptAr: "A real-world case study of Gulf companies that multiplied their value after rebuilding their visual identity with Luxorum Creative.",                                categoryAr: "Branding",         date: "2024-10-30", readTime: "6 min", gradient: "linear-gradient(135deg,#1a2640,#0d4f3c)" },
];
