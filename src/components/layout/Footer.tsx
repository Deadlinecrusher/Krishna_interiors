import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="gold-divider" />

      {/* MAIN FOOTER */}
      <div className="footer-grid section-padding grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {/* BRAND */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="relative w-14 h-14 flex-shrink-0">
              <Image src="/logo.png" alt="Krishna Interiors" fill className="object-contain" />
            </div>
          </div>
          <p className="font-serif text-2xl font-light mb-2" style={{ color: 'var(--gold)' }}>
            Krishna Interiors
          </p>
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--text-muted)' }}>
            Construction Company
          </p>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            Luxury interiors & turnkey solutions for homes and offices across Delhi NCR.
          </p>
          <a
            href="https://www.instagram.com/_krishna_interiors_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 text-xs tracking-widest uppercase transition-colors duration-300"
            style={{ color: 'var(--gold)' }}
          >
            <Instagram size={14} /> @_krishna_interiors_
          </a>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-xs tracking-widest uppercase mb-6" style={{ color: 'var(--gold)' }}>
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              { href: '/', label: 'Home' },
              { href: '/services', label: 'Services' },
              { href: '/portfolio', label: 'Portfolio' },
              { href: '/about', label: 'About Us' },
              { href: '/contact', label: 'Contact' },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm transition-colors duration-300 hover:text-amber-600"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-xs tracking-widest uppercase mb-6" style={{ color: 'var(--gold)' }}>
            Services
          </h4>
          <ul className="space-y-3">
            {[
              'Interior Design',
              'Turnkey Solutions',
              'Renovation',
              'Modular Kitchens',
              '3D Visualization',
              'Flooring & Cladding',
            ].map((s) => (
              <li key={s}>
                <Link
                  href="/services"
                  className="text-sm transition-colors duration-300 hover:text-amber-600"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-xs tracking-widest uppercase mb-6" style={{ color: 'var(--gold)' }}>
            Get In Touch
          </h4>
          <div className="space-y-4">
            <div className="flex gap-3">
              <MapPin size={14} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--gold)' }} />
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Plot 836, Shalimar Garden Ext-1,<br />Ghaziabad, UP 201005
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={14} style={{ color: 'var(--gold)' }} />
              <a href="tel:+918796956034" className="text-sm" style={{ color: 'var(--text-muted)' }}>
                +91 87969 56034
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={14} style={{ color: 'var(--gold)' }} />
              <a href="mailto:info@krishnainteriors.in" className="text-sm" style={{ color: 'var(--text-muted)' }}>
                info@krishnainteriors.in
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        className="px-5 md:px-16 py-4 md:py-5 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-3 text-center md:text-left"
        style={{ borderTop: '1px solid var(--border-color)' }}
      >
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          © 2025 Krishna Construction Company. All rights reserved.
        </p>
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          <a href="https://krishnainteriors.in" className="hover:text-amber-600 transition-colors">
            krishnainteriors.in
          </a>
        </p>
        <div className="flex gap-6">
          {['Privacy Policy', 'Terms of Use'].map((t) => (
            <Link
              key={t}
              href="#"
              className="text-xs transition-colors hover:text-amber-600"
              style={{ color: 'var(--text-muted)' }}
            >
              {t}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
