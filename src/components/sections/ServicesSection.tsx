'use client';
import Link from 'next/link';
import { services } from '@/lib/utils';
import { ArrowRight, Home, Key, Wrench, ChefHat, Box, Layers } from 'lucide-react';

const icons = [Home, Key, Wrench, ChefHat, Box, Layers];

export default function ServicesSection() {
  return (
    <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      {/* HEADER */}
      <div className="text-center mb-14">
        <p className="gold-tag justify-center reveal mb-4">What We Offer</p>
        <h2 className="section-title reveal text-4xl md:text-5xl">Our <em>Expertise</em></h2>
      </div>

      {/* GRID */}
      <div
        className="services-grid grid grid-cols-1 md:grid-cols-3 gap-px"
        style={{ background: 'var(--border-color)' }}
      >
        {services.map((s, i) => {
          const Icon = icons[i];
          return (
            <div
              key={s.num}
              className="reveal group relative overflow-hidden p-10 transition-all duration-500 cursor-pointer"
              style={{
                background: 'var(--bg-primary)',
                transitionDelay: `${i * 0.06}s`,
              }}
            >
              {/* HOVER BG IMAGE */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  backgroundImage: `url(${s.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-95 transition-opacity duration-700"
                style={{ background: 'var(--bg-card)' }}
              />

              {/* CONTENT */}
              <div className="relative z-10">
                <p
                  className="font-serif text-5xl font-light mb-6 transition-colors duration-300"
                  style={{ color: 'var(--border-color)' }}
                >
                  {s.num}
                </p>

                <div
                  className="w-10 h-10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ border: '1px solid var(--gold)', color: 'var(--gold)' }}
                >
                  <Icon size={16} />
                </div>

                <h3
                  className="font-serif text-xl font-light mb-3 transition-colors"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {s.name}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
                  {s.desc}
                </p>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-all duration-300 group-hover:gap-3"
                  style={{ color: 'var(--gold)' }}
                >
                  Explore <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="text-center mt-14 reveal">
        <Link href="/services" className="btn-outline">
          View All Services <ArrowRight size={13} />
        </Link>
      </div>
    </section>
  );
}
