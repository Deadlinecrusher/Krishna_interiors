'use client';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  '8+ years serving Delhi NCR',
  'End-to-end project management',
  'Transparent pricing — no hidden costs',
  '150+ successful projects delivered',
  'Free on-site consultation',
];

export default function AboutSection() {
  return (
    <section className="section-padding about-grid grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center" style={{ background: 'var(--bg-secondary)' }}>
      {/* IMAGE */}
      <div className="reveal relative">
        <div className="relative img-hover" style={{ paddingBottom: '100%' }}>
          <img
            src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Krishna Interiors workspace"
          />
        </div>
        {/* ACCENT FRAME — hidden on mobile to avoid clipping */}
        <div
          className="absolute -bottom-5 -right-5 w-48 h-48 pointer-events-none hidden md:block"
          style={{ border: '1px solid var(--gold)', opacity: 0.4 }}
        />
        {/* BADGE */}
        <div
          className="absolute -top-4 -left-4 w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center text-center"
          style={{ background: 'var(--gold)', color: '#1A2744' }}
        >
          <p className="font-serif text-2xl md:text-3xl font-light leading-none">8+</p>
          <p className="text-[0.5rem] tracking-widest uppercase mt-1 font-medium">Years of<br />Excellence</p>
        </div>
      </div>

      {/* TEXT */}
      <div>
        <p className="gold-tag reveal mb-5">Our Story</p>
        <h2 className="section-title reveal text-4xl md:text-5xl mb-6">
          Crafting <em>Spaces</em> That<br />Tell Your Story
        </h2>
        <p className="reveal reveal-delay-1 text-sm leading-loose mb-4" style={{ color: 'var(--text-secondary)' }}>
          At Krishna Interiors, we believe every space has a soul. Our expert team combines timeless aesthetics with modern functionality — delivering turnkey interior solutions that exceed expectations, every time.
        </p>
        <p className="reveal reveal-delay-2 text-sm leading-loose mb-8" style={{ color: 'var(--text-muted)' }}>
          From concept to completion, we manage every detail so you can simply enjoy the journey of seeing your dream space come to life.
        </p>

        <ul className="reveal reveal-delay-3 space-y-3 mb-10">
          {highlights.map((h) => (
            <li key={h} className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <CheckCircle2 size={15} style={{ color: 'var(--gold)', flexShrink: 0 }} />
              {h}
            </li>
          ))}
        </ul>

        <div className="reveal reveal-delay-4">
          <Link href="/about" className="btn-primary">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
