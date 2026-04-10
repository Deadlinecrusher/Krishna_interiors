// Server component — fully crawlable and indexable by Googlebot
import type { Metadata } from 'next';
import PortfolioClient from './PortfolioClient';
import { portfolio } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Portfolio | Krishna Interiors – Interior Design Projects Delhi NCR',
  description:
    'Browse our 150+ completed projects: residential interiors, commercial spaces, modular kitchens, and full turnkey solutions across Ghaziabad, Delhi, Noida & NCR.',
  alternates: { canonical: 'https://krishnainteriors.in/portfolio' },
  openGraph: {
    title: 'Portfolio | Krishna Interiors',
    description: 'Luxury interior design projects across Delhi NCR.',
    url: 'https://krishnainteriors.in/portfolio',
    images: [{ url: portfolio[0].image, width: 1000, height: 750, alt: portfolio[0].name }],
  },
};

export default function PortfolioPage() {
  return (
    <>
      {/* sr-only: visible to Googlebot, hidden from users — no layout impact */}
      <div className="sr-only">
        <h1>Interior Design Portfolio – Krishna Construction Company</h1>
        <p>
          Explore our completed interior design projects across Ghaziabad, Delhi, Noida, and Gurugram.
          From luxury residential spaces to commercial offices and modular kitchens, our portfolio
          reflects 8+ years of craftsmanship across Delhi NCR.
        </p>
        <ul>
          {portfolio.map((p) => (
            <li key={p.id}>
              <strong>{p.name}</strong> — {p.type} in {p.location} ({p.category})
            </li>
          ))}
        </ul>
      </div>

      {/* Interactive client component for real users */}
      <PortfolioClient />
    </>
  );
}
