'use client';
import Link from 'next/link';
import { testimonials } from '@/lib/utils';

const steps = [
  { num: '01', name: 'Consultation', desc: 'Free on-site visit to understand your vision, requirements, and budget.' },
  { num: '02', name: 'Design & 3D', desc: 'Detailed floor plans and photorealistic 3D renders for your approval.' },
  { num: '03', name: 'Execution', desc: 'Our skilled team brings the design to life with precision and quality materials.' },
  { num: '04', name: 'Handover', desc: 'Final walkthrough, snag resolution, and keys to your dream space.' },
];

export function ProcessSection() {
  return (
    <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="text-center mb-16">
        <p className="gold-tag justify-center reveal mb-4">How We Work</p>
        <h2 className="section-title reveal text-4xl md:text-5xl">Our <em>Process</em></h2>
      </div>

      <div className="process-line relative grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {steps.map((s, i) => (
          <div key={s.num} className="reveal text-center" style={{ transitionDelay: `${i * 0.1}s` }}>
            <div
              className="w-7 h-7 rounded-full mx-auto mb-6 relative z-10 transition-transform duration-300 hover:scale-125"
              style={{ background: 'var(--gold)', boxShadow: '0 0 0 6px var(--bg-primary)' }}
            />
            <p className="font-serif text-4xl font-light mb-3" style={{ color: 'var(--border-color)' }}>{s.num}</p>
            <h3 className="font-serif text-lg font-light mb-2" style={{ color: 'var(--text-primary)' }}>{s.name}</h3>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="text-center mb-14">
        <p className="gold-tag justify-center reveal mb-4">Client Love</p>
        <h2 className="section-title reveal text-4xl md:text-5xl">What Our <em>Clients</em> Say</h2>
      </div>

      <div className="testi-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="card reveal p-8"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <p
              className="font-serif text-5xl leading-none mb-4"
              style={{ color: 'var(--gold)', opacity: 0.4 }}
            >
              "
            </p>
            <p
              className="font-serif text-sm italic leading-loose mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t.text}
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0"
                style={{ background: 'var(--gold)', color: '#1A2744' }}
              >
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{t.name}</p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CTABanner() {
  return (
    <section
      className="relative py-24 md:py-28 px-5 md:px-16 text-center overflow-hidden cta-banner"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(14,13,11,0.88)' }} />
      {/* GRAIN */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
      />
      <div className="relative z-10 max-w-2xl mx-auto">
        <p className="gold-tag justify-center mb-6 text-white/80">Start Your Journey</p>
        <h2 className="font-serif text-4xl md:text-6xl font-light text-white leading-tight mb-6">
          Ready to Transform<br />Your <em className="italic" style={{ color: 'var(--gold)' }}>Space?</em>
        </h2>
        <p className="text-sm text-white/55 leading-loose mb-10 max-w-md mx-auto">
          Book your free on-site consultation today. Our design experts will visit and help you plan your dream interior.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
          <Link href="/contact" className="btn-primary justify-center">
            Book Free Consultation
          </Link>
          <a
            href="https://wa.me/918796956034"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-7 py-4 font-medium text-white text-xs tracking-widest uppercase transition-all duration-300 hover:scale-105"
            style={{ background: '#25D366', letterSpacing: '0.2em' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.554 4.11 1.523 5.837L.057 23.882l6.19-1.624A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.369l-.358-.214-3.724.977.994-3.63-.234-.372A9.818 9.818 0 1112 21.818z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
