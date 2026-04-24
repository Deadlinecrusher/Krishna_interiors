import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─────────────────────────────────────────────────────────────────────────────
// PORTFOLIO PROJECTS
// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD YOUR OWN PROJECT PHOTOS:
//   1. Put your photo in the /public/projects/ folder
//      e.g. /public/projects/sharma-living-room.jpg
//   2. Change the `image` field to: '/projects/sharma-living-room.jpg'
//   3. Update `name`, `type`, `location`, `category` to match your project
//   4. Run `npm run build` — done!
//
// Tip: Use photos that are at least 1000px wide for best quality.
// ─────────────────────────────────────────────────────────────────────────────

export type Project = {
  id: number;
  name: string;
  type: string;
  location: string;
  image: string;        // path like '/projects/my-photo.jpg' or a URL
  category: 'residential' | 'commercial' | 'kitchen' | 'turnkey';
  featured?: boolean;   // show larger in portfolio grid
  year?: string;        // e.g. '2024'
  area?: string;        // e.g. '1,800 sq ft'
};

export const portfolio: Project[] = [
  {
    id: 1,
    name: 'The Sharma Residence',
    type: 'Living Room',
    location: 'Ghaziabad',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1000&q=80',
    category: 'residential',
    featured: true,
    year: '2024',
    area: '2,200 sq ft',
  },
  {
    id: 2,
    name: 'Malhotra Villa Kitchen',
    type: 'Modular Kitchen',
    location: 'Delhi NCR',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1000&q=80',
    category: 'kitchen',
    year: '2024',
    area: '320 sq ft',
  },
  {
    id: 3,
    name: 'Arora Master Suite',
    type: 'Bedroom',
    location: 'Noida',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1000&q=80',
    category: 'residential',
    year: '2023',
  },
  {
    id: 4,
    name: 'TechVenture HQ',
    type: 'Commercial Office',
    location: 'Gurugram',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=80',
    category: 'commercial',
    year: '2023',
    area: '4,500 sq ft',
  },
  {
    id: 5,
    name: 'Luxury Spa Bathroom',
    type: 'Bathroom',
    location: 'Delhi',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1000&q=80',
    category: 'residential',
    year: '2024',
  },
  {
    id: 6,
    name: 'Gupta Family Home',
    type: 'Full Turnkey',
    location: 'Indirapuram',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=1000&q=80',
    category: 'turnkey',
    featured: true,
    year: '2024',
    area: '3,100 sq ft',
  },
  {
    id: 7,
    name: 'Modern Study Room',
    type: 'Study & Library',
    location: 'Noida',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1000&q=80',
    category: 'residential',
    year: '2023',
  },
  {
    id: 8,
    name: 'Verma Dining Space',
    type: 'Dining Room',
    location: 'Ghaziabad',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1000&q=80',
    category: 'residential',
    year: '2024',
  },
  {
    id: 9,
    name: 'Startup Lounge Office',
    type: 'Commercial Space',
    location: 'Delhi',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000&q=80',
    category: 'commercial',
    year: '2023',
    area: '2,800 sq ft',
  },
  {
    id: 10,
    name: 'Italian Kitchen Remodel',
    type: 'Modular Kitchen',
    location: 'Noida',
    image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1000&q=80',
    category: 'kitchen',
    year: '2024',
  },
  {
    id: 11,
    name: 'Singh Penthouse',
    type: 'Full Turnkey',
    location: 'Delhi',
    image: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=1000&q=80',
    category: 'turnkey',
    year: '2024',
    area: '5,000 sq ft',
  },
  {
    id: 12,
    name: 'Boutique Retail Store',
    type: 'Retail Interior',
    location: 'Gurugram',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&q=80',
    category: 'commercial',
    year: '2023',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────────────────────────────────────

export const services = [
  {
    num: '01',
    name: 'Interior Design',
    desc: 'Full-scope residential and commercial interior design — from concept boards to flawless execution tailored to your lifestyle.',
    icon: 'home',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1800&q=85',
  },
  {
    num: '02',
    name: 'Turnkey Solutions',
    desc: 'End-to-end project delivery — we handle design, procurement, construction, and finishing so you simply walk in.',
    icon: 'key',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
  },
  {
    num: '03',
    name: 'Renovation',
    desc: 'Complete home and office renovation — breathing new life into existing spaces with precision craftsmanship.',
    icon: 'tool',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
  },
  {
    num: '04',
    name: 'Modular Kitchens',
    desc: 'Custom modular kitchen design with premium finishes, smart storage, and ergonomic layouts that inspire cooking.',
    icon: 'kitchen',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  },
  {
    num: '05',
    name: '3D Visualization',
    desc: 'Photorealistic 3D renders and walkthroughs so you see your dream space before a single wall is touched.',
    icon: 'cube',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80',
  },
  {
    num: '06',
    name: 'Flooring & Cladding',
    desc: 'Premium flooring solutions — marble, hardwood, tiles, and luxury vinyl with expert professional installation.',
    icon: 'layers',
    image: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=800&q=80',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────────────────────────────────────

export const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Homeowner, Ghaziabad',
    text: 'Krishna Interiors transformed our flat into a luxury home. Every detail was perfect — from the false ceiling to the modular kitchen. Highly recommended!',
    rating: 5,
    initials: 'RS',
  },
  {
    name: 'Priya Malhotra',
    role: 'Villa Owner, Delhi NCR',
    text: 'Best interior designers in the NCR region. They delivered on time, within budget, and the quality exceeded our expectations. Our dream home is now a reality.',
    rating: 5,
    initials: 'PM',
  },
  {
    name: 'Vikram Gupta',
    role: 'Business Owner, Noida',
    text: 'Hired them for our office renovation. The team was professional, creative, and incredibly detail-oriented. Our workspace looks world-class now.',
    rating: 5,
    initials: 'VG',
  },
  {
    name: 'Sunita Arora',
    role: 'Apartment Owner, Indirapuram',
    text: 'From 3D designs to final handover, the whole process was seamless. They understood exactly what I wanted and delivered something even better.',
    rating: 5,
    initials: 'SA',
  },
];
