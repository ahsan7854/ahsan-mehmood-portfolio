import React, { useState, useEffect } from 'react';
import { ShieldCheck, Code2, Cpu, Sun, Moon, Sparkles, Menu, X } from 'lucide-react';

export default function Navbar({ currentTheme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const cycleTheme = () => {
    if (currentTheme === 'dark') setTheme('cyberpunk');
    else if (currentTheme === 'cyberpunk') setTheme('slate-light');
    else setTheme('dark');
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        transition: 'all 0.3s ease',
        background: scrolled ? 'var(--bg-card)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
        boxShadow: scrolled ? 'var(--shadow-card)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a href="#top" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'var(--gradient-main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              color: '#ffffff',
              fontSize: '1.2rem',
              boxShadow: '0 4px 15px rgba(56, 189, 248, 0.3)',
            }}
          >
            AM
          </div>
          <div>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-main)' }}>
              Ahsan Mehmood
            </span>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-emerald)', display: 'inline-block' }}></span>
              Senior QA Automation Engineer
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          <ul style={{ display: 'flex', gap: '1.75rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  style={{
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--accent-cyan)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggler Button */}
          <button
            onClick={cycleTheme}
            className="btn btn-secondary btn-sm"
            title="Switch Visual Theme"
            style={{ borderRadius: 'var(--radius-full)', gap: '0.5rem', cursor: 'pointer' }}
          >
            <Sparkles size={16} color="var(--accent-cyan)" />
            <span style={{ fontSize: '0.8rem', textTransform: 'capitalize' }}>{currentTheme}</span>
          </button>

          {/* Let's Talk CTA */}
          <a href="#contact" className="btn btn-primary btn-sm">
            Let's Talk
          </a>
        </nav>

        {/* Mobile Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={cycleTheme}
            className="btn btn-secondary btn-sm mobile-only"
          >
            <Sparkles size={16} color="var(--accent-cyan)" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-main)',
              cursor: 'pointer',
              padding: '0.5rem',
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--bg-card)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-color)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-main)',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 500,
                padding: '0.5rem 0',
                borderBottom: '1px solid var(--border-color)',
              }}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
}
