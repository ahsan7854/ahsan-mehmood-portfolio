import React, { useState } from 'react';
import { Mail, Send, Copy, Check, MessageSquare, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact({ profile }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const userEmail = profile?.email || 'ahsanmehmood7854@gmail.com';
  const userPhone = profile?.phone || '03081075251';
  const githubUrl = profile?.github || 'https://github.com/ahsan7854';
  const linkedinUrl = profile?.linkedin || 'https://www.linkedin.com/in/mian-ahsan-mehmood/';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(userEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', text: data.error || 'Failed to send message.' });
      }
    } catch (err) {
      setStatus({ type: 'success', text: 'Message received! (Client demo mode)' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-glass)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <MessageSquare size={14} /> Get In Touch
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Great Together</span>
          </h2>
          <p className="section-subtitle">
            Whether you need QA automation suites, full-stack React & Node.js development, or custom AI integrations, I'd love to hear from you.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
          }}
        >
          {/* Left Column: Contact Details */}
          <div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '1rem' }}>Contact Details</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
              I am currently open for full-time roles, contract engineering, and technical consultations. Reach out via email, phone, or LinkedIn!
            </p>

            {/* Email Card with Copy Button */}
            <div
              className="glass-card"
              style={{
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Direct Email</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>{userEmail}</div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="btn btn-secondary btn-sm"
                style={{ gap: '0.4rem', cursor: 'pointer' }}
              >
                {copied ? <Check size={16} color="var(--accent-emerald)" /> : <Copy size={16} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Phone Card */}
            <div
              className="glass-card"
              style={{
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem',
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(52, 211, 153, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-emerald)',
                }}
              >
                <Phone size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Direct Contact / WhatsApp</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>{userPhone}</div>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="glass-card"
                style={{
                  flex: 1,
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  textDecoration: 'none',
                  color: 'var(--text-main)',
                  fontWeight: 600,
                }}
              >
                <GithubIcon size={20} color="var(--accent-cyan)" /> GitHub
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="glass-card"
                style={{
                  flex: 1,
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  textDecoration: 'none',
                  color: 'var(--text-main)',
                  fontWeight: 600,
                }}
              >
                <LinkedinIcon size={20} color="var(--accent-violet)" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card" style={{ padding: '2.25rem' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Doe"
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-main)',
                    fontSize: '0.95rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@company.com"
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-main)',
                    fontSize: '0.95rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project Inquiry / QA Automation"
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-main)',
                    fontSize: '0.95rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-main)' }}>
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, timeline, or engineering needs..."
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-main)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              {status && (
                <div
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    background: status.type === 'success' ? 'rgba(52, 211, 153, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                    border: `1px solid ${status.type === 'success' ? 'rgba(52, 211, 153, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                    color: status.type === 'success' ? 'var(--accent-emerald)' : '#ef4444',
                    fontSize: '0.9rem',
                  }}
                >
                  {status.text}
                </div>
              )}

              <button type="submit" disabled={submitting} className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
                {submitting ? 'Sending...' : 'Send Message'} <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
