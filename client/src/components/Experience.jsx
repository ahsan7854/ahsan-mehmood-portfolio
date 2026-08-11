import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience({ experiences }) {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={14} /> Career Journey
          </div>
          <h2 className="section-title">
            Work Experience & <span className="gradient-text">Milestones</span>
          </h2>
          <p className="section-subtitle">
            A track record of engineering leadership, test automation architecture, and full-stack system development across fast-paced environments.
          </p>
        </div>

        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Timeline Line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '20px',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--accent-cyan), var(--accent-violet))',
              opacity: 0.4,
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {experiences?.map((exp, idx) => (
              <div key={exp.id || idx} style={{ position: 'relative', paddingLeft: '3.5rem' }}>
                {/* Timeline Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '1.5rem',
                    transform: 'translateX(-50%)',
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: 'var(--bg-dark)',
                    border: '2px solid var(--accent-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 10px var(--accent-cyan)',
                  }}
                >
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-cyan)' }} />
                </div>

                <div className="glass-card" style={{ padding: '2rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.5rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)' }}>{exp.role}</h3>
                      <div style={{ fontSize: '1rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>{exp.company}</div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Calendar size={14} color="var(--accent-emerald)" /> {exp.period}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <MapPin size={14} color="var(--accent-violet)" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Highlights List */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 0 0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {exp.highlights?.map((item, hIdx) => (
                      <li key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.93rem', color: 'var(--text-muted)' }}>
                        <CheckCircle2 size={16} color="var(--accent-emerald)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
