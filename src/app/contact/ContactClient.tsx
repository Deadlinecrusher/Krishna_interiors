'use client';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const services = ['Interior Design', 'Turnkey Solution', 'Renovation', 'Modular Kitchen', '3D Visualization', 'Flooring & Cladding', 'Commercial Space', 'Other'];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Something went wrong. Please try again.'); setLoading(false); return; }
      setSubmitted(true);
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ScrollReveal />

      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-5 md:px-16" style={{ background: 'var(--bg-secondary)' }}>
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A96E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
        />
        <div className="max-w-2xl relative z-10">
          <p className="gold-tag reveal mb-5">Get In Touch</p>
          <h1 className="section-title reveal mb-5" style={{ fontSize: 'clamp(2.2rem, 8vw, 4.5rem)' }}>
            Let's Build Your<br /><em>Dream Space</em>
          </h1>
          <p className="reveal reveal-delay-1 text-sm leading-loose" style={{ color: 'var(--text-muted)' }}>
            Fill out the form below or reach out directly. We typically respond within 2 hours during business hours and offer free on-site consultations.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      {/* MAIN CONTACT — stacks on mobile */}
      <section className="section-padding contact-grid grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16" style={{ background: 'var(--bg-primary)' }}>

        {/* INFO SIDE */}
        <div>
          <h2 className="font-serif text-2xl md:text-3xl font-light mb-6 md:mb-8 reveal" style={{ color: 'var(--text-primary)' }}>
            Reach <em className="italic" style={{ color: 'var(--gold)' }}>Us</em>
          </h2>

          {[
            { icon: MapPin, label: 'Our Studio', val: 'Plot 836, Shalimar Garden Ext-1,\nGhaziabad, UP 201005' },
            { icon: Phone, label: 'Call / WhatsApp', val: '+91 87969 56034' },
            { icon: Mail, label: 'Email', val: 'info@krishnainteriors.in' },
            { icon: Clock, label: 'Working Hours', val: 'Mon–Sat: 10:00 AM – 7:00 PM\nSunday: By appointment' },
          ].map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={c.label} className="reveal flex gap-4 mb-6 md:mb-8" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ border: '1px solid var(--border-color)', color: 'var(--gold)' }}>
                  <Icon size={15} />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-1" style={{ color: 'var(--text-muted)' }}>{c.label}</p>
                  <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--text-secondary)' }}>{c.val}</p>
                </div>
              </div>
            );
          })}

          {/* MAP */}
          <div className="reveal mt-6 md:mt-8 overflow-hidden" style={{ border: '1px solid var(--border-color)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6!2d77.408!3d28.651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sShalimar+Garden+Ext+1+Ghaziabad!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="200"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Krishna Interiors Location"
            />
          </div>
        </div>

        {/* FORM SIDE */}
        <div className="reveal">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-16">
              <CheckCircle2 size={48} style={{ color: 'var(--gold)' }} className="mb-6" />
              <h3 className="font-serif text-3xl font-light mb-3" style={{ color: 'var(--text-primary)' }}>
                Thank You!
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                We've received your enquiry. Our team will contact you within 2 hours.
              </p>
              <button
                className="btn-outline mt-8"
                onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: '', budget: '', message: '' }); }}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              {/* On mobile, stack name/phone vertically */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--text-muted)' }}>Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="Your Name" className="form-input" />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--text-muted)' }}>Phone *</label>
                  <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 98XXXXXXX" type="tel" className="form-input" />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--text-muted)' }}>Email Address</label>
                <input name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" type="email" className="form-input" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--text-muted)' }}>Service Required *</label>
                  <select name="service" value={form.service} onChange={handleChange} required className="form-input cursor-pointer" style={{ background: 'var(--bg-primary)' }}>
                    <option value="">Select...</option>
                    {services.map((s) => <option key={s} value={s} style={{ background: 'var(--bg-primary)' }}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--text-muted)' }}>Budget Range</label>
                  <select name="budget" value={form.budget} onChange={handleChange} className="form-input cursor-pointer" style={{ background: 'var(--bg-primary)' }}>
                    <option value="">Select...</option>
                    {['Under ₹1L','₹1L – ₹3L','₹3L – ₹5L', '₹5L – ₹10L', '₹10L – ₹20L', '₹20L – ₹50L', '₹50L+'].map((b) => (
                      <option key={b} value={b} style={{ background: 'var(--bg-primary)' }}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--text-muted)' }}>Tell Us About Your Project</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe your space, requirements, timeline..."
                  className="form-input resize-none"
                />
              </div>

              {error && <p className="text-sm text-center" style={{ color: '#e05c5c' }}>{error}</p>}

              <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
                {loading ? 'Sending…' : (<><Send size={13} /> Send Enquiry</>)}
              </button>

              <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
                Or call us directly:{' '}
                <a href="tel:+918796956034" style={{ color: 'var(--gold)' }}>+91 87969 56034</a>
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
