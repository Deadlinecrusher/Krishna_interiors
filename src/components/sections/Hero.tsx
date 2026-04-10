'use client';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { useEffect, useState } from 'react';

const heroImages = [
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=85',
  'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1800&q=85',
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => setCurrent((c) => (c + 1) % heroImages.length), 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
      {/* BACKGROUND IMAGES — cross-browser fix: position absolute on img */}
      {heroImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1500"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <img
            src={src}
            alt=""
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

      {/* GRAIN TEXTURE */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
      />

      {/* CONTENT */}
      <div className="relative z-10 w-full pb-16 md:pb-20 px-5 md:px-16 hero-content">
        <div className="max-w-2xl">
          <div
            className={`gold-tag mb-4 md:mb-6 text-white/90 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '0.1s' }}
          >
            Delhi NCR's Premier Design Studio
          </div>

          <h1
            className={`font-serif font-light text-white leading-[1.05] mb-4 md:mb-6 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ fontSize: 'clamp(2.2rem, 8vw, 4.5rem)', transitionDelay: '0.25s' }}
          >
            Designed for{' '}
            <em className="italic" style={{ color: 'var(--gold)' }}>Comfort,</em>
            <br />Built for Life
          </h1>

          <p
            className={`text-sm md:text-base text-white/65 leading-relaxed max-w-md mb-8 md:mb-10 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.4s' }}
          >
            Luxury interiors & turnkey solutions that transform spaces into experiences. Serving Ghaziabad, Delhi, Noida & NCR.
          </p>

          <div
            className={`flex flex-col sm:flex-row flex-wrap gap-3 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0.55s' }}
          >
            <Link href="/portfolio" className="btn-primary justify-center sm:justify-start">
              View Our Work <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="btn-outline justify-center sm:justify-start" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
              Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div
        className={`hero-stats absolute right-8 md:right-16 bottom-20 z-10 flex gap-8 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{ transitionDelay: '0.7s' }}
      >
        {[
          { num: '150+', label: 'Projects Done' },
          { num: '8+', label: 'Years Experience' },
          { num: '98%', label: 'Satisfaction' },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-serif text-3xl font-light" style={{ color: 'var(--gold)' }}>{s.num}</p>
            <p className="text-xs tracking-widest uppercase text-white/50 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* SLIDE INDICATORS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="transition-all duration-300"
            style={{
              width: current === i ? '24px' : '6px',
              height: '6px',
              borderRadius: '3px',
              background: current === i ? 'var(--gold)' : 'rgba(255,255,255,0.35)',
            }}
          />
        ))}
      </div>
    </section>
  );
}
