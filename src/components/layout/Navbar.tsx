'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

function KrishnaLogo({ theme }: { theme: string }) {
  const isDark = theme === 'dark';

  return (
    <div
      className="
        relative w-16 h-16 flex-shrink-0
        rounded-full
        flex items-center justify-center
        transition-all duration-300
        group-hover:scale-110 group-hover:shadow-lg
      "
      style={{
        background: isDark
          ? '#ffffff' // solid white in dark mode
          : 'rgba(201,169,110,0.15)', // soft gold in light mode
        border: isDark
          ? '1.5px solid rgba(255,255,255,0.4)'
          : '1.5px solid rgba(201,169,110,0.4)',
        boxShadow: isDark
          ? '0 4px 20px rgba(0,0,0,0.6)'
          : '0 4px 20px rgba(201,169,110,0.25)',
      }}
    >
      <img
        src="/logo.png"
        alt="Krishna Interiors"
        
        className="
          w-14 h-14 object-contain
          transition-transform duration-300
          group-hover:scale-110
        "
      />
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
        }}>
        <div className="flex items-center justify-between px-8 md:px-16 py-3">
          <Link href="/" className="flex items-center gap-3 group">
            <KrishnaLogo theme={theme} />
            <div className="hidden md:block">
              <p className="font-serif text-xl font-light leading-tight italic" style={{ color: 'var(--gold)' }}>
                Krishna
              </p>
              <p className="text-[0.52rem] tracking-[0.38em] uppercase mt-0.5" style={{ color: 'var(--text-muted)' }}>
                Construction Company
              </p>
              <p className="text-[0.42rem] tracking-[0.2em] uppercase mt-0.5" style={{ color: 'var(--gold)', opacity: 0.7 }}>
                Interior · Renovation · Turnkey
              </p>
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-8 list-none">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={`nav-link ${pathname === l.href ? 'active' : ''}`}>{l.label}</Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
              style={{ border: '1px solid var(--border-color)', color: 'var(--text-muted)' }}
              aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <Link href="/contact" className="btn-primary hidden md:inline-flex">Free Consultation</Link>
            <button className="md:hidden" style={{ color: 'var(--text-primary)' }} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
            style={{ background: 'var(--nav-bg)', borderTop: '1px solid var(--border-color)' }}>
            {links.map((l) => (
              <Link key={l.href} href={l.href}
                className={`nav-link text-sm py-2 ${pathname === l.href ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}>{l.label}</Link>
            ))}
            <Link href="/contact" className="btn-primary mt-2 text-center justify-center" onClick={() => setMenuOpen(false)}>
              Free Consultation
            </Link>
          </div>
        )}
      </nav>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <div className="relative group flex items-center justify-end">
          <span className="absolute right-16 whitespace-nowrap text-xs font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none"
            style={{ background: '#0E0D0B', color: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
            Chat with AI
          </span>
          <button onClick={() => { const b = document.getElementById('ki-bot-box'); if(b) b.style.display = b.style.display === 'none' ? 'flex' : 'none'; }}
            className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            style={{ background: 'linear-gradient(135deg, #C9A96E, #A07840)', boxShadow: '0 4px 20px rgba(201,169,110,0.5)' }}
            aria-label="AI Chat">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.06L2 22l4.94-1.37A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
              <circle cx="8.5" cy="12" r="1" fill="white" stroke="none"/>
              <circle cx="12" cy="12" r="1" fill="white" stroke="none"/>
              <circle cx="15.5" cy="12" r="1" fill="white" stroke="none"/>
            </svg>
          </button>
        </div>

        <div className="relative group flex items-center justify-end">
          <span className="absolute right-16 whitespace-nowrap text-xs font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none"
            style={{ background: '#E1306C', color: '#fff', boxShadow: '0 4px 12px rgba(225,48,108,0.4)' }}>
            Follow us
          </span>
          <a href="https://www.instagram.com/_krishna_interiors_" target="_blank" rel="noopener noreferrer"
            className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', boxShadow: '0 4px 20px rgba(225,48,108,0.45)' }}
            aria-label="Instagram">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
        </div>

        <div className="relative group flex items-center justify-end">
          <span className="absolute right-16 whitespace-nowrap text-xs font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none"
            style={{ background: '#25D366', color: '#fff', boxShadow: '0 4px 12px rgba(37,211,102,0.4)' }}>
            Chat on WhatsApp
          </span>
          <a href="https://wa.me/918796956034" target="_blank" rel="noopener noreferrer"
            className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            style={{ background: '#25D366', boxShadow: '0 4px 20px rgba(37,211,102,0.45)' }}
            aria-label="WhatsApp">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.554 4.11 1.523 5.837L.057 23.882l6.19-1.624A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.369l-.358-.214-3.724.977.994-3.63-.234-.372A9.818 9.818 0 1112 21.818z"/>
            </svg>
          </a>
        </div>
      </div>

      <div id="ki-bot-box" className="fixed bottom-28 right-6 z-50 w-80 rounded-2xl overflow-hidden shadow-2xl"
        style={{ display: 'none', flexDirection: 'column', background: 'var(--bg-card, #fff)', border: '1px solid var(--border-color)' }}>
        <div className="flex items-center justify-between px-4 py-3" style={{ background: 'linear-gradient(135deg, #C9A96E, #A07840)' }}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.06L2 22l4.94-1.37A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                <circle cx="8.5" cy="12" r="1" fill="white" stroke="none"/>
                <circle cx="12" cy="12" r="1" fill="white" stroke="none"/>
                <circle cx="15.5" cy="12" r="1" fill="white" stroke="none"/>
              </svg>
            </div>
            <div>
              <p className="text-white text-xs font-medium">Krishna AI Assistant</p>
              <p className="text-white/70 text-[10px]">Online · Replies instantly</p>
            </div>
          </div>
          <button onClick={() => { const b = document.getElementById('ki-bot-box'); if(b) b.style.display='none'; }}
            className="text-white/80 hover:text-white transition-colors text-lg leading-none">✕</button>
        </div>
        <div id="ki-bot-msgs" className="p-4 space-y-3 overflow-y-auto" style={{ maxHeight: '260px', background: 'var(--bg-secondary, #F0EBE1)' }}>
          <div className="flex gap-2">
            <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold" style={{ background: 'linear-gradient(135deg, #C9A96E, #A07840)' }}>K</div>
            <div className="text-xs leading-relaxed px-3 py-2 rounded-2xl rounded-tl-none max-w-[85%]" style={{ background: 'var(--bg-card, #fff)', color: 'var(--text-primary)', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
              Namaste! 🙏 Welcome to Krishna Interiors. How can I help you today?
            </div>
          </div>
          <div className="flex flex-wrap gap-2 pl-8">
            {['Get a Quote', 'View Services', 'Our Portfolio', 'Contact Us'].map((q) => (
              <button key={q}
                onClick={() => {
                  const msgs = document.getElementById('ki-bot-msgs');
                  if (!msgs) return;
                  const responses: Record<string, string> = {
                    'Get a Quote': 'Great! Please call us at +91 87969 56034 or fill our contact form. We offer free on-site consultations! 🏠',
                    'View Services': 'We offer Interior Design, Turnkey Solutions, Renovation, Modular Kitchens, 3D Visualization & Flooring. Visit our Services page to learn more!',
                    'Our Portfolio': 'We have completed 150+ projects across Delhi NCR. Check out our Portfolio page to see our work! ✨',
                    'Contact Us': 'You can reach us at +91 87969 56034 or WhatsApp us. Our studio is at Plot 836, Shalimar Garden Ext-1, Ghaziabad. 📍',
                  };
                  const userDiv = document.createElement('div');
                  userDiv.className = 'flex justify-end';
                  userDiv.innerHTML = `<div style="background:linear-gradient(135deg,#C9A96E,#A07840);color:white;font-size:11px;padding:8px 12px;border-radius:16px;border-bottom-right-radius:4px;max-width:85%">${q}</div>`;
                  msgs.appendChild(userDiv);
                  setTimeout(() => {
                    const botDiv = document.createElement('div');
                    botDiv.className = 'flex gap-2';
                    botDiv.innerHTML = `<div style="width:24px;height:24px;border-radius:50%;flex-shrink:0;background:linear-gradient(135deg,#C9A96E,#A07840);display:flex;align-items:center;justify-content:center;color:white;font-size:10px;font-weight:bold">K</div><div style="font-size:11px;line-height:1.6;padding:8px 12px;border-radius:16px;border-top-left-radius:4px;max-width:85%;background:var(--bg-card,#fff);color:var(--text-primary,#1A2744);box-shadow:0 1px 4px rgba(0,0,0,0.08)">${responses[q]}</div>`;
                    msgs.appendChild(botDiv);
                    msgs.scrollTop = msgs.scrollHeight;
                  }, 600);
                  msgs.scrollTop = msgs.scrollHeight;
                }}
                className="text-[10px] px-3 py-1.5 rounded-full transition-all duration-200 hover:scale-105"
                style={{ border: '1px solid var(--gold,#C9A96E)', color: 'var(--gold-dark,#A07840)', background: 'transparent' }}>
                {q}
              </button>
            ))}
          </div>
        </div>
        <div className="px-3 py-2 flex gap-2 items-center" style={{ borderTop: '1px solid var(--border-color)', background: 'var(--bg-card,#fff)' }}>
          <input id="ki-bot-input" type="text" placeholder="Type a message..."
            className="flex-1 text-xs outline-none bg-transparent"
            style={{ color: 'var(--text-primary)', fontFamily: 'DM Sans, sans-serif' }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const input = document.getElementById('ki-bot-input') as HTMLInputElement;
                const msgs = document.getElementById('ki-bot-msgs');
                if (!input || !msgs || !input.value.trim()) return;
                const userDiv = document.createElement('div');
                userDiv.className = 'flex justify-end';
                userDiv.innerHTML = `<div style="background:linear-gradient(135deg,#C9A96E,#A07840);color:white;font-size:11px;padding:8px 12px;border-radius:16px;border-bottom-right-radius:4px;max-width:85%">${input.value}</div>`;
                msgs.appendChild(userDiv);
                input.value = '';
                setTimeout(() => {
                  const botDiv = document.createElement('div');
                  botDiv.className = 'flex gap-2';
                  botDiv.innerHTML = `<div style="width:24px;height:24px;border-radius:50%;flex-shrink:0;background:linear-gradient(135deg,#C9A96E,#A07840);display:flex;align-items:center;justify-content:center;color:white;font-size:10px;font-weight:bold">K</div><div style="font-size:11px;line-height:1.6;padding:8px 12px;border-radius:16px;border-top-left-radius:4px;max-width:85%;background:var(--bg-card,#fff);color:var(--text-primary,#1A2744);box-shadow:0 1px 4px rgba(0,0,0,0.08)">Thanks for reaching out! For detailed queries, please call us at +91 87969 56034 or fill our contact form. We'll respond within 2 hours! 🙏</div>`;
                  msgs.appendChild(botDiv);
                  msgs.scrollTop = msgs.scrollHeight;
                }, 700);
                msgs.scrollTop = msgs.scrollHeight;
              }
            }}/>
          <button style={{ color: 'var(--gold,#C9A96E)' }}
            onClick={() => { const input = document.getElementById('ki-bot-input') as HTMLInputElement; if(input) input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })); }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </button>
        </div>
      </div>
    </>
  );
}
