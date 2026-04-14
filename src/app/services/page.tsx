import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/utils';
import { ArrowRight, Home, Key, Wrench, ChefHat, Box, Layers, CheckCircle2 } from 'lucide-react';
import { CTABanner } from '@/components/sections/ExtraSections';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Services | Krishna Interiors – Interior Design, Renovation & Turnkey Solutions',
  description: 'Explore our full range of services: interior design, turnkey solutions, renovation, modular kitchens, 3D visualization, and premium flooring across Delhi NCR.',
  alternates: { canonical: 'https://krishnainteriors.in/services' },
};

const icons = [Home, Key, Wrench, ChefHat, Box, Layers];

const pricing = [
  {
    tier: 'Essential',
    price: '₹800 – ₹1,200',
    unit: 'per sq ft',
    desc: 'Clean, modern interiors for those who want quality within a defined budget.',
    features: ['2D Floor Planning', 'Material Selection', 'Basic 3D Views', 'Site Supervision'],
    highlight: false,
  },
  {
    tier: 'Premium',
    price: '₹1,200 – ₹1,800',
    unit: 'per sq ft',
    desc: 'Elevated design with premium materials, detailed execution and full project management.',
    features: ['Full 3D Visualization', 'Premium Materials', 'Complete PM', 'Modular Furniture', 'Dedicated Designer'],
    highlight: true,
  },
  {
    tier: 'Luxury',
    price: '₹1,800+',
    unit: 'per sq ft',
    desc: 'Bespoke luxury interiors crafted to your exact specifications with no compromises.',
    features: ['Bespoke Design', 'Imported Materials', 'Full Turnkey', 'Custom Furniture', 'VIP Service'],
    highlight: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      <ScrollReveal />

      {/* HERO */}
      <section
        className="relative pt-32 md:pt-40 pb-16 md:pb-28 px-5 md:px-16 overflow-hidden"
        style={{ background: 'var(--bg-secondary)' }}
      >
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A96E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
        />
        <div className="max-w-3xl relative z-10">
          <p className="gold-tag reveal mb-5">What We Offer</p>
          <h1 className="section-title reveal mb-5" style={{ fontSize: 'clamp(2.2rem, 8vw, 4.5rem)' }}>
            Our <em>Services</em>
          </h1>
          <p className="reveal reveal-delay-1 text-sm leading-loose max-w-xl" style={{ color: 'var(--text-muted)' }}>
            From a single room refresh to a complete turnkey project, we bring expertise, craftsmanship and passion to every space we touch.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      {/* SERVICES DETAIL */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="space-y-16 md:space-y-24">
          {services.map((s, i) => {
            const Icon = icons[i];
            const isEven = i % 2 === 0;
            return (
              <div
                key={s.num}
                /* On mobile always stack, on desktop alternate direction */
                className={`services-detail-row reveal grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center`}
                style={{ direction: !isEven ? 'rtl' : 'ltr' } as React.CSSProperties}
              >
                {/* IMAGE */}
                <div className="relative" style={{ direction: 'ltr' }}>
                  {/* Cross-browser fix: padding-bottom aspect ratio */}
                  <div className="img-hover relative" style={{ paddingBottom: '75%' }}>
                    <img
                      src={s.image}
                      alt={s.name}
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div
                    className={`absolute ${isEven ? '-bottom-3 -right-3 md:-bottom-4 md:-right-4' : '-bottom-3 -left-3 md:-bottom-4 md:-left-4'} w-14 h-14 md:w-20 md:h-20 flex items-center justify-center`}
                    style={{ background: 'var(--gold)' }}
                  >
                    <Icon size={18} style={{ color: '#1A2744' }} />
                  </div>
                </div>

                {/* TEXT */}
                <div style={{ direction: 'ltr' }}>
                  <p className="font-serif font-light mb-3 md:mb-4" style={{ fontSize: 'clamp(3rem, 10vw, 3.75rem)', color: 'var(--border-color)', lineHeight: 1 }}>{s.num}</p>
                  <h2 className="font-serif font-light mb-3 md:mb-4" style={{ fontSize: 'clamp(1.6rem, 5vw, 2.5rem)', color: 'var(--text-primary)' }}>
                    {s.name}
                  </h2>
                  <div className="w-10 h-px mb-4 md:mb-6" style={{ background: 'var(--gold)' }} />
                  <p className="text-sm leading-loose mb-6 md:mb-8" style={{ color: 'var(--text-muted)' }}>
                    {s.desc} We work closely with every client to ensure the final result reflects your personality, lifestyle, and aspirations — delivered with uncompromising attention to detail.
                  </p>
                  <Link href="/contact" className="btn-primary inline-flex">
                    Get a Quote <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="gold-divider" />

      {/* PRICING */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="text-center mb-10 md:mb-14">
          <p className="gold-tag justify-center reveal mb-4">Investment</p>
          <h2 className="section-title reveal text-4xl md:text-5xl">Transparent <em>Pricing</em></h2>
          <p className="reveal text-sm mt-4 max-w-md mx-auto" style={{ color: 'var(--text-muted)' }}>
            All pricing is approximate. Final quotes are provided after a free on-site consultation.
          </p>
        </div>

        <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {pricing.map((p, i) => (
            <div
              key={p.tier}
              className={`reveal card p-6 md:p-8 relative overflow-hidden`}
              style={{
                transitionDelay: `${i * 0.1}s`,
                outline: p.highlight ? '1px solid var(--gold)' : undefined,
              }}
            >
              {p.highlight && (
                <div className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }}
                />
              )}
              {p.highlight && (
                <span className="absolute top-4 right-4 text-xs tracking-widest uppercase px-3 py-1"
                  style={{ background: 'var(--gold)', color: '#1A2744', fontSize: '0.55rem' }}>
                  Most Popular
                </span>
              )}
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--text-muted)' }}>{p.tier}</p>
              <p className="font-serif text-2xl md:text-3xl font-light mb-1" style={{ color: 'var(--text-primary)' }}>{p.price}</p>
              <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>{p.unit}</p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>{p.desc}</p>
              <ul className="space-y-3 mb-6 md:mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={13} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className={p.highlight ? 'btn-primary w-full justify-center' : 'btn-outline w-full justify-center'}>
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-divider" />
      <CTABanner />
    </>
  );
}
