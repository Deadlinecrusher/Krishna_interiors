import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="gold-divider" />

      {/* MAIN FOOTER */}
      <div className="px-5 md:px-16 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">

          {/* BRAND */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              {/*
                FIX: Added CSS-variable-based background so dark mode gets
                a white circle (matching the navbar logo) instead of the
                faint gold tint that disappears on dark backgrounds.
              */}
              <div
                className="relative w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center footer-logo-circle hover:scale-140"
                style={{
                  background: 'var(--footer-logo-bg, rgba(201,169,110,0.15))',
                  border: '1px solid var(--footer-logo-border, rgba(201,169,110,0.3))',
                }}
              >
                <Image src="/logo.png" alt="Krishna Interiors" fill className="object-contain scale-110 p-1.5  hover:scale-140 " />
              </div>
              <div>
                <p className="font-serif text-lg font-light leading-tight" style={{ color: 'var(--gold)' }}>Krishna Interiors</p>
                <p className="text-[0.5rem] tracking-widest uppercase mt-0.5" style={{ color: 'var(--text-muted)' }}>Construction Company</p>
                
              </div>
            </div>
            <p className="text-xs leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
              Luxury interiors &amp; turnkey solutions for homes and offices across Delhi NCR.
            </p>
            <a href="https://www.instagram.com/_krishna_interiors_" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors duration-300"
              style={{ color: 'var(--gold)' }}>
              <Instagram size={13} /> @_krishna_interiors_
            </a>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-[0.6rem] tracking-widest uppercase mb-4" style={{ color: 'var(--gold)' }}>Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-xs transition-colors duration-300 hover:text-amber-600" style={{ color: 'var(--text-muted)' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-[0.6rem] tracking-widest uppercase mb-4" style={{ color: 'var(--gold)' }}>Services</h4>
            <ul className="space-y-2.5">
              {['Interior Design', 'Turnkey Solutions', 'Renovation', 'Modular Kitchens', '3D Visualization', 'Flooring & Cladding'].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-xs transition-colors duration-300 hover:text-amber-600" style={{ color: 'var(--text-muted)' }}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-[0.6rem] tracking-widest uppercase mb-4" style={{ color: 'var(--gold)' }}>Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex gap-3">
                <MapPin size={13} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--gold)' }} />
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  Plot 836, Shalimar Garden Ext-1,<br />Ghaziabad, UP 201005
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={13} style={{ color: 'var(--gold)' }} />
                <a href="tel:+918796956034" className="text-xs" style={{ color: 'var(--text-muted)' }}>+91 87969 56034</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={13} style={{ color: 'var(--gold)' }} />
                <a href="mailto:info@krishnainteriors.in" className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  info@krishnainteriors.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="px-5 md:px-16 py-3 md:py-4 flex flex-col md:flex-row items-center justify-between gap-1.5 text-center"
        style={{ borderTop: '1px solid var(--border-color)' }}>
        <p className="text-[0.6rem]" style={{ color: 'var(--text-muted)' }}>
          © 2025 Krishna Construction Company. All rights reserved.
        </p>
        <div className="flex gap-4">
          {[{ label: 'Privacy Policy', href: '/privacy-policy' }, { label: 'Terms of Use', href: '/terms-of-use' }].map((t) => (
            <Link key={t.href} href={t.href} className="text-[0.6rem] transition-colors hover:text-amber-600" style={{ color: 'var(--text-muted)' }}>
              {t.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
