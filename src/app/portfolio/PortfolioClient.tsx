'use client';
import { useState } from 'react';
import { portfolio } from '@/lib/utils';
import { CTABanner } from '@/components/sections/ExtraSections';
import ScrollReveal from '@/components/ui/ScrollReveal';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'kitchen', label: 'Kitchens' },
  { id: 'turnkey', label: 'Turnkey' },
];

export default function PortfolioPage() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? portfolio : portfolio.filter((p) => p.category === active);

  return (
    <>
      <ScrollReveal />

      {/* HERO */}
      <section
        className="relative pt-32 md:pt-40 pb-16 md:pb-28 px-5 md:px-16"
        style={{ background: 'var(--bg-secondary)' }}
      >
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A96E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
        />
        <div className="max-w-3xl relative z-10">
          <p className="gold-tag reveal mb-5">Our Work</p>
          <h1 className="section-title reveal mb-5" style={{ fontSize: 'clamp(2.2rem, 8vw, 4.5rem)' }}>
            Our <em>Portfolio</em>
          </h1>
          <p className="reveal reveal-delay-1 text-sm leading-loose max-w-xl" style={{ color: 'var(--text-muted)' }}>
            Every project is a story of transformation. Browse our work across residential, commercial, and turnkey projects across Delhi NCR.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      {/* FILTERS + GRID */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        {/* FILTER TABS — scrollable on mobile */}
        <div className="flex gap-2 md:gap-3 mb-10 md:mb-12 justify-start md:justify-center overflow-x-auto pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className="text-xs tracking-widest uppercase px-4 md:px-5 py-2.5 transition-all duration-300 flex-shrink-0"
              style={{
                background: active === c.id ? 'var(--gold)' : 'transparent',
                color: active === c.id ? '#1A2744' : 'var(--text-muted)',
                border: `1px solid ${active === c.id ? 'var(--gold)' : 'var(--border-color)'}`,
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: active === c.id ? 500 : 400,
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* GRID — cross-browser image fix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className="port-item relative cursor-pointer group"
              style={{ height: i % 3 === 0 ? '300px' : '240px' }}
            >
              <div className="img-hover w-full h-full" style={{ position: 'relative' }}>
                <img
                  src={p.image}
                  alt={p.name}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="port-overlay" />
              <div className="port-info">
                <p className="font-serif text-lg md:text-xl text-white">{p.name}</p>
                <p className="text-xs tracking-widest uppercase mt-1" style={{ color: 'var(--gold)' }}>
                  {p.type} · {p.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center py-20" style={{ color: 'var(--text-muted)' }}>
            No projects in this category yet.
          </p>
        )}
      </section>

      <div className="gold-divider" />
      <CTABanner />
    </>
  );
}
