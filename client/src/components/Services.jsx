import React from 'react';
import { ShieldCheck, Code2, Cpu, CheckCircle2, Terminal, ArrowUpRight } from 'lucide-react';

export default function Services({ services }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck size={32} color="var(--accent-emerald)" />;
      case 'Code2':
        return <Code2 size={32} color="var(--accent-cyan)" />;
      case 'Cpu':
        return <Cpu size={32} color="var(--accent-violet)" />;
      default:
        return <Code2 size={32} color="var(--accent-cyan)" />;
    }
  };

  const getGradientClass = (index) => {
    if (index === 0) return 'gradient-text-qa';
    if (index === 2) return 'gradient-text-ai';
    return 'gradient-text';
  };

  return (
    <section id="services" className="section" style={{ background: 'var(--bg-glass)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Cpu size={14} /> Core Offerings & Services
          </div>
          <h2 className="section-title">
            Engineering Expertise & <span className="gradient-text">Solutions</span>
          </h2>
          <p className="section-subtitle">
            Providing end-to-end software engineering capabilities: automated testing pipelines, modern full-stack web applications, and intelligent AI models.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          {services?.map((service, idx) => (
            <div key={service.id || idx} className="glass-card" style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {getIcon(service.icon)}
                </div>
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--text-dim)',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  0{idx + 1}
                </span>
              </div>

              <h3 className={getGradientClass(idx)} style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                {service.title}
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', marginBottom: '1.5rem', flexGrow: 1, lineHeight: 1.6 }}>
                {service.short_desc}
              </p>

              {/* Deliverables Checklist */}
              <div style={{ marginBottom: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-dim)', marginBottom: '0.75rem' }}>
                  Key Deliverables
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {service.deliverables?.map((item, dIdx) => (
                    <li key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                      <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools & Tech Badges */}
              <div>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-dim)', marginBottom: '0.6rem' }}>
                  Tools & Technologies
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {service.tools?.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        padding: '0.25rem 0.65rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-color)',
                        fontSize: '0.78rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
