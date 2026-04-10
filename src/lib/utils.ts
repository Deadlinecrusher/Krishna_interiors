import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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

export const portfolio = [
  {
    id: 1,
    name: 'The Sharma Residence',
    type: 'Living Room',
    location: 'Ghaziabad',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1000&q=80',
    category: 'residential',
  },
  {
    id: 2,
    name: 'Malhotra Villa Kitchen',
    type: 'Modular Kitchen',
    location: 'Delhi NCR',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1000&q=80',
    category: 'kitchen',
  },
  {
    id: 3,
    name: 'Arora Master Suite',
    type: 'Bedroom',
    location: 'Noida',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1000&q=80',
    category: 'residential',
  },
  {
    id: 4,
    name: 'TechVenture HQ',
    type: 'Commercial Office',
    location: 'Gurugram',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=80',
    category: 'commercial',
  },
  {
    id: 5,
    name: 'Luxury Spa Bathroom',
    type: 'Bathroom',
    location: 'Delhi',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1000&q=80',
    category: 'residential',
  },
  {
    id: 6,
    name: 'Gupta Family Home',
    type: 'Full Turnkey',
    location: 'Ghaziabad',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1000&q=80',
    category: 'turnkey',
  },
  {
    id: 7,
    name: 'Modern Dining Space',
    type: 'Dining Room',
    location: 'Delhi NCR',
    image: 'https://images.unsplash.com/photo-1617098900591-3f90928e8c54?w=1000&q=80',
    category: 'residential',
  },
  {
    id: 8,
    name: 'Verma Residence',
    type: 'Living Room',
    location: 'Noida',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1000&q=80',
    category: 'residential',
  },
];

export const testimonials = [
  {
    initials: 'RS',
    name: 'Rajesh Sharma',
    location: 'Ghaziabad, UP',
    text: 'Krishna Interiors transformed our 3BHK into an absolute palace. The attention to detail and quality of execution is outstanding. They delivered on time and within budget.',
  },
  {
    initials: 'PM',
    name: 'Priya Malhotra',
    location: 'Delhi NCR',
    text: 'From concept to completion in just 40 days. Professional team, completely transparent pricing, and the final result exceeded every expectation we had.',
  },
  {
    initials: 'AK',
    name: 'Amit Kumar',
    location: 'Noida, UP',
    text: 'The 3D visualization helped us see exactly what to expect. No surprises — just a beautiful, luxurious space delivered exactly as promised.',
  },
  {
    initials: 'SG',
    name: 'Sunita Gupta',
    location: 'Indirapuram',
    text: 'Our modular kitchen is the highlight of our home now. Everyone who visits asks about it. Truly world-class work from the Krishna team.',
  },
];
