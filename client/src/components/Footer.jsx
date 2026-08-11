import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ profile }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-color)',
        padding: '3rem 0',
        background: 'var(--bg-dark)',
      }}
    >
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-main)' }}>
            Ahsan Mehmood
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Software Engineer • QA Automation, Full Stack & AI Engineering
          </div>
        </div>

        <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
          © {new Date().getFullYear()} Ahsan Mehmood. Built with React.js, Node.js & MySQL.
        </div>

        <button
          onClick={scrollToTop}
          className="btn btn-secondary btn-sm"
          style={{ borderRadius: '50%', width: '42px', height: '42px', padding: 0 }}
          title="Back to Top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
