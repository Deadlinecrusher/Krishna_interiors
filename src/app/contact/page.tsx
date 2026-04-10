// Server component — exports metadata for crawlers
import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Krishna Interiors – Free Consultation Delhi NCR',
  description:
    'Get in touch with Krishna Interiors for a free consultation. Interior design, renovation, modular kitchens & turnkey solutions in Ghaziabad, Delhi, Noida & NCR. Call +91 87969 56034.',
  alternates: { canonical: 'https://krishnainteriors.in/contact' },
  openGraph: {
    title: 'Contact Krishna Interiors – Free Interior Design Consultation',
    description: 'Reach us for a free on-site consultation. We respond within 2 hours.',
    url: 'https://krishnainteriors.in/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
