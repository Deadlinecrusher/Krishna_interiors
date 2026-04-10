import type { Metadata } from 'next';
import { Award, Users, Home, Star } from 'lucide-react';
import { CTABanner, TestimonialsSection } from '@/components/sections/ExtraSections';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'About Us | Krishna Interiors – Our Story, Team & Values',
  description: 'Learn about Krishna Construction Company — 8+ years of delivering luxury interior design, renovation and turnkey solutions across Delhi NCR.',
  alternates: { canonical: 'https://krishnainteriors.in/about' },
};

const values = [
  { icon: Award, title: 'Uncompromising Quality', desc: 'We use only premium materials and partner with trusted vendors to ensure every finish is flawless.' },
  { icon: Users, title: 'Client-First Approach', desc: 'Your vision drives everything. We listen, advise, and deliver — always keeping your interests at heart.' },
  { icon: Home, title: 'End-to-End Ownership', desc: 'From design to handover, we own every step so you never have to chase multiple vendors.' },
  { icon: Star, title: 'Transparent Pricing', desc: 'No hidden costs, no surprises. Our detailed quotations let you plan with complete confidence.' },
];

const team = [
  { name: 'Vikram Pal', role: 'Founder & Principal Designer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { name: 'Anita Sharma', role: 'Senior Interior Designer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
  { name: 'Rohit Verma', role: 'Project Manager', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
  { name: 'Priya Singh', role: '3D Visualization Expert', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
];

const stats = [
  { num: '150+', label: 'Projects Completed' },
  { num: '8+', label: 'Years of Experience' },
  { num: '98%', label: 'Client Satisfaction' },
  { num: '12+', label: 'Design Awards' },
];

export default function AboutPage() {
  return (
    <>
      <ScrollReveal />

      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-0 overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A96E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-end relative z-10">
          <div className="px-5 md:px-16 pt-4 md:pt-0 pb-10 md:pb-20">
            <p className="gold-tag reveal mb-5">Our Story</p>
            <h1 className="section-title reveal mb-5" style={{ fontSize: 'clamp(2.2rem, 8vw, 4.5rem)' }}>
              Built on <em>Passion,</em><br />Delivered with Pride
            </h1>
            <p className="reveal reveal-delay-1 text-sm leading-loose mb-4" style={{ color: 'var(--text-muted)' }}>
              Krishna Construction Company was founded with a single vision — to bring world-class interior design within reach of every Indian family and business. From a small studio in Ghaziabad, we've grown into Delhi NCR's most trusted interior partner.
            </p>
            <p className="reveal reveal-delay-2 text-sm leading-loose" style={{ color: 'var(--text-muted)' }}>
              Today, with over 150 projects completed and a dedicated team of designers, architects, and craftsmen, we continue to build spaces that tell your story.
            </p>
          </div>

          {/* Cross-browser img fix: absolute positioned inside relative container */}
          <div className="reveal relative" style={{ height: '320px' }}>
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=900&q=80"
              alt="Krishna Interiors studio"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, var(--bg-secondary) 0%, transparent 40%)' }} />
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* STATS */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {stats.map((s, i) => (
            <div key={s.label} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <p className="font-serif font-light mb-2" style={{ fontSize: 'clamp(2.5rem, 8vw, 3.75rem)', color: 'var(--gold)' }}>{s.num}</p>
              <p className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-divider" />

      {/* VALUES */}
      <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="text-center mb-10 md:mb-14">
          <p className="gold-tag justify-center reveal mb-4">What Drives Us</p>
          <h2 className="section-title reveal text-4xl md:text-5xl">Our <em>Values</em></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="card reveal p-6 md:p-8 group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ border: '1px solid var(--gold)', color: 'var(--gold)' }}
                >
                  <Icon size={18} />
                </div>
                <h3 className="font-serif text-lg font-light mb-3" style={{ color: 'var(--text-primary)' }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="gold-divider" />

      {/* TEAM */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="text-center mb-10 md:mb-14">
          <p className="gold-tag justify-center reveal mb-4">The People Behind the Work</p>
          <h2 className="section-title reveal text-4xl md:text-5xl">Meet Our <em>Team</em></h2>
        </div>

        <div className="team-grid grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {team.map((m, i) => (
            <div key={m.name} className="reveal group" style={{ transitionDelay: `${i * 0.1}s` }}>
              {/* Cross-browser: padding-bottom aspect ratio trick */}
              <div className="img-hover mb-3 md:mb-4 relative" style={{ paddingBottom: '133%' }}>
                <img
                  src={m.image}
                  alt={m.name}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(to top, rgba(201,169,110,0.3), transparent)' }}
                />
              </div>
              <h3 className="font-serif text-base md:text-lg font-light" style={{ color: 'var(--text-primary)' }}>{m.name}</h3>
              <p className="text-xs tracking-wider uppercase mt-1" style={{ color: 'var(--text-muted)' }}>{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-divider" />
      <TestimonialsSection />
      <div className="gold-divider" />
      <CTABanner />
    </>
  );
}
