'use client';
import Link from 'next/link';
import { portfolio } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export default function PortfolioSection() {
  const featured = portfolio.slice(0, 5);

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <p className="gold-tag reveal mb-4">Our Work</p>
          <h2 className="section-title reveal text-4xl md:text-5xl">Featured <em>Projects</em></h2>
        </div>
        <Link href="/portfolio" className="btn-outline reveal self-start md:self-auto">
          View All Projects <ArrowRight size={13} />
        </Link>
      </div>

      {/* EDITORIAL GRID */}
      <div className="portfolio-featured grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* LARGE LEFT */}
        <div className="port-item md:col-span-7 relative cursor-pointer" style={{ height: '320px' }}>
          <div className="img-hover w-full h-full" style={{ position: 'relative' }}>
            <img src={featured[0].image} alt={featured[0].name} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="port-overlay" />
          <div className="port-info">
            <p className="font-serif text-xl text-white">{featured[0].name}</p>
            <p className="text-xs tracking-widest uppercase mt-1" style={{ color: 'var(--gold)' }}>
              {featured[0].type} · {featured[0].location}
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:col-span-5 flex flex-col gap-3">
          <div className="port-item relative cursor-pointer flex-1" style={{ height: '155px' }}>
            <div className="img-hover w-full h-full" style={{ position: 'relative' }}>
              <img src={featured[1].image} alt={featured[1].name} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="port-overlay" />
            <div className="port-info">
              <p className="font-serif text-lg text-white">{featured[1].name}</p>
              <p className="text-xs tracking-widest uppercase mt-1" style={{ color: 'var(--gold)' }}>
                {featured[1].type} · {featured[1].location}
              </p>
            </div>
          </div>
          <div className="port-item relative cursor-pointer flex-1" style={{ height: '155px' }}>
            <div className="img-hover w-full h-full" style={{ position: 'relative' }}>
              <img src={featured[2].image} alt={featured[2].name} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="port-overlay" />
            <div className="port-info">
              <p className="font-serif text-lg text-white">{featured[2].name}</p>
              <p className="text-xs tracking-widest uppercase mt-1" style={{ color: 'var(--gold)' }}>
                {featured[2].type} · {featured[2].location}
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        {featured.slice(3).map((p) => (
          <div key={p.id} className="port-item md:col-span-6 relative cursor-pointer" style={{ height: '220px' }}>
            <div className="img-hover w-full h-full" style={{ position: 'relative' }}>
              <img src={p.image} alt={p.name} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="port-overlay" />
            <div className="port-info">
              <p className="font-serif text-lg text-white">{p.name}</p>
              <p className="text-xs tracking-widest uppercase mt-1" style={{ color: 'var(--gold)' }}>
                {p.type} · {p.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
