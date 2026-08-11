import React, { useState } from 'react';
import { Layers, TestTube, Atom, Brain, Terminal, Server, Database, CheckCircle2 } from 'lucide-react';

export default function Skills({ skills }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'QA & Testing', 'Full Stack', 'AI & ML'];

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills?.filter((s) => s.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Layers size={14} /> Technical Stack & Skills
          </div>
          <h2 className="section-title">
            Technologies & <span className="gradient-text">Proficiencies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive matrix of technologies, frameworks, and test automation tools utilized in production software development.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`btn ${activeCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
              style={{
                borderRadius: 'var(--radius-full)',
                padding: '0.5rem 1.25rem',
                fontSize: '0.9rem',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {filteredSkills?.map((skill, idx) => (
            <div key={skill.id || idx} className="glass-card" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'rgba(56, 189, 248, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)',
                    }}
                  >
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>{skill.name}</h4>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{skill.category}</span>
                  </div>
                </div>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div
                style={{
                  height: '6px',
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${skill.level}%`,
                    background:
                      skill.category === 'QA & Testing'
                        ? 'var(--gradient-qa)'
                        : skill.category === 'AI & ML'
                        ? 'var(--gradient-ai)'
                        : 'var(--gradient-fullstack)',
                    borderRadius: '10px',
                    transition: 'width 1s ease-out',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
